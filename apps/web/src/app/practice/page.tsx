"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, RefreshCw, Play, Pause } from "lucide-react";
import { API_URL } from "@/lib/api";

// Grapheme segmentation (handles Hindi Unicode correctly)
function getGraphemes(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new (Intl as any).Segmenter("hi", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (s: any) => s.segment);
  }
  return [...text];
}

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

  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [errors, setErrors] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Fetch DB paragraphs for selection
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
    setWpm(0);
    setAccuracy(100);
    setErrors(0);
    setTimeElapsed(0);
    startTimeRef.current = null;
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const pickRandom = () => {
    const samples = language === "HI" ? SAMPLE_HI : SAMPLE_EN;
    const dbParagraphs = paragraphs.filter(p => p.language === language);
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

    const val = e.target.value;

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

    if (val === targetText) {
      setIsActive(false);
      setHasFinished(true);
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
    const grossWpm = elapsedMin > 0 ? (total / 5) / elapsedMin : 0;
    const netWpm = Math.max(0, grossWpm - errs / elapsedMin);
    const acc = total > 0 ? Math.round((correct / total) * 100) : 100;
    setWpm(Math.round(netWpm));
    setAccuracy(acc);
    setErrors(errs);
  };

  const completionPct = Math.min(100, Math.round((getGraphemes(inputText).length / targetGraphemes.length) * 100));

  // Text rendering
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

      <div className="text-center mb-8">
        <div className="flex justify-center mb-3"><BookOpen className="w-10 h-10 text-[#FFB800]" /></div>
        <h1 className="text-4xl font-black text-white uppercase tracking-wider">Practice Mode</h1>
        <p className="text-white/50 mt-1 text-sm">Single-player practice — no lobby or admin needed</p>
      </div>

      {/* Config */}
      <div className="flex flex-wrap gap-3 mb-6">
        {/* Language toggle */}
        <div className="flex rounded-lg overflow-hidden border border-white/20">
          {(["EN", "HI"] as const).map(lang => (
            <button
              key={lang}
              onClick={() => { setLanguage(lang); pickRandom(); }}
              className={`px-5 py-2 text-sm font-bold transition-all ${language === lang ? "bg-[#FFB800] text-gray-900" : "bg-white/10 text-white hover:bg-white/20"}`}
            >
              {lang === "EN" ? "🇬🇧 English" : "🇮🇳 Hindi"}
            </button>
          ))}
        </div>

        {/* Paragraph picker */}
        <select
          className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 text-sm flex-1 min-w-[150px]"
          value={selectedParagraph}
          onChange={e => handleParagraphSelect(e.target.value)}
        >
          <option value="">— Pick a paragraph —</option>
          {paragraphs.filter(p => p.language === language).map(p => (
            <option key={p.id} value={p.id} className="text-gray-900">{p.title} ({p.difficulty})</option>
          ))}
        </select>

        <button
          onClick={pickRandom}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg text-sm flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" /> Random
        </button>

        <button
          onClick={resetState}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg text-sm"
        >
          Reset
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: "NET WPM", value: wpm, color: "text-[#FFB800]" },
          { label: "ACCURACY", value: `${accuracy}%`, color: "text-white" },
          { label: "ERRORS", value: errors, color: "text-red-400" },
          { label: "TIME", value: `${timeElapsed}s`, color: "text-white/70" },
        ].map(stat => (
          <div key={stat.label} className="bg-white/10 border border-white/10 rounded-xl p-3 flex flex-col items-center">
            <span className={`text-2xl font-black ${stat.color}`}>{stat.value}</span>
            <span className="text-white/40 text-[9px] uppercase tracking-wider mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-white/10 rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-[#FFB800] rounded-full"
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-2xl z-10"
            >
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-3xl font-black text-[#075EA8]">Excellent!</h2>
              <p className="text-gray-500 mt-2">{wpm} WPM · {accuracy}% Accuracy · {errors} Errors</p>
              <button
                onClick={pickRandom}
                className="mt-6 px-8 py-3 bg-[#FFB800] hover:bg-[#F0AD00] text-gray-900 font-bold rounded-full shadow transition-transform hover:scale-105"
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

      <p className="text-center text-white/30 text-xs mt-4">
        {hasStarted && !hasFinished ? "⌨ Keep typing..." : "Click the text area above to focus, then type to begin"}
      </p>
    </div>
  );
}
