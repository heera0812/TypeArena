"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, RefreshCw, Play, Pause, Star } from "lucide-react";
import { API_URL } from "@/lib/api";

// ── Grapheme segmentation ──
function getGraphemes(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new (Intl as any).Segmenter("hi", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (s: any) => s.segment);
  }
  return [...text];
}

// ── Confetti burst component ──
function ConfettiBurst() {
  const colors = ["#FFB800", "#075EA8", "#22c55e", "#ef4444", "#8b5cf6", "#ec4899", "#06b6d4"];
  const pieces = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 0.8,
    duration: 2 + Math.random() * 2,
    rotation: Math.random() * 360,
    size: 6 + Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            backgroundColor: p.color,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
}

// ── Star Rating component ──
function StarRating({ wpm }: { wpm: number }) {
  const getStars = () => {
    if (wpm >= 50) return 5;
    if (wpm >= 35) return 4;
    if (wpm >= 20) return 3;
    if (wpm >= 10) return 2;
    return 1;
  };
  const earned = getStars();

  return (
    <div className="star-rating flex justify-center gap-1 my-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={`star text-3xl ${s <= earned ? "earned" : "empty"}`}
          style={{ animationDelay: `${s * 0.15}s` }}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}

// ── Progress Ring (SVG circular gauge) ──
function ProgressRing({ progress = 0, size = 80, strokeWidth = 6 }: { progress?: number; size?: number; strokeWidth?: number }) {
  const safeProgress = typeof progress !== "number" || isNaN(progress) || !isFinite(progress) ? 0 : Math.max(0, Math.min(100, progress));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (safeProgress / 100) * circumference;
  const safeOffset = isNaN(offset) || !isFinite(offset) ? circumference : offset;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={strokeWidth} />
      <circle
        cx={size / 2} cy={size / 2} r={radius} fill="none"
        stroke="#FFB800" strokeWidth={strokeWidth} strokeLinecap="round"
        strokeDasharray={circumference} strokeDashoffset={safeOffset}
        className="progress-ring-circle"
      />
    </svg>
  );
}

// ── Virtual Keyboard ──
const KEYBOARD_ROWS_EN = [
  { keys: [["`","~"],["1","!"],["2","@"],["3","#"],["4","$"],["5","%"],["6","^"],["7","&"],["8","*"],["9","("],["0",")"],["-","_"],["=","+"]], fingers: ["pinky-l","pinky-l","ring-l","middle-l","index-l","index-l","index-r","index-r","middle-r","ring-r","pinky-r","pinky-r","pinky-r"] },
  { keys: [["q","Q"],["w","W"],["e","E"],["r","R"],["t","T"],["y","Y"],["u","U"],["i","I"],["o","O"],["p","P"],["[","{"],["]","}"],["\\","|"]], fingers: ["pinky-l","ring-l","middle-l","index-l","index-l","index-r","index-r","middle-r","ring-r","pinky-r","pinky-r","pinky-r","pinky-r"] },
  { keys: [["a","A"],["s","S"],["d","D"],["f","F"],["g","G"],["h","H"],["j","J"],["k","K"],["l","L"],[";",":"],["'","\""]], fingers: ["pinky-l","ring-l","middle-l","index-l","index-l","index-r","index-r","middle-r","ring-r","pinky-r","pinky-r"] },
  { keys: [["z","Z"],["x","X"],["c","C"],["v","V"],["b","B"],["n","N"],["m","M"],[",","<"],[".",">"],["/","?"]], fingers: ["pinky-l","ring-l","middle-l","index-l","index-l","index-r","index-r","middle-r","ring-r","pinky-r"] },
];

const inscriptMap: Record<string, string> = {
  'q': 'ौ', 'Q': 'औ', 'w': 'ै', 'W': 'ऐ', 'e': 'ा', 'E': 'आ', 'r': 'ी', 'R': 'ई', 't': 'ू', 'T': 'ऊ',
  'y': 'ब', 'Y': 'भ', 'u': 'ह', 'U': 'ङ', 'i': 'ग', 'I': 'घ', 'o': 'द', 'O': 'ध', 'p': 'ज', 'P': 'झ',
  '[': 'ड', '{': 'ढ', ']': '़', '}': 'ञ', '\\': 'ॉ', '|': 'ऑ',
  'a': 'ो', 'A': 'ओ', 's': 'े', 'S': 'ए', 'd': '्', 'D': 'अ', 'f': 'ि', 'F': 'इ', 'g': 'ु', 'G': 'उ',
  'h': 'प', 'H': 'फ', 'j': 'र', 'J': 'ऱ', 'k': 'क', 'K': 'ख', 'l': 'त', 'L': 'थ',
  ';': 'च', ':': 'छ', '\'': 'ट', '"': 'ठ',
  'z': 'े', 'Z': 'ए', 'x': 'ं', 'X': 'ँ', 'c': 'म', 'C': 'ण', 'v': 'न', 'V': 'ऩ',
  'b': 'व', 'B': 'ऴ', 'n': 'ल', 'N': 'ळ', 'm': 'स', 'M': 'श',
  ',': ',', '<': 'ष', '.': '.', '>': '।', '/': 'य', '?': 'य़',
  '`': 'ृ', '~': 'ऋ', '=': 'ृ', '+': 'ऋ',
};

const mapToInscript = (text: string) => {
  return text.split('').map(char => inscriptMap[char] || char).join('');
};

const reverseInscriptMap: Record<string, string> = Object.fromEntries(
  Object.entries(inscriptMap).map(([k, v]) => [v, k.toLowerCase()])
);

function VirtualKeyboard({ nextKey, lastKeyState, language }: { nextKey: string; lastKeyState: { key: string; correct: boolean } | null; language: "EN" | "HI" }) {
  const [flashKey, setFlashKey] = useState<{ key: string; correct: boolean } | null>(null);
  
  // In Hindi, graphemes can be complex, so we match the first character of the grapheme
  const nextChar = nextKey ? nextKey[0] : "";
  const lastChar = lastKeyState?.key ? lastKeyState.key[0] : "";

  useEffect(() => {
    if (lastKeyState) {
      setFlashKey({ key: lastChar, correct: lastKeyState.correct });
      const timer = setTimeout(() => setFlashKey(null), 200);
      return () => clearTimeout(timer);
    }
  }, [lastKeyState, lastChar]);

  const rows = KEYBOARD_ROWS_EN;

  const getKeyClass = (keyPair: string[]) => {
    // If in Hindi, map the next/flash characters back to their English QWERTY equivalents
    const mappedNextChar = language === "HI" ? (reverseInscriptMap[nextChar] || nextChar) : nextChar;
    const mappedFlashChar = language === "HI" && flashKey ? (reverseInscriptMap[flashKey.key] || flashKey.key) : flashKey?.key;

    const isNext = mappedNextChar && (keyPair.includes(mappedNextChar) || keyPair.includes(mappedNextChar.toLowerCase()) || keyPair.includes(mappedNextChar.toUpperCase()));
    const isFlash = mappedFlashChar && (keyPair.includes(mappedFlashChar) || keyPair.includes(mappedFlashChar.toLowerCase()) || keyPair.includes(mappedFlashChar.toUpperCase()));
    
    if (isFlash) {
      return flashKey!.correct ? "correct" : "incorrect";
    }
    if (isNext || (nextKey === " " && keyPair.includes("SPACE"))) {
      return "active-next";
    }
    return "";
  };

  return (
    <div className="keyboard-container mt-6 mx-auto max-w-2xl">
      {rows.map((row, ri) => (
        <div key={ri} className="keyboard-row" style={{ paddingLeft: ri === 2 ? 20 : ri === 3 ? 40 : 0 }}>
          {row.keys.map((keyPair, ki) => {
            const hindiChar = language === "HI" && keyPair[0] !== " " ? inscriptMap[keyPair[0].toLowerCase()] : null;
            return (
              <div
                key={ki}
                className={`keyboard-key relative flex flex-col justify-between items-center py-1 finger-${row.fingers[ki]} ${getKeyClass(keyPair)}`}
              >
                {hindiChar && (
                  <span className="absolute top-0.5 right-1.5 text-[11px] text-amber-500 font-devanagari opacity-90 font-bold">{hindiChar}</span>
                )}
                <span className="text-[10px] text-gray-400 self-start pl-1.5">{keyPair[1] || ""}</span>
                <span className="text-sm pb-0.5">{keyPair[0] === " " ? "SPACE" : keyPair[0]}</span>
              </div>
            );
          })}
        </div>
      ))}
      {/* Space bar */}
      <div className="keyboard-row flex justify-center mt-2">
        <div className={`keyboard-key space-bar !w-96 flex items-center justify-center ${getKeyClass(["SPACE", " "])}`}>
          SPACE
        </div>
      </div>
    </div>
  );
}

// ── Constants ──
const SAMPLE_EN = [
  "The quick brown fox jumps over the lazy dog. Practice makes perfect.",
  "Technology is best when it brings people together.",
  "Computer science is not just about computers. It is about problem solving.",
];

const SAMPLE_HI = [
  "ज्ञान मनुष्य के जीवन को प्रकाश प्रदान करता है।",
  "शिक्षा से ही देश का विकास संभव है। ज्ञान ही शक्ति है।",
  "भारत एक विविधताओं से भरा सुंदर देश है।",
];



export default function PracticeMode() {
  const [language, setLanguage] = useState<"EN" | "HI">("EN");
  const [paragraphs, setParagraphs] = useState<any[]>([]);
  const [selectedParagraph, setSelectedParagraph] = useState<string>("");
  const [targetText, setTargetText] = useState(SAMPLE_EN[0]);
  const [targetGraphemes, setTargetGraphemes] = useState<string[]>(() => getGraphemes(SAMPLE_EN[0]));

  const [inputText, setInputText] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const [lastKeyState, setLastKeyState] = useState<{ key: string; correct: boolean } | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/paragraphs`)
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setParagraphs(data); })
      .catch(() => {});
  }, []);

  const setTarget = useCallback((text: string) => {
    setTargetText(text);
    setTargetGraphemes(getGraphemes(text));
    resetState();
  }, []);

  const resetState = () => {
    setInputText("");
    setIsActive(false);
    setHasStarted(false);
    setHasFinished(false);
    setShowConfetti(false);
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setTimeElapsed(0);
    setLastKeyState(null);
    startTimeRef.current = null;
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const pickRandom = (lang: "EN" | "HI" = language) => {
    const samples = lang === "HI" ? SAMPLE_HI : SAMPLE_EN;
    const dbParagraphs = paragraphs.filter(p => p.language === lang);
    const pool = [...samples, ...dbParagraphs.map((p: any) => p.content)];
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setTarget(pick);
  };

  const handleParagraphSelect = (id: string) => {
    setSelectedParagraph(id);
    const para = paragraphs.find(p => p.id === id);
    if (para) setTarget(para.content);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (hasFinished) return;

    // Apply auto-transliteration for QWERTY keyboards in Hindi mode
    const val = language === "HI" ? mapToInscript(e.target.value) : e.target.value;

    if (!hasStarted && val.length > 0) {
      setHasStarted(true);
      setIsActive(true);
      startTimeRef.current = Date.now();
      timerRef.current = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - startTimeRef.current!) / 1000));
        calcMetrics(val);
      }, 500);
    }

    setInputText(val);
    calcMetrics(val);

    // Track last key for keyboard visualization
    const typedG = getGraphemes(val);
    if (typedG.length > 0) {
      const lastTyped = typedG[typedG.length - 1];
      const expectedG = targetGraphemes[typedG.length - 1];
      setLastKeyState({ key: lastTyped, correct: lastTyped === expectedG });
    }

    if (typedG.length >= targetGraphemes.length && targetGraphemes.length > 0) {
      setIsActive(false);
      setHasFinished(true);
      setShowConfetti(true);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const calcMetrics = (val: string) => {
    if (!startTimeRef.current) return;
    const typedG = getGraphemes(val);
    let correct = 0;
    for (let i = 0; i < typedG.length; i++) {
      if (typedG[i] === targetGraphemes[i]) correct++;
    }
    const total = typedG.length;
    const errs = Math.max(0, total - correct);
    const elapsedMin = (Date.now() - startTimeRef.current) / 60000;
    let netWpm = 0;
    if (elapsedMin > 0.005) {
      const grossWpm = (total / 5) / elapsedMin;
      netWpm = Math.max(0, grossWpm - errs / elapsedMin);
    }
    const safeNetWpm = isNaN(netWpm) || !isFinite(netWpm) ? 0 : Math.round(netWpm);
    const acc = total > 0 ? Math.round((correct / total) * 100) : 100;
    setWpm(safeNetWpm);
    setAccuracy(isNaN(acc) || !isFinite(acc) ? 100 : acc);
    setErrors(errs);
  };

  const targetLen = targetGraphemes.length > 0 ? targetGraphemes.length : 1;
  const rawCompletion = (getGraphemes(inputText).length / targetLen) * 100;
  const completionPct = isNaN(rawCompletion) || !isFinite(rawCompletion) ? 0 : Math.min(100, Math.round(rawCompletion));

  // Determine next expected key for keyboard highlight
  const typedSoFar = getGraphemes(inputText);
  const nextExpectedGrapheme = targetGraphemes[typedSoFar.length] || "";

  const renderText = () => {
    const typedG = getGraphemes(inputText);
    return targetGraphemes.map((g, i) => {
      let cls = "text-gray-400";
      if (i < typedG.length) {
        cls = typedG[i] === g ? "text-green-600 font-semibold" : "text-red-500 font-semibold bg-red-50 rounded";
      } else if (i === typedG.length) {
        cls = "text-gray-900 border-b-2 border-[#FFB800] animate-pulse";
      }
      return <span key={i} className={cls}>{g}</span>;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-[85vh] pt-10 pb-20 px-4">

      {showConfetti && <ConfettiBurst />}

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1d61e8] flex items-center justify-center shadow-md shadow-blue-500/10">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Practice Mode</h1>
        <p className="text-slate-500 mt-1 text-sm font-medium">Single-player practice — hone your typing speed anytime</p>
      </motion.div>

      {/* Config Bar */}
      <div className="flex flex-wrap gap-3 mb-6 bg-white p-3 rounded-2xl shadow-xl shadow-blue-500/5 border border-slate-100">
        <div className="flex rounded-xl overflow-hidden border border-slate-200">
          {(["EN", "HI"] as const).map(lang => (
            <button
              key={lang}
              onClick={() => { setLanguage(lang); pickRandom(lang); }}
              className={`px-5 py-2 text-xs font-extrabold transition-all ${language === lang ? "bg-[#1d61e8] text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}
            >
              {lang === "EN" ? "🇬🇧 English" : "🇮🇳 Hindi"}
            </button>
          ))}
        </div>

        <select
          className="bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-2 text-xs font-semibold flex-1 min-w-[160px] focus:outline-none focus:ring-2 focus:ring-[#1d61e8]"
          value={selectedParagraph}
          onChange={e => handleParagraphSelect(e.target.value)}
        >
          <option value="">— Pick a paragraph —</option>
          {paragraphs.filter(p => p.language === language).map(p => (
            <option key={p.id} value={p.id} className="text-slate-900">{p.title} ({p.difficulty})</option>
          ))}
        </select>

        <button
          onClick={() => pickRandom()}
          className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Random
        </button>

        <button
          onClick={resetState}
          className="px-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-bold rounded-xl text-xs transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Stats with Progress Ring */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {/* WPM with progress ring */}
        <div className="bg-white rounded-2xl p-4 shadow-xl shadow-blue-500/5 border border-slate-100 flex flex-col items-center relative min-w-[110px]">
          <div className="relative flex items-center justify-center">
            <ProgressRing progress={Math.min(wpm, 100)} size={72} strokeWidth={5} />
            <span className="absolute text-[#1d61e8] text-2xl font-black">{wpm}</span>
          </div>
          <span className="text-slate-400 text-[10px] uppercase font-black tracking-wider mt-1">NET WPM</span>
        </div>
        {[
          { label: "ACCURACY", value: `${accuracy}%`, color: "text-slate-900" },
          { label: "ERRORS", value: errors, color: "text-red-500" },
          { label: "TIME", value: `${timeElapsed}s`, color: "text-slate-600" },
        ].map(stat => (
          <div key={stat.label} className="bg-white rounded-2xl p-4 shadow-xl shadow-blue-500/5 border border-slate-100 flex flex-col items-center justify-center min-w-[110px]">
            <span className={`text-3xl font-black ${stat.color}`}>{stat.value}</span>
            <span className="text-slate-400 text-[10px] uppercase font-black tracking-wider mt-1.5">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full h-2.5 bg-white/10 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#075EA8] to-[#FFB800] rounded-full"
          animate={{ width: `${completionPct}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* Typing area */}
      <div
        className={`bg-white rounded-2xl shadow-2xl p-8 min-h-[200px] relative cursor-text ${language === "HI" ? "font-devanagari" : "font-mono"} text-xl md:text-2xl leading-relaxed select-none`}
        onClick={() => inputRef.current?.focus()}
      >
        {hasFinished ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-2xl z-10 p-6"
            >
              <div className="text-5xl mb-2 animate-bounce">🎉</div>
              <h2 className="text-3xl font-black text-slate-900">Excellent!</h2>
              <StarRating wpm={wpm} />
              <p className="text-slate-500 mt-2 font-medium">{wpm} WPM · {accuracy}% Accuracy · {errors} Errors</p>
              <button
                onClick={() => pickRandom()}
                className="mt-6 px-8 py-3 bg-[#1d61e8] hover:bg-[#1a56db] text-white font-extrabold rounded-full shadow-lg shadow-blue-500/25 transition-transform hover:scale-105 active:scale-95 uppercase tracking-wide text-xs"
              >
                Try Another
              </button>
            </motion.div>
          </AnimatePresence>
        ) : !hasStarted ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-400 pointer-events-none">
            <Play className="w-8 h-8 opacity-40" />
            <p className="text-sm">Click here and start typing to begin practice</p>
          </div>
        ) : null}

        <div className={hasFinished ? "opacity-0" : ""}>{renderText()}</div>
        <input
          ref={inputRef}
          type="text"
          className="absolute opacity-0 w-0 h-0"
          value={inputText}
          onChange={handleInputChange}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>

      {/* Virtual Keyboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <VirtualKeyboard nextKey={nextExpectedGrapheme} lastKeyState={lastKeyState} language={language} />
      </motion.div>

      <p className="text-center text-white/30 text-xs mt-4">
        {hasStarted && !hasFinished ? "⌨ Keep typing..." : "Click the text area above to focus, then type to begin"}
      </p>
    </div>
  );
}
