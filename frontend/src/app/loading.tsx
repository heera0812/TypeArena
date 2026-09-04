"use client";

import { motion } from "framer-motion";
import { Keyboard } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-[9999] flex flex-col items-center justify-center p-4">
      {/* Top glowing progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#1d61e8] animate-pulse shadow-[0_0_12px_#1d61e8]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="flex flex-col items-center gap-4 bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 max-w-xs w-full text-center"
      >
        <div className="relative">
          {/* Animated outer ring */}
          <div className="w-16 h-16 border-4 border-blue-100 border-t-[#1d61e8] rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center text-[#1d61e8]">
            <Keyboard className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black text-slate-900 tracking-tight">Loading Page</h3>
          <p className="text-xs text-slate-400 font-medium mt-0.5">Entering the Arena...</p>
        </div>

        {/* Shimmer progress line */}
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden relative mt-1">
          <div className="w-1/2 h-full bg-[#1d61e8] rounded-full animate-[shimmer_1.2s_infinite] bg-[length:200%_100%]" />
        </div>
      </motion.div>
    </div>
  );
}
