"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { io, Socket } from "socket.io-client";
import { useRouter, useSearchParams } from "next/navigation";
import { API_URL, WS_URL } from "@/lib/api";
import { Pause, Play, Square, Flag } from "lucide-react";

let socket: Socket | null = null;

// ── Grapheme-aware segmentation (handles Hindi Unicode correctly) ──
function getGraphemes(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new (Intl as any).Segmenter("hi", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (s: any) => s.segment);
  }
  // Fallback: spread for basic Latin (works fine for English)
  return [...text];
}

type CompStatus = "DRAFT" | "LOBBY_OPEN" | "COUNTDOWN" | "ACTIVE" | "PAUSED" | "FINISHED";

export default function GameLobby() {
  return (
    <Suspense fallback={<div className="text-white text-center py-20 font-bold">Loading Lobby...</div>}>
      <LobbyContent />
    </Suspense>
  );
}

function LobbyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const competitionId = searchParams.get("competitionId");
  const isSpectator = searchParams.get("spectate") === "true";

  const [inputText, setInputText] = useState("");
  const [targetText, setTargetText] = useState("Loading competition...");
  const [targetGraphemes, setTargetGraphemes] = useState<string[]>([]);
  const [language, setLanguage] = useState<"EN" | "HI">("EN");
  const [gameMode, setGameMode] = useState<string>("RACE");
  const [duration, setDuration] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const [players, setPlayers] = useState<any[]>([]);
  const [compState, setCompState] = useState<any>(null);
  const [localStatus, setLocalStatus] = useState<CompStatus>("LOBBY_OPEN");
  const [countdown, setCountdown] = useState(4);
  const [myParticipantId, setMyParticipantId] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startAtRef = useRef<number | null>(null);

  // ── Load competition + paragraph ──
  useEffect(() => {
    if (!competitionId) { router.push("/register"); return; }

    fetch(`${API_URL}/api/competitions/${competitionId}`)
      .then(r => r.json())
      .then((comp: any) => {
        if (comp?.paragraph?.content) {
          const text = comp.paragraph.content;
          setTargetText(text);
          setTargetGraphemes(getGraphemes(text));
          setLanguage(comp.language || "EN");
          setGameMode(comp.gameMode || "RACE");
          if (comp.duration) setDuration(comp.duration);
        }
      })
      .catch(err => console.error("Failed to load competition:", err));
  }, [competitionId, router]);

  // ── Socket.IO connection ──
  useEffect(() => {
    if (!competitionId) return;

    const sessionToken = localStorage.getItem("typearena_session");
    const adminToken = localStorage.getItem("typearena_admin_token");

    socket = io(WS_URL, {
      auth: isSpectator ? { adminToken } : { sessionToken },
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socket.on("connect", () => {
      socket!.emit("competition:join", { competitionId });
    });

    socket.on("lobby:players", (playerList: any[]) => {
      setPlayers(playerList);
      // Identify self
      if (!isSpectator) {
        const myToken = localStorage.getItem("typearena_session");
        const me = playerList.find(p => p.playerSession?.sessionToken === myToken);
        if (me) setMyParticipantId(me.id);
      }
    });

    socket.on("competition:state", (state: any) => {
      setCompState(state);
      setLocalStatus(state.status as CompStatus);
      if (state.paragraph?.content) {
        const text = state.paragraph.content;
        setTargetText(text);
        setTargetGraphemes(getGraphemes(text));
        setLanguage(state.language || "EN");
        setGameMode(state.gameMode || "RACE");
      }

      if (state.status === "COUNTDOWN") {
        startAtRef.current = new Date(state.startAt).getTime();
        const tick = setInterval(() => {
          const delta = startAtRef.current! - Date.now();
          if (delta <= 0) {
            clearInterval(tick);
            setCountdown(0);
            setIsActive(true);
            inputRef.current?.focus();
            // Start game timer if duration-based mode
            if (state.duration) {
              setTimeLeft(state.duration);
              startDurationTimer(state.duration);
            }
          } else {
            setCountdown(Math.ceil(delta / 1000));
          }
        }, 100);
      } else if (state.status === "ACTIVE") {
        setIsActive(true);
        inputRef.current?.focus();
      } else if (state.status === "PAUSED") {
        setIsActive(false);
      } else if (state.status === "FINISHED") {
        setIsActive(false);
        setHasFinished(true);
        if (timerRef.current) clearInterval(timerRef.current);
        // Navigate to results after a short delay
        setTimeout(() => {
          router.push(`/results?competitionId=${competitionId}`);
        }, 2000);
      }
    });

    socket.on("game:progress-update", (playerList: any[]) => {
      setPlayers(playerList);
      if (!isSpectator) {
        const myToken = localStorage.getItem("typearena_session");
        const me = playerList.find((p: any) => p.playerSession?.sessionToken === myToken);
        if (me) {
          setWpm(me.netWpm || 0);
          setAccuracy(Math.round(me.accuracy || 100));
          if (me.id && !myParticipantId) setMyParticipantId(me.id);
        }
      }
    });

    return () => {
      socket?.disconnect();
      socket = null;
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [competitionId, isSpectator]);

  const startDurationTimer = (seconds: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    let remaining = seconds;
    timerRef.current = setInterval(() => {
      remaining -= 1;
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(timerRef.current!);
        // Time up → submit finish
        handleFinish();
      }
    }, 1000);
  };

  const handleFinish = useCallback(() => {
    if (hasFinished || !myParticipantId) return;
    setIsActive(false);
    setHasFinished(true);
    if (timerRef.current) clearInterval(timerRef.current);
    socket?.emit("game:finish", { competitionId, participantId: myParticipantId });
    setTimeout(() => router.push(`/results?competitionId=${competitionId}`), 1500);
  }, [hasFinished, myParticipantId, competitionId, router]);

  const handleReady = () => {
    const myToken = localStorage.getItem("typearena_session");
    const me = players.find(p => p.playerSession?.sessionToken === myToken);
    if (me) socket?.emit("player:ready", { competitionId, participantId: me.id });
  };

  // Admin controls
  const handleStart = () => socket?.emit("admin:start", { competitionId });
  const handlePause = () => socket?.emit("admin:pause", { competitionId });
  const handleResume = () => socket?.emit("admin:resume", { competitionId });
  const handleStop = () => {
    if (confirm("End the competition for all players?")) {
      socket?.emit("admin:stop", { competitionId });
    }
  };

  // ── Typing input handler — grapheme-aware ──
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isActive || hasFinished) return;

    const val = e.target.value;
    setInputText(val);

    // Grapheme-aware scoring
    const typedGraphemes = getGraphemes(val);
    let correctGraphemes = 0;
    for (let i = 0; i < typedGraphemes.length; i++) {
      if (typedGraphemes[i] === targetGraphemes[i]) correctGraphemes++;
    }
    const totalTyped = typedGraphemes.length;

    const me = players.find(p => p.id === myParticipantId);
    if (me || myParticipantId) {
      socket?.emit("game:progress", {
        competitionId,
        participantId: myParticipantId,
        progress: Math.min((totalTyped / targetGraphemes.length) * 100, 100),
        correctGraphemes,
        errors: totalTyped - correctGraphemes,
        totalTyped,
      });
    }

    // Check completion (full match)
    if (val === targetText) {
      handleFinish();
    }
  };

  // ── Text rendering — grapheme-aware, with Hindi font ──
  const renderText = () => {
    const typedGraphemes = getGraphemes(inputText);
    return targetGraphemes.map((grapheme, index) => {
      let cls = "text-gray-400";
      if (index < typedGraphemes.length) {
        cls = typedGraphemes[index] === grapheme
          ? "text-green-600 font-semibold"
          : "text-red-500 font-semibold bg-red-50 rounded";
      } else if (index === typedGraphemes.length) {
        cls = "text-gray-900 border-b-2 border-[#FFB800] animate-pulse";
      }
      return <span key={index} className={cls}>{grapheme}</span>;
    });
  };

  const isDarkArena = localStatus === "ACTIVE" || localStatus === "COUNTDOWN";

  return (
    <div className={`w-full min-h-[85vh] flex flex-col items-center justify-start pt-8 pb-16 px-4 transition-colors duration-700 ${isDarkArena ? "bg-[#071A2F]" : ""}`}>

      {/* Stats Bar */}
      <div className="flex justify-center items-center gap-4 md:gap-10 w-full max-w-5xl mb-8">
        <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center border border-white/10 min-w-[100px]">
          <span className="text-[#FFB800] text-3xl md:text-4xl font-extrabold tracking-tighter">{wpm}</span>
          <span className="text-white/70 text-[9px] uppercase font-bold tracking-widest mt-1">NET WPM</span>
        </div>
        <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center border border-white/10 min-w-[100px]">
          <span className="text-white text-3xl md:text-4xl font-extrabold tracking-tighter">{accuracy}%</span>
          <span className="text-white/70 text-[9px] uppercase font-bold tracking-widest mt-1">ACCURACY</span>
        </div>
        {timeLeft !== null && (
          <div className={`bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center border min-w-[100px] ${timeLeft <= 10 ? "border-red-400 animate-pulse" : "border-white/10"}`}>
            <span className={`text-3xl md:text-4xl font-extrabold tracking-tighter ${timeLeft <= 10 ? "text-red-400" : "text-white"}`}>{timeLeft}s</span>
            <span className="text-white/70 text-[9px] uppercase font-bold tracking-widest mt-1">TIME LEFT</span>
          </div>
        )}
        <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center border border-white/10 min-w-[100px]">
          <span className={`text-xs font-black px-2 py-1 rounded uppercase tracking-wider ${
            localStatus === "LOBBY_OPEN" ? "bg-blue-500 text-white" :
            localStatus === "COUNTDOWN" ? "bg-yellow-400 text-gray-900" :
            localStatus === "ACTIVE" ? "bg-green-500 text-white" :
            localStatus === "PAUSED" ? "bg-orange-400 text-white" :
            localStatus === "FINISHED" ? "bg-gray-500 text-white" : "bg-gray-400 text-white"
          }`}>{localStatus.replace("_", " ")}</span>
          <span className="text-white/70 text-[9px] uppercase font-bold tracking-widest mt-1">STATUS</span>
        </div>
      </div>

      <div className="w-full max-w-5xl space-y-6">

        {/* Race Track */}
        <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">
              {isSpectator ? "👁 Live Spectator View" : "🏁 Live Race Track"}
            </h3>
            <span className="text-white/40 text-xs font-mono">{players.length} player{players.length !== 1 ? "s" : ""}</span>
          </div>
          <div className="space-y-7">
            {players.length === 0 ? (
              <div className="text-white/30 text-sm text-center py-4">Waiting for players to join...</div>
            ) : players.map((p: any) => (
              <div key={p.id} className="relative">
                <div className="relative w-full h-7 bg-white/10 rounded-full overflow-visible">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#075EA8]/70 to-[#075EA8] rounded-full"
                    animate={{ width: `${Math.max(0, Math.min(100, p.progress || 0))}%` }}
                    transition={{ duration: 0.4, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 bg-white rounded-full shadow-lg border-2 border-[#FFB800] flex items-center justify-center text-xl z-10"
                    animate={{ left: `${Math.max(2, Math.min(98, p.progress || 0))}%` }}
                    transition={{ duration: 0.4, ease: "linear" }}
                  >
                    {p.playerSession?.avatarId || "👤"}
                  </motion.div>
                </div>
                <div className="flex items-center gap-2 mt-1 ml-1">
                  <span className="text-xs text-white/60 font-mono">{p.playerSession?.name || "Player"}</span>
                  <span className="text-xs text-[#FFB800] font-bold">{p.netWpm || 0} WPM</span>
                  {p.accuracy && <span className="text-xs text-white/40">{Math.round(p.accuracy)}%</span>}
                  {localStatus === "LOBBY_OPEN" && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${p.ready ? "bg-green-500 text-white" : "bg-red-400 text-white"}`}>
                      {p.ready ? "READY" : "NOT READY"}
                    </span>
                  )}
                  {p.finishedAt && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FFB800] text-gray-900">FINISHED #{p.finalRank || "–"}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typing Arena (players only) */}
        {!isSpectator && (
          <div className={`bg-white rounded-2xl shadow-2xl relative overflow-hidden min-h-[280px] transition-all ${isDarkArena ? "ring-2 ring-[#FFB800]/60" : ""}`}>

            {/* Lobby waiting overlay */}
            {localStatus === "LOBBY_OPEN" && (
              <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center z-20 gap-4">
                <h2 className="text-2xl font-bold text-[#075EA8]">Lobby Open</h2>
                <p className="text-gray-500 text-sm">Waiting for players... Admin will start the match.</p>
                <button
                  onClick={handleReady}
                  className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition-transform active:scale-95 uppercase tracking-wider"
                >
                  ✓ I&apos;m Ready
                </button>
              </div>
            )}

            {/* Countdown overlay */}
            <AnimatePresence>
              {localStatus === "COUNTDOWN" && (
                <motion.div
                  key="countdown"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#044075]/95 flex flex-col items-center justify-center z-20"
                >
                  <motion.div
                    key={countdown}
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 1 }}
                    exit={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-9xl font-black text-[#FFB800]"
                  >
                    {countdown > 0 ? countdown : "GO!"}
                  </motion.div>
                  <p className="text-white/60 mt-4 uppercase tracking-widest text-sm">Get Ready...</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Paused overlay */}
            {localStatus === "PAUSED" && (
              <div className="absolute inset-0 bg-orange-900/80 flex flex-col items-center justify-center z-20">
                <Pause className="w-16 h-16 text-white mb-4" />
                <h2 className="text-2xl font-bold text-white">Game Paused</h2>
                <p className="text-white/60 mt-2">Admin has paused the competition.</p>
              </div>
            )}

            {/* Finished overlay */}
            {localStatus === "FINISHED" && (
              <div className="absolute inset-0 bg-[#044075]/95 flex flex-col items-center justify-center z-20">
                <Flag className="w-16 h-16 text-[#FFB800] mb-4" />
                <h2 className="text-2xl font-bold text-white">Competition Finished!</h2>
                <p className="text-white/60 mt-2">Redirecting to results...</p>
              </div>
            )}

            {/* Text display */}
            <div
              className={`p-8 md:p-12 text-xl md:text-2xl leading-relaxed tracking-wide select-none cursor-text ${language === "HI" ? "font-devanagari" : "font-mono"}`}
              onClick={() => { if (isActive) inputRef.current?.focus(); }}
            >
              {renderText()}
            </div>

            {/* Hidden input */}
            <input
              ref={inputRef}
              type="text"
              className="absolute opacity-0 w-0 h-0"
              value={inputText}
              onChange={handleInputChange}
              disabled={!isActive || hasFinished}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </div>
        )}

        {/* Admin Controls */}
        {isSpectator && (
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-4">🎛 Admin Controls</h3>
            <div className="flex flex-wrap gap-3">
              {localStatus === "LOBBY_OPEN" && (
                <button
                  onClick={handleStart}
                  className="px-8 py-3 bg-[#FFB800] hover:bg-[#F0AD00] text-gray-900 font-bold rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <Play className="w-5 h-5" /> Start Match
                </button>
              )}
              {localStatus === "ACTIVE" && (
                <button
                  onClick={handlePause}
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl flex items-center gap-2"
                >
                  <Pause className="w-5 h-5" /> Pause
                </button>
              )}
              {localStatus === "PAUSED" && (
                <button
                  onClick={handleResume}
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl flex items-center gap-2"
                >
                  <Play className="w-5 h-5" /> Resume
                </button>
              )}
              {(localStatus === "ACTIVE" || localStatus === "PAUSED") && (
                <button
                  onClick={handleStop}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl flex items-center gap-2"
                >
                  <Square className="w-5 h-5" /> End Competition
                </button>
              )}
              {(localStatus === "ACTIVE" || localStatus === "PAUSED" || localStatus === "FINISHED") && (
                <a
                  href={`/results?competitionId=${competitionId}`}
                  className="px-6 py-3 bg-[#075EA8] hover:bg-[#044075] text-white font-bold rounded-xl flex items-center gap-2"
                >
                  📊 View Results
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
