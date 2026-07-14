"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, ChevronLeft, Download, FileSpreadsheet } from "lucide-react";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { API_URL } from "@/lib/api";

export default function Results() {
  return (
    <Suspense fallback={<div className="text-white text-center py-20 font-bold">Loading Results...</div>}>
      <ResultsContent />
    </Suspense>
  );
}

function ResultsContent() {
  const searchParams = useSearchParams();
  const competitionId = searchParams.get("competitionId");

  const [results, setResults] = useState<any[]>([]);
  const [competitionName, setCompetitionName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResults();
    if (competitionId) {
      fetch(`${API_URL}/api/competitions/${competitionId}`)
        .then(r => r.json())
        .then(c => { if (c?.name) setCompetitionName(c.name); })
        .catch(() => {});
    }
  }, [competitionId]);

  const fetchResults = async () => {
    try {
      const url = competitionId
        ? `${API_URL}/api/results?competitionId=${competitionId}`
        : `${API_URL}/api/results`;
      const res = await fetch(url);
      const data = await res.json();
      if (Array.isArray(data)) {
        const formatted = data.map((r: any, index: number) => ({
          rank: r.finalRank ?? index + 1,
          name: r.participant?.playerSession?.name || "–",
          scholarNumber: r.participant?.playerSession?.scholarNumber || "–",
          wpm: r.netWpm,
          grossWpm: r.grossWpm,
          accuracy: Math.round(r.accuracy),
          cpm: r.cpm,
          errors: r.errors,
          completion: Math.round(r.completionPercentage),
          course: r.participant?.playerSession?.course || "–",
          semester: r.participant?.playerSession?.semester || "–",
          competition: r.competition?.name || "–",
          finishTime: r.finishTime ? `${(r.finishTime / 1000).toFixed(1)}s` : "–",
        }));
        setResults(formatted);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    if (results.length === 0) return;
    const headers = ["Rank", "Name", "Scholar No.", "Course", "Semester", "Net WPM", "Gross WPM", "CPM", "Accuracy%", "Errors", "Completion%", "Finish Time"];
    const rows = results.map(r => [
      r.rank, r.name, r.scholarNumber, r.course, r.semester,
      r.wpm, r.grossWpm, r.cpm, r.accuracy, r.errors, r.completion, r.finishTime
    ]);
    const csv = [headers, ...rows].map(r => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `TypeArena_${competitionName || "Results"}_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToExcel = () => {
    const url = competitionId
      ? `${API_URL}/api/reports/excel?competitionId=${competitionId}`
      : `${API_URL}/api/reports/excel`;
    window.open(url, "_blank");
  };

  const exportToPDF = () => window.print();

  const rankBadge = (rank: number) => {
    if (rank === 1) return <div className="w-8 h-8 bg-[#FFB800] rounded-full flex items-center justify-center font-bold text-white shadow">1</div>;
    if (rank === 2) return <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-700 shadow">2</div>;
    if (rank === 3) return <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center font-bold text-white shadow">3</div>;
    return <div className="text-gray-500 font-bold text-lg text-center">{rank}</div>;
  };

  return (
    <div className="w-full max-w-7xl mx-auto min-h-[85vh] flex flex-col pt-10 pb-20 px-4 print:p-0 print:w-full">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-wide uppercase flex items-center gap-3">
            <Trophy className="w-8 h-8 text-[#FFB800]" />
            {competitionName ? `${competitionName} — Results` : "Match Results"}
          </h1>
          <p className="text-white/60 mt-1 text-sm">
            {competitionId ? `Competition ID: ${competitionId}` : "All results (latest)"} • {results.length} player{results.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 print:hidden">
          <button onClick={exportToPDF} className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 text-sm flex items-center gap-2">
            <Download className="w-4 h-4" /> PDF
          </button>
          <button onClick={exportToCSV} className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 text-sm flex items-center gap-2">
            <Download className="w-4 h-4" /> CSV
          </button>
          <button onClick={exportToExcel} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm flex items-center gap-2 font-bold">
            <FileSpreadsheet className="w-4 h-4" /> Excel
          </button>
          <Link href="/">
            <button className="px-4 py-2 bg-[#FFB800] hover:bg-[#F0AD00] text-gray-900 font-bold rounded-lg text-sm flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" /> Home
            </button>
          </Link>
        </div>
      </div>

      {/* Top 3 Podium */}
      {results.length >= 3 && (
        <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto w-full">
          {/* 2nd */}
          <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl p-4 mt-6">
            <div className="text-2xl mb-2">🥈</div>
            <div className="text-white font-bold text-sm text-center">{results[1]?.name}</div>
            <div className="text-[#FFB800] font-black text-2xl">{results[1]?.wpm}</div>
            <div className="text-white/40 text-xs">WPM</div>
          </div>
          {/* 1st */}
          <div className="flex flex-col items-center bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-xl p-4 ring-2 ring-[#FFB800]/30">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-white font-bold text-sm text-center">{results[0]?.name}</div>
            <div className="text-[#FFB800] font-black text-3xl">{results[0]?.wpm}</div>
            <div className="text-white/40 text-xs">WPM</div>
          </div>
          {/* 3rd */}
          <div className="flex flex-col items-center bg-white/5 border border-white/10 rounded-xl p-4 mt-6">
            <div className="text-2xl mb-2">🥉</div>
            <div className="text-white font-bold text-sm text-center">{results[2]?.name}</div>
            <div className="text-[#FFB800] font-black text-2xl">{results[2]?.wpm}</div>
            <div className="text-white/40 text-xs">WPM</div>
          </div>
        </div>
      )}

      {/* Full Results Table */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden print:shadow-none">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 p-4 bg-[#075EA8] text-white text-xs font-bold uppercase tracking-wider">
          <div className="col-span-1 text-center">Rank</div>
          <div className="col-span-3">Player</div>
          <div className="col-span-2">Course</div>
          <div className="col-span-1 text-center">WPM</div>
          <div className="col-span-1 text-center">CPM</div>
          <div className="col-span-1 text-center">Acc%</div>
          <div className="col-span-1 text-center">Errors</div>
          <div className="col-span-1 text-center">Done%</div>
          <div className="col-span-1 text-center">Time</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-100">
          {loading ? (
            <div className="p-12 text-center text-gray-400 animate-pulse">Loading results...</div>
          ) : results.length === 0 ? (
            <div className="p-12 text-center text-gray-400">
              No results found.{competitionId ? " The competition may not have started yet." : ""}
            </div>
          ) : results.map((player, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.04 * i }}
              className={`grid grid-cols-12 gap-2 p-4 items-center transition-colors hover:bg-gray-50 ${player.rank <= 3 ? "bg-yellow-50/50" : ""}`}
            >
              <div className="col-span-1 flex justify-center">{rankBadge(player.rank)}</div>
              <div className="col-span-3">
                <div className="font-bold text-gray-900">{player.name}</div>
                <div className="text-xs text-gray-400">{player.scholarNumber}</div>
              </div>
              <div className="col-span-2 text-gray-600 text-sm">{player.course} <span className="text-gray-400 text-xs">({player.semester})</span></div>
              <div className="col-span-1 text-center font-black text-[#075EA8] text-xl">{player.wpm}</div>
              <div className="col-span-1 text-center font-bold text-gray-500">{player.cpm}</div>
              <div className="col-span-1 text-center font-bold text-[#FFB800]">{player.accuracy}%</div>
              <div className="col-span-1 text-center font-bold text-red-500">{player.errors}</div>
              <div className="col-span-1 text-center font-bold text-green-600">{player.completion}%</div>
              <div className="col-span-1 text-center text-gray-400 text-sm font-mono">{player.finishTime}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Foot links */}
      <div className="flex justify-center gap-6 mt-8 print:hidden">
        <Link href="/hall-of-fame" className="text-[#FFB800] hover:underline text-sm font-bold flex items-center gap-1">
          🏆 Hall of Fame
        </Link>
        <Link href="/register" className="text-white/60 hover:text-white text-sm flex items-center gap-1">
          ← Back to Register
        </Link>
      </div>
    </div>
  );
}
