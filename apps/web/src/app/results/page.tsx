"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy, ChevronLeft, Download, FileSpreadsheet } from "lucide-react";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";

export default function Results() {
  return (
    <Suspense fallback={<div className="text-white text-center py-20 font-bold">Loading Results...</div>}>
      <ResultsContent />
    </Suspense>
  );
}

function ResultsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const competitionId = searchParams.get("competitionId");

  const [results, setResults] = useState<any[]>([]);
  const [competitionName, setCompetitionName] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [competitionStatus, setCompetitionStatus] = useState<string>("");

  const [competitionsList, setCompetitionsList] = useState<any[]>([]);
  const [selectedCompId, setSelectedCompId] = useState<string>(competitionId || "");

  useEffect(() => {
    // Fetch finished competitions for history selector
    fetch(`${API_URL}/api/competitions`)
      .then(r => r.json())
      .then(list => {
        if (Array.isArray(list)) {
          setCompetitionsList(list.filter((c: any) => c.status === "FINISHED"));
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    fetchResults();
    setSelectedCompId(competitionId || "");
    
    let interval: ReturnType<typeof setInterval> | null = null;
    
    if (competitionId) {
      // Initial fetch to get competition name and status
      fetch(`${API_URL}/api/competitions/${competitionId}`)
        .then(r => r.json())
        .then(c => {
          if (c?.name) setCompetitionName(c.name);
          if (c?.status) {
            setCompetitionStatus(c.status);
            // If match is not finished yet, start polling
            if (c.status !== "FINISHED") {
              interval = setInterval(() => {
                fetchResults();
                // Check if the competition status has updated to FINISHED
                fetch(`${API_URL}/api/competitions/${competitionId}`)
                  .then(res => res.json())
                  .then(updatedComp => {
                    if (updatedComp?.status) {
                      setCompetitionStatus(updatedComp.status);
                      if (updatedComp.status === "FINISHED") {
                        if (interval) clearInterval(interval);
                      }
                    }
                  })
                  .catch(() => {});
              }, 3000);
            }
          }
        })
        .catch(() => {});
    } else {
      setCompetitionName("");
      setCompetitionStatus("");
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [competitionId]);

  const handleCompChange = (id: string) => {
    setSelectedCompId(id);
    if (id) {
      router.push(`/results?competitionId=${id}`);
    } else {
      router.push(`/results`);
    }
  };

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
          mandal: r.participant?.playerSession?.mandal || "–",
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
      r.rank, r.name, r.scholarNumber, r.mandal, r.semester,
      r.wpm, r.grossWpm, r.cpm, r.accuracy, r.errors, r.completion, r.finishTime
    ]);
    const csv = [headers, ...rows]
      .map(row => row.map(val => `"${String(val).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `TypeArena_${competitionName || "Results"}_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportToExcel = () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("typearena_admin_token") || "" : "";
    const url = competitionId
      ? `${API_URL}/api/reports/excel?competitionId=${competitionId}&token=${token}`
      : `${API_URL}/api/reports/excel?token=${token}`;
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
          <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase flex items-center gap-3">
            <Trophy className="w-8 h-8 text-amber-500" />
            {competitionName ? `${competitionName} — Results` : "Match Results"}
          </h1>
          <p className="text-slate-500 mt-1 text-sm font-medium">
            {competitionId ? `Competition ID: ${competitionId}` : "All results (latest)"} • {results.length} player{results.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 print:hidden">
          <button onClick={exportToPDF} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 text-xs flex items-center gap-2 shadow-sm">
            <Download className="w-3.5 h-3.5" /> PDF
          </button>
          <button onClick={exportToCSV} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 text-xs flex items-center gap-2 shadow-sm">
            <Download className="w-3.5 h-3.5" /> CSV
          </button>
          <button onClick={exportToExcel} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs flex items-center gap-2 font-bold shadow-md shadow-emerald-500/20">
            <FileSpreadsheet className="w-3.5 h-3.5" /> Excel
          </button>
          <Link href="/">
            <button className="px-4 py-2 bg-[#1d61e8] hover:bg-[#1a56db] text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-md shadow-blue-500/20">
              <ChevronLeft className="w-3.5 h-3.5" /> Home
            </button>
          </Link>
        </div>
      </div>

      {competitionsList.length > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-3 bg-white border border-slate-100 shadow-xl shadow-blue-500/5 rounded-2xl p-4 print:hidden">
          <span className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Browse Match Records:</span>
          <select
            className="bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1d61e8] min-w-[220px]"
            value={selectedCompId}
            onChange={e => handleCompChange(e.target.value)}
          >
            <option value="" className="text-slate-900">— Select a Competition —</option>
            {competitionsList.map((c: any) => (
              <option key={c.id} value={c.id} className="text-slate-900">
                {c.name} ({new Date(c.createdAt).toLocaleDateString()})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Top 3 Podium */}
      {results.length >= 3 && (
        <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto w-full items-end pt-6">
          {/* 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center bg-white rounded-3xl p-5 border border-slate-100 text-center relative shadow-xl shadow-blue-500/5"
          >
            <div className="text-3xl mb-1">🥈</div>
            <div className="text-slate-900 font-black text-base truncate w-full">{results[1]?.name}</div>
            <div className="text-slate-400 text-xs font-mono mb-2">{results[1]?.mandal}</div>
            <div className="w-full bg-slate-50 rounded-2xl py-2 border border-slate-100">
              <div className="text-[#1d61e8] font-black text-3xl">{results[1]?.wpm}</div>
              <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest">NET WPM</div>
            </div>
            <div className="mt-3 text-xs text-slate-500 font-mono">Acc: {results[1]?.accuracy}%</div>
          </motion.div>

          {/* 1st Place - Winner */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col items-center bg-gradient-to-b from-blue-50 via-white to-blue-50/50 border-2 border-[#1d61e8] rounded-3xl p-6 text-center relative shadow-2xl shadow-blue-500/20 -translate-y-4"
          >
            <div className="absolute -top-7 text-4xl animate-bounce">👑</div>
            <div className="text-4xl mb-1 mt-2">🏆</div>
            <div className="text-slate-900 font-black text-lg truncate w-full">{results[0]?.name}</div>
            <div className="text-[#1d61e8] text-xs font-bold uppercase tracking-wider mb-3">{results[0]?.mandal}</div>
            <div className="w-full bg-[#1d61e8] text-white rounded-2xl py-3 shadow-lg shadow-blue-500/30">
              <div className="font-black text-4xl leading-none">{results[0]?.wpm}</div>
              <div className="text-white/80 text-[10px] uppercase font-black tracking-widest mt-1">WINNER WPM</div>
            </div>
            <div className="mt-3 flex justify-between w-full text-xs text-slate-600 font-mono px-1 font-semibold">
              <span>{results[0]?.accuracy}% Acc</span>
              <span>{results[0]?.finishTime}</span>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center bg-white rounded-3xl p-5 border border-slate-100 text-center relative shadow-xl shadow-blue-500/5"
          >
            <div className="text-3xl mb-1">🥉</div>
            <div className="text-slate-900 font-black text-base truncate w-full">{results[2]?.name}</div>
            <div className="text-slate-400 text-xs font-mono mb-2">{results[2]?.mandal}</div>
            <div className="w-full bg-slate-50 rounded-2xl py-2 border border-slate-100">
              <div className="text-[#1d61e8] font-black text-3xl">{results[2]?.wpm}</div>
              <div className="text-slate-400 text-[10px] uppercase font-black tracking-widest">NET WPM</div>
            </div>
            <div className="mt-3 text-xs text-slate-500 font-mono">Acc: {results[2]?.accuracy}%</div>
          </motion.div>
        </div>
      )}

      {/* Full Results Table */}
      <div className="bg-white rounded-3xl shadow-xl shadow-blue-500/5 overflow-hidden print:shadow-none border border-slate-100">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 p-4 bg-[#1d61e8] text-white text-xs font-black uppercase tracking-wider">
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
            <div className="p-12 text-center text-gray-400 animate-pulse font-medium">Loading match results...</div>
          ) : results.length === 0 ? (
            <div className="p-12 text-center text-gray-400">
              No results found.{competitionId ? " The competition may not have started yet." : ""}
            </div>
          ) : results.map((player, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, ease: "easeOut" }}
              className={`grid grid-cols-12 gap-2 p-4 items-center transition-all hover:bg-amber-50/50 ${player.rank === 1 ? "bg-amber-50/80 font-semibold" : player.rank <= 3 ? "bg-amber-50/30" : ""}`}
            >
              <div className="col-span-1 flex justify-center">{rankBadge(player.rank)}</div>
              <div className="col-span-3">
                <div className="font-extrabold text-gray-900 flex items-center gap-1.5">
                  {player.name}
                  {player.rank === 1 && <span className="text-xs">👑</span>}
                </div>
                <div className="text-xs text-gray-400 font-mono">{player.scholarNumber}</div>
              </div>
              <div className="col-span-2 text-gray-600 text-sm font-medium">{player.mandal} <span className="text-gray-400 text-xs font-mono">({player.semester})</span></div>
              <div className="col-span-1 text-center font-black text-[#075EA8] text-xl tabular-nums">{player.wpm}</div>
              <div className="col-span-1 text-center font-bold text-gray-500 tabular-nums">{player.cpm}</div>
              <div className="col-span-1 text-center font-bold text-[#FFB800] tabular-nums">{player.accuracy}%</div>
              <div className="col-span-1 text-center font-bold text-red-500 tabular-nums">{player.errors}</div>
              <div className="col-span-1 text-center font-bold text-green-600 tabular-nums">{player.completion}%</div>
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
