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
            mandal: r.participant?.playerSession?.mandal || "–",
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
    if (rank === 1) return <Crown className="w-6 h-6 text-amber-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-slate-400" />;
    if (rank === 3) return <Medal className="w-6 h-6 text-amber-700" />;
    return <span className="text-slate-400 font-bold text-lg w-6 text-center">{rank}</span>;
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
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/10">
            <Trophy className="w-9 h-9" />
          </div>
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tight uppercase">Hall of Fame</h1>
        <p className="text-slate-500 mt-2 text-sm font-medium">All-time top 10 performers across all competitions</p>
      </motion.div>

      {/* Language tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {LANG_TABS.map(tab => (
          <button
            key={tab.value}
            onClick={() => setActiveLang(tab.value)}
            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
              activeLang === tab.value
                ? "bg-[#1d61e8] text-white shadow-lg shadow-blue-500/20"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Records */}
      {loading ? (
        <div className="text-center text-slate-400 py-20 animate-pulse font-medium">Loading Hall of Fame...</div>
      ) : records.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-blue-500/5">
          <Trophy className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500 text-lg font-medium">No records yet. Complete a competition to appear here!</p>
          <Link href="/register" className="mt-4 inline-block px-8 py-3 bg-[#1d61e8] text-white font-extrabold rounded-full shadow-lg shadow-blue-500/20">
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
              className={`flex items-center gap-4 rounded-2xl p-5 transition-all bg-white border border-slate-100 shadow-xl shadow-blue-500/5 ${
                r.rank === 1 ? "ring-2 ring-amber-400 bg-amber-50/20" : ""
              }`}
            >
              {/* Rank icon */}
              <div className="flex-shrink-0 w-10 flex justify-center">
                {rankIcon(r.rank)}
              </div>

              {/* Name */}
              <div className="flex-1 min-w-0">
                <div className="text-slate-900 font-extrabold text-base truncate">{r.name}</div>
                <div className="text-slate-400 text-xs font-mono">{r.scholarNumber} · {r.mandal} ({r.semester})</div>
              </div>

              {/* Competition */}
              <div className="hidden md:block text-right min-w-[120px]">
                <div className="text-slate-700 font-bold text-xs truncate">{r.competition}</div>
                <div className="text-slate-400 text-[10px] uppercase font-semibold">{r.gameMode} · {r.language === "HI" ? "हिंदी" : "English"}</div>
              </div>

              {/* Stats */}
              <div className="text-right min-w-[80px]">
                <div className={`text-2xl font-black ${r.rank === 1 ? "text-amber-500" : "text-[#1d61e8]"}`}>{r.wpm}</div>
                <div className="text-slate-400 text-[10px] uppercase font-black tracking-wider">WPM</div>
              </div>
              <div className="text-right min-w-[60px]">
                <div className="text-lg font-bold text-slate-700">{r.accuracy}%</div>
                <div className="text-slate-400 text-[10px] uppercase font-black tracking-wider">Acc</div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-center gap-6 mt-10">
        <Link href="/" className="text-slate-500 hover:text-slate-900 text-sm font-semibold">← Home</Link>
        <Link href="/results" className="text-[#1d61e8] font-extrabold hover:underline text-sm">View All Results</Link>
      </div>
    </div>
  );
}
