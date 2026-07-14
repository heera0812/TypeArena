"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, Medal, Crown, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

const LANG_TABS = [
  { label: "All", value: "" },
  { label: "English", value: "EN" },
  { label: "Hindi", value: "HI" },
];

export default function HallOfFame() {
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeLang, setActiveLang] = useState("");

  useEffect(() => {
    setLoading(true);
    const url = activeLang
      ? `${API_URL}/api/hall-of-fame?language=${activeLang}`
      : `${API_URL}/api/hall-of-fame`;
    fetch(url)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRecords(data.map((r: any, i: number) => ({
            rank: i + 1,
            name: r.participant?.playerSession?.name || "–",
            scholarNumber: r.participant?.playerSession?.scholarNumber || "–",
            course: r.participant?.playerSession?.course || "–",
            semester: r.participant?.playerSession?.semester || "–",
            wpm: r.netWpm,
            accuracy: Math.round(r.accuracy),
            competition: r.competition?.name || "–",
            gameMode: r.competition?.gameMode || "–",
            language: r.competition?.language || "–",
          })));
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [activeLang]);

  const rankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-6 h-6 text-[#FFB800]" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-600" />;
    return <span className="text-white/40 font-bold text-lg w-6 text-center">{rank}</span>;
  };

  return (
    <div className="w-full max-w-5xl mx-auto min-h-[85vh] pt-10 pb-20 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="flex justify-center mb-4">
          <div className="relative">
            <Trophy className="w-20 h-20 text-[#FFB800]" />
            <Star className="w-6 h-6 text-white absolute -top-1 -right-1" />
          </div>
        </div>
        <h1 className="text-5xl font-black text-white uppercase tracking-wider">Hall of Fame</h1>
        <p className="text-white/50 mt-2 text-sm">All-time top 10 performers across all competitions</p>
      </motion.div>

      {/* Language tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {LANG_TABS.map(tab => (
          <button
            key={tab.value}
            onClick={() => setActiveLang(tab.value)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
              activeLang === tab.value
                ? "bg-[#FFB800] text-gray-900 shadow-lg"
                : "bg-white/10 text-white/70 hover:bg-white/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Records */}
      {loading ? (
        <div className="text-center text-white/40 py-20 animate-pulse">Loading Hall of Fame...</div>
      ) : records.length === 0 ? (
        <div className="text-center py-20">
          <Trophy className="w-16 h-16 text-white/20 mx-auto mb-4" />
          <p className="text-white/40 text-lg">No records yet. Complete a competition to appear here!</p>
          <Link href="/register" className="mt-4 inline-block px-6 py-2 bg-[#FFB800] text-gray-900 font-bold rounded-full">
            Join Competition
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {records.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.06 * i }}
              className={`flex items-center gap-4 rounded-2xl p-4 transition-all ${
                r.rank === 1 ? "bg-[#FFB800]/15 border border-[#FFB800]/40 ring-1 ring-[#FFB800]/20" :
                r.rank === 2 ? "bg-white/8 border border-white/15" :
                r.rank === 3 ? "bg-white/5 border border-white/10" :
                "bg-white/5 border border-white/5"
              }`}
            >
              {/* Rank icon */}
              <div className="flex-shrink-0 w-10 flex justify-center">
                {rankIcon(r.rank)}
              </div>

              {/* Name */}
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold truncate">{r.name}</div>
                <div className="text-white/40 text-xs">{r.scholarNumber} · {r.course} ({r.semester})</div>
              </div>

              {/* Competition */}
              <div className="hidden md:block text-right min-w-[120px]">
                <div className="text-white/60 text-xs truncate">{r.competition}</div>
                <div className="text-white/30 text-[10px]">{r.gameMode} · {r.language === "HI" ? "हिंदी" : "English"}</div>
              </div>

              {/* Stats */}
              <div className="text-right min-w-[80px]">
                <div className={`text-2xl font-black ${r.rank === 1 ? "text-[#FFB800]" : "text-white"}`}>{r.wpm}</div>
                <div className="text-white/40 text-xs">WPM</div>
              </div>
              <div className="text-right min-w-[60px]">
                <div className="text-lg font-bold text-white/70">{r.accuracy}%</div>
                <div className="text-white/30 text-xs">Acc</div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-center gap-6 mt-10">
        <Link href="/" className="text-white/40 hover:text-white text-sm">← Home</Link>
        <Link href="/results" className="text-[#FFB800] hover:underline text-sm">View All Results</Link>
      </div>
    </div>
  );
}
