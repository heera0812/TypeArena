"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Keyboard, Zap, Timer, Target, Users, Globe, WifiOff, BarChart2, FileSpreadsheet, Sparkles } from "lucide-react";

// Floating keyboard key decoration
function FloatingKey({ char, className }: { char: string; className: string }) {
  return (
    <div className={`absolute pointer-events-none select-none ${className}`}>
      <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center text-slate-400 font-mono text-sm font-bold">
        {char}
      </div>
    </div>
  );
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function LandingPage() {
  return (
    <div className="relative flex flex-col min-h-[85vh] w-full items-center justify-center text-center px-4 py-12 overflow-hidden bg-gradient-to-b from-[#f4f8fc] via-[#e9f2fc] to-[#f4f8fc]">

      {/* Floating keyboard keys background */}
      <FloatingKey char="A" className="top-[12%] left-[9%] animate-float delay-100 opacity-90" />
      <FloatingKey char="J" className="top-[22%] left-[24%] animate-float-reverse delay-300 opacity-80" />
      <FloatingKey char=";" className="top-[42%] left-[11%] animate-float-slow delay-500 opacity-85" />
      <FloatingKey char="S" className="top-[18%] right-[20%] animate-float delay-200 opacity-90" />
      <FloatingKey char="D" className="top-[32%] right-[12%] animate-float-reverse delay-400 opacity-85" />
      <FloatingKey char="F" className="top-[45%] right-[8%] animate-float-slow delay-600 opacity-90" />
      <FloatingKey char="K" className="bottom-[18%] right-[15%] animate-float delay-700 opacity-80" />

      {/* Subtle radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-400/10 blur-[130px] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-10 max-w-4xl relative z-10 w-full"
      >
        {/* Branding & Headline */}
        <motion.div variants={item} className="space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-[#1d61e8] flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Keyboard className="w-5 h-5" />
            </div>
            <span className="text-[#1d61e8] font-black text-xs md:text-sm tracking-[0.25em] uppercase">TYPEARENA</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#0f172a] tracking-tight leading-tight">
            LAN Typing<br />
            <span className="text-[#1d61e8]">Battle Arena</span>
          </h1>

          <p className="text-sm md:text-base text-slate-500 max-w-lg mx-auto font-medium leading-relaxed">
            Hindi &amp; English multiplayer typing competition platform for Dev Sanskriti Vishwavidyalaya.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center pt-1">
          <Link href="/register">
            <button className="group px-9 py-3.5 text-base font-bold bg-[#1d61e8] hover:bg-[#1a56db] text-white rounded-full shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5 fill-white" /> Join Competition
            </button>
          </Link>
          <Link href="/practice">
            <button className="group px-9 py-3.5 text-base font-bold bg-white hover:bg-blue-50 text-[#1d61e8] border-2 border-[#1d61e8] rounded-full transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-sm">
              <Keyboard className="w-5 h-5" /> Practice Mode
            </button>
          </Link>
        </motion.div>

        {/* Stats Pill Card */}
        <motion.div variants={item} className="max-w-2xl mx-auto w-full">
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-blue-500/5 border border-slate-100 flex flex-wrap justify-around items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1d61e8] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-xl font-black text-slate-900 leading-tight">50+</div>
                <div className="text-xs text-slate-400 font-medium">Players / Session</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-slate-100" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1d61e8] flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-xl font-black text-slate-900 leading-tight">हिंदी &amp; EN</div>
                <div className="text-xs text-slate-400 font-medium">Languages</div>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-slate-100" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1d61e8] flex items-center justify-center">
                <WifiOff className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-xl font-black text-slate-900 leading-tight">0</div>
                <div className="text-xs text-slate-400 font-medium">Internet Needed</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Game Mode Cards */}
        <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          {/* Race Mode */}
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-500/5 border border-slate-100 flex flex-col items-center text-center gap-3 hover:translate-y-1 transition-transform cursor-default relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 fill-emerald-600" />
            </div>
            <h3 className="text-slate-900 font-extrabold text-base">Race Mode</h3>
            <p className="text-slate-500 text-xs leading-relaxed">First to finish the paragraph wins the race!</p>
            <div className="w-10 h-1 bg-emerald-500 rounded-full mt-1" />
          </div>

          {/* Speed Sprint */}
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-500/5 border border-slate-100 flex flex-col items-center text-center gap-3 hover:translate-y-1 transition-transform cursor-default relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Timer className="w-7 h-7" />
            </div>
            <h3 className="text-slate-900 font-extrabold text-base">Speed Sprint</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Max WPM within the time limit — every second counts!</p>
            <div className="w-10 h-1 bg-amber-500 rounded-full mt-1" />
          </div>

          {/* Accuracy Challenge */}
          <div className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-500/5 border border-slate-100 flex flex-col items-center text-center gap-3 hover:translate-y-1 transition-transform cursor-default relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-slate-900 font-extrabold text-base">Accuracy Challenge</h3>
            <p className="text-slate-500 text-xs leading-relaxed">Fewest errors wins. Precision over speed!</p>
            <div className="w-10 h-1 bg-purple-500 rounded-full mt-1" />
          </div>
        </motion.div>

        {/* Bottom Feature Pill Bar */}
        <motion.div variants={item} className="max-w-4xl mx-auto w-full pt-2">
          <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-4 flex flex-wrap justify-around items-center gap-4 text-slate-700 text-xs md:text-sm font-bold">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-[#1d61e8]" />
              <span>Live Leaderboard</span>
            </div>
            <div className="w-px h-4 bg-blue-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4 text-[#1d61e8]" />
              <span>Excel Reports</span>
            </div>
            <div className="w-px h-4 bg-blue-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-serif font-black text-[#1d61e8]">अ</span>
              <span>Hindi Unicode</span>
            </div>
            <div className="w-px h-4 bg-blue-200 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#1d61e8]" />
              <span>Real-time Multiplayer</span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
