"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Keyboard, Zap, Trophy, BookOpen } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[85vh] w-full items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8 max-w-2xl"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Keyboard className="w-10 h-10 text-[#FFB800]" />
            <span className="text-[#FFB800] font-black text-lg tracking-widest uppercase">TypeArena</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            LAN Typing<br />
            <span className="text-[#FFB800]">Battle Arena</span>
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-md mx-auto font-medium">
            Hindi &amp; English multiplayer typing competition platform for Dev Sanskriti Vishwavidyalaya.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Link href="/register">
            <button className="px-10 py-3 text-lg font-bold bg-[#FFB800] hover:bg-[#F0AD00] text-gray-900 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
              <Zap className="w-5 h-5" /> Join Competition
            </button>
          </Link>
          <Link href="/practice">
            <button className="px-10 py-3 text-lg font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
              <BookOpen className="w-5 h-5" /> Practice Mode
            </button>
          </Link>
        </div>

        <div className="flex justify-center gap-8 pt-4">
          <div className="flex flex-col items-center text-white/60">
            <span className="text-2xl font-black text-white">50+</span>
            <span className="text-xs uppercase tracking-wider">Players / Session</span>
          </div>
          <div className="w-px bg-white/10" />
          <div className="flex flex-col items-center text-white/60">
            <span className="text-2xl font-black text-white">Hindi &amp; EN</span>
            <span className="text-xs uppercase tracking-wider">Languages</span>
          </div>
          <div className="w-px bg-white/10" />
          <div className="flex flex-col items-center text-white/60">
            <span className="text-2xl font-black text-white">LAN</span>
            <span className="text-xs uppercase tracking-wider">No Internet Needed</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2">
            <Zap className="w-6 h-6 text-[#FFB800]" />
            <span className="text-white font-bold text-sm">Race Mode</span>
            <span className="text-white/50 text-xs">First to finish wins</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2">
            <Keyboard className="w-6 h-6 text-[#FFB800]" />
            <span className="text-white font-bold text-sm">Speed Sprint</span>
            <span className="text-white/50 text-xs">Max WPM in time limit</span>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2">
            <Trophy className="w-6 h-6 text-[#FFB800]" />
            <span className="text-white font-bold text-sm">Accuracy</span>
            <span className="text-white/50 text-xs">Fewest errors wins</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
