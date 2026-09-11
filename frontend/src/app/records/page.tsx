"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Zap,
  Target,
  Clock,
  Keyboard,
  Award,
  Calendar,
  LogOut,
  RefreshCw,
  ExternalLink,
  Lock,
  ChevronRight,
  TrendingUp,
  BarChart2,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import { API_URL } from "@/lib/api";

function StarRating({ wpm }: { wpm: number }) {
  const getStars = () => {
    if (wpm >= 50) return 5;
    if (wpm >= 35) return 4;
    if (wpm >= 20) return 3;
    if (wpm >= 10) return 2;
    return 1;
  };
  const count = getStars();
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={`text-sm ${s <= count ? "text-amber-400" : "text-slate-200"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function getRankBadge(rank: number | null | undefined) {
  if (!rank) return <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-black">UNRANKED</span>;
  if (rank === 1) {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-black shadow-xs">
        🥇 1st Place
      </span>
    );
  }
  if (rank === 2) {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-black shadow-xs">
        🥈 2nd Place
      </span>
    );
  }
  if (rank === 3) {
    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 border border-orange-300 text-orange-800 text-xs font-black shadow-xs">
        🥉 3rd Place
      </span>
    );
  }
  return (
    <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#1d61e8] text-xs font-black">
      Rank #{rank}
    </span>
  );
}

export default function StudentRecordsPage() {
  const router = useRouter();

  const [student, setStudent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<{
    profile?: any;
    stats?: any;
    competitions?: any[];
    practice?: any[];
  }>({});
  const [activeTab, setActiveTab] = useState<"competitions" | "practice" | "analytics">("competitions");
  const [showPinModal, setShowPinModal] = useState(false);
  const [newPin, setNewPin] = useState("");
  const [pinMessage, setPinMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [pinLoading, setPinLoading] = useState(false);

  const fetchRecords = useCallback(async (scholarNo: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/players/${scholarNo}/records`);
      if (res.ok) {
        const json = await res.json();
        setData(json);
        if (json.profile) {
          setStudent(json.profile);
          localStorage.setItem("typearena_student", JSON.stringify(json.profile));
        }
      } else {
        // Scholar number not found or invalid session
        router.push("/login");
      }
    } catch (e) {
      console.error("Failed to load records:", e);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    try {
      const savedStudent = localStorage.getItem("typearena_student");
      if (!savedStudent) {
        router.push("/login");
        return;
      }
      const parsed = JSON.parse(savedStudent);
      if (!parsed?.scholarNumber) {
        router.push("/login");
        return;
      }
      setStudent(parsed);
      fetchRecords(parsed.scholarNumber);
    } catch {
      router.push("/login");
    }
  }, [router, fetchRecords]);

  const handleLogout = () => {
    localStorage.removeItem("typearena_student");
    localStorage.removeItem("typearena_session");
    window.dispatchEvent(new Event("storage"));
    router.push("/login");
  };

  const handleSetPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPin.trim()) return;
    setPinLoading(true);
    setPinMessage(null);
    try {
      const res = await fetch(`${API_URL}/api/auth/player-pin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scholarNumber: student.scholarNumber, pin: newPin.trim() }),
      });
      const resData = await res.json();
      if (res.ok) {
        setPinMessage({ type: "success", text: "Security PIN updated successfully!" });
        setTimeout(() => {
          setShowPinModal(false);
          setPinMessage(null);
          setNewPin("");
          fetchRecords(student.scholarNumber);
        }, 1200);
      } else {
        setPinMessage({ type: "error", text: resData.error || "Failed to update PIN." });
      }
    } catch {
      setPinMessage({ type: "error", text: "Server error occurred." });
    } finally {
      setPinLoading(false);
    }
  };

  if (loading && !data.profile) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#1d61e8] border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-600 font-bold text-sm">Loading your typing records...</p>
      </div>
    );
  }

  const { stats = {}, competitions = [], practice = [] } = data;

  // Performance calculations
  const englishPractices = practice.filter((p) => p.language === "EN");
  const hindiPractices = practice.filter((p) => p.language === "HI");

  const enBestWpm = Math.max(0, ...englishPractices.map((p) => p.netWpm));
  const hiBestWpm = Math.max(0, ...hindiPractices.map((p) => p.netWpm));

  const enAvgAcc = englishPractices.length > 0
    ? Math.round(englishPractices.reduce((a, b) => a + b.accuracy, 0) / englishPractices.length)
    : 0;
  const hiAvgAcc = hindiPractices.length > 0
    ? Math.round(hindiPractices.reduce((a, b) => a + b.accuracy, 0) / hindiPractices.length)
    : 0;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10 animate-fade-in">
      {/* Top Banner Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-blue-500/5 border border-slate-100 relative overflow-hidden mb-8">
        <div className="h-2 w-full bg-gradient-to-r from-[#1d61e8] via-blue-500 to-indigo-600 absolute top-0 left-0" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Student Info */}
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-3xl bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-4xl shadow-inner shrink-0">
              {student?.avatarId || "🦊"}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900">
                  {student?.name || "Student"}
                </h1>
                <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1d61e8] text-xs font-mono font-bold">
                  #{student?.scholarNumber}
                </span>
                {student?.hasPin && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" /> PIN Protected
                  </span>
                )}
              </div>
              <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">
                {student?.mandal || "Course"} • {student?.semester || "Semester"}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/practice">
              <button className="px-5 py-2.5 rounded-2xl bg-[#1d61e8] hover:bg-[#1a56db] text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-blue-500/20 transition-transform active:scale-95 cursor-pointer">
                <Keyboard className="w-4 h-4" />
                <span>Practice Now</span>
              </button>
            </Link>
            <Link href="/register">
              <button className="px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2 transition-transform active:scale-95 cursor-pointer">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Join Battle</span>
              </button>
            </Link>
            <button
              onClick={() => setShowPinModal(true)}
              className="px-4 py-2.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Manage Profile Security PIN"
            >
              <Lock className="w-4 h-4 text-slate-500" />
              <span>{student?.hasPin ? "Change PIN" : "Set PIN"}</span>
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-2xl bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Log Out"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Stats Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
        {/* Best WPM */}
        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-xl shadow-blue-500/5 border border-slate-100 flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Zap className="w-7 h-7 fill-amber-500" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 leading-none">
              {stats.bestNetWpm || 0}
            </div>
            <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mt-1.5">
              Peak Net WPM
            </div>
          </div>
        </div>

        {/* Avg Accuracy */}
        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-xl shadow-blue-500/5 border border-slate-100 flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Target className="w-7 h-7" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 leading-none">
              {stats.avgAccuracy || 0}%
            </div>
            <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mt-1.5">
              Average Accuracy
            </div>
          </div>
        </div>

        {/* Competitions */}
        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-xl shadow-blue-500/5 border border-slate-100 flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-blue-50 text-[#1d61e8] flex items-center justify-center shrink-0">
            <Trophy className="w-7 h-7" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 leading-none">
              {stats.totalCompetitions || 0}
            </div>
            <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mt-1.5">
              Competitions ({stats.podiumFinishes || 0} Podium)
            </div>
          </div>
        </div>

        {/* Practice Sessions */}
        <div className="bg-white rounded-3xl p-5 md:p-6 shadow-xl shadow-blue-500/5 border border-slate-100 flex items-center gap-4">
          <div className="w-13 h-13 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <Keyboard className="w-7 h-7" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900 leading-none">
              {stats.totalPractices || 0}
            </div>
            <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mt-1.5">
              Practice Drills
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200/80 mb-6 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab("competitions")}
          className={`px-5 py-3 font-bold text-sm rounded-t-2xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "competitions"
              ? "bg-white text-[#1d61e8] border-b-2 border-[#1d61e8] shadow-xs"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Competition Battles</span>
          <span className="px-2 py-0.5 text-xs rounded-full bg-blue-50 text-[#1d61e8]">
            {competitions.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("practice")}
          className={`px-5 py-3 font-bold text-sm rounded-t-2xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "practice"
              ? "bg-white text-[#1d61e8] border-b-2 border-[#1d61e8] shadow-xs"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          <Keyboard className="w-4 h-4" />
          <span>Practice Drills</span>
          <span className="px-2 py-0.5 text-xs rounded-full bg-purple-50 text-purple-600">
            {practice.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("analytics")}
          className={`px-5 py-3 font-bold text-sm rounded-t-2xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "analytics"
              ? "bg-white text-[#1d61e8] border-b-2 border-[#1d61e8] shadow-xs"
              : "text-slate-500 hover:text-slate-900"
          }`}
        >
          <BarChart2 className="w-4 h-4" />
          <span>Analytics &amp; Insights</span>
        </button>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "competitions" && (
          <motion.div
            key="competitions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {competitions.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm max-w-lg mx-auto">
                <Trophy className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800">No Competition Records Yet</h3>
                <p className="text-slate-400 text-xs mt-1 mb-6">
                  You haven&apos;t joined a live multiplayer competition with this Scholar Number yet.
                </p>
                <Link href="/register">
                  <button className="px-6 py-2.5 bg-[#1d61e8] hover:bg-[#1a56db] text-white font-bold text-xs rounded-full shadow-md transition-transform active:scale-95">
                    Join Live Competition
                  </button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {competitions.map((comp: any) => (
                  <div
                    key={comp.id}
                    className="bg-white rounded-2xl p-5 md:p-6 shadow-md shadow-blue-500/5 border border-slate-100 hover:border-blue-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    {/* Left: Info */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        {getRankBadge(comp.rank)}
                        <h3 className="font-extrabold text-base text-slate-900">
                          {comp.competitionName}
                        </h3>
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[11px] font-bold">
                          {comp.roomCode}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-[#1d61e8] text-[11px] font-bold">
                          {comp.language === "HI" ? "हिंदी (Hindi)" : "English"}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase">
                          {comp.gameMode || "RACE"}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {comp.playedAt
                            ? new Date(comp.playedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "–"}
                        </span>
                      </p>
                    </div>

                    {/* Right: Performance Metrics & Button */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                      <div className="text-center min-w-[65px]">
                        <div className="text-2xl font-black text-[#1d61e8] leading-none">
                          {comp.netWpm}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                          Net WPM
                        </div>
                      </div>

                      <div className="text-center min-w-[65px]">
                        <div className="text-2xl font-black text-slate-900 leading-none">
                          {comp.accuracy}%
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                          Accuracy
                        </div>
                      </div>

                      <div className="text-center min-w-[55px]">
                        <div className="text-2xl font-black text-red-500 leading-none">
                          {comp.errors}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                          Errors
                        </div>
                      </div>

                      <div className="text-center min-w-[65px]">
                        <div className="text-2xl font-black text-slate-700 leading-none">
                          {comp.completionPercentage}%
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                          Completed
                        </div>
                      </div>

                      {comp.competitionId && (
                        <Link href={`/results?competitionId=${comp.competitionId}`}>
                          <button className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 text-slate-700 hover:text-[#1d61e8] text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer">
                            <span>Leaderboard</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {activeTab === "practice" && (
          <motion.div
            key="practice"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {practice.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm max-w-lg mx-auto">
                <Keyboard className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800">No Practice Drills Logged</h3>
                <p className="text-slate-400 text-xs mt-1 mb-6">
                  Complete practice typing paragraphs while logged in to automatically save your speed records here.
                </p>
                <Link href="/practice">
                  <button className="px-6 py-2.5 bg-[#1d61e8] hover:bg-[#1a56db] text-white font-bold text-xs rounded-full shadow-md transition-transform active:scale-95">
                    Start Practice Drill
                  </button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {practice.map((drill: any) => (
                  <div
                    key={drill.id}
                    className="bg-white rounded-2xl p-5 md:p-6 shadow-md shadow-blue-500/5 border border-slate-100 hover:border-purple-200 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    {/* Left: Info */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-extrabold text-base text-slate-900">
                          {drill.paragraphTitle || "Custom Practice Drill"}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[11px] font-bold">
                          {drill.language === "HI" ? "हिंदी (Hindi)" : "English"}
                        </span>
                        {drill.difficulty && (
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-bold uppercase">
                            {drill.difficulty}
                          </span>
                        )}
                        <StarRating wpm={drill.netWpm} />
                      </div>
                      <p className="text-slate-400 text-xs flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>
                          {drill.createdAt
                            ? new Date(drill.createdAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "–"}
                        </span>
                        {drill.timeSpent && (
                          <>
                            <span>•</span>
                            <Clock className="w-3.5 h-3.5" />
                            <span>{drill.timeSpent}s duration</span>
                          </>
                        )}
                      </p>
                    </div>

                    {/* Right: Metrics */}
                    <div className="flex flex-wrap items-center gap-6 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                      <div className="text-center min-w-[65px]">
                        <div className="text-2xl font-black text-purple-600 leading-none">
                          {drill.netWpm}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                          Net WPM
                        </div>
                      </div>

                      <div className="text-center min-w-[65px]">
                        <div className="text-2xl font-black text-slate-900 leading-none">
                          {drill.accuracy}%
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                          Accuracy
                        </div>
                      </div>

                      <div className="text-center min-w-[55px]">
                        <div className="text-2xl font-black text-red-500 leading-none">
                          {drill.errors}
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                          Errors
                        </div>
                      </div>

                      {drill.cpm && (
                        <div className="text-center min-w-[60px]">
                          <div className="text-2xl font-black text-slate-600 leading-none">
                            {drill.cpm}
                          </div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                            CPM
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {activeTab === "analytics" && (
          <motion.div
            key="analytics"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Language comparison cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* English */}
              <div className="bg-white rounded-3xl p-6 shadow-xl shadow-blue-500/5 border border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🇬🇧</span>
                    <div>
                      <h3 className="font-black text-slate-900 text-lg">English Performance</h3>
                      <p className="text-xs text-slate-400 font-medium">Standard QWERTY layout</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-[#1d61e8] font-bold text-xs rounded-full">
                    {englishPractices.length} Sessions
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider block">
                      Best Speed
                    </span>
                    <span className="text-3xl font-black text-[#1d61e8] mt-1 block">
                      {enBestWpm} <span className="text-xs text-slate-400 font-bold">WPM</span>
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider block">
                      Avg Accuracy
                    </span>
                    <span className="text-3xl font-black text-emerald-600 mt-1 block">
                      {enAvgAcc}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Hindi */}
              <div className="bg-white rounded-3xl p-6 shadow-xl shadow-blue-500/5 border border-slate-100 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🇮🇳</span>
                    <div>
                      <h3 className="font-black text-slate-900 text-lg">Hindi Performance</h3>
                      <p className="text-xs text-slate-400 font-medium">InScript Devanagari layout</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold text-xs rounded-full">
                    {hindiPractices.length} Sessions
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider block">
                      Best Speed
                    </span>
                    <span className="text-3xl font-black text-amber-600 mt-1 block">
                      {hiBestWpm} <span className="text-xs text-slate-400 font-bold">WPM</span>
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider block">
                      Avg Accuracy
                    </span>
                    <span className="text-3xl font-black text-emerald-600 mt-1 block">
                      {hiAvgAcc}%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* University Typing Standards Guide */}
            <div className="bg-blue-50/70 rounded-3xl p-6 border border-blue-100 text-slate-700 space-y-3">
              <h4 className="font-black text-sm text-[#1d61e8] uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4" />
                DSVV Computer Science Typing Speed Milestones
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div className="bg-white p-4 rounded-2xl border border-blue-100">
                  <span className="text-xs font-extrabold text-slate-400 block uppercase">Novice</span>
                  <span className="text-lg font-black text-slate-800">20 – 35 WPM</span>
                  <p className="text-[11px] text-slate-500 mt-1">Good foundation for Hindi/English academic typing.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-blue-100">
                  <span className="text-xs font-extrabold text-[#1d61e8] block uppercase">Proficient</span>
                  <span className="text-lg font-black text-[#1d61e8]">35 – 50 WPM</span>
                  <p className="text-[11px] text-slate-500 mt-1">Competitive tournament level with high accuracy.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-blue-100">
                  <span className="text-xs font-extrabold text-amber-500 block uppercase">Master</span>
                  <span className="text-lg font-black text-amber-600">50+ WPM</span>
                  <p className="text-[11px] text-slate-500 mt-1">Hall of Fame contender and top speed champion.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Security PIN Modal */}
      <AnimatePresence>
        {showPinModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-7 max-w-sm w-full shadow-2xl border border-slate-100 relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1d61e8] flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-900">
                    {student?.hasPin ? "Change Security PIN" : "Protect with PIN"}
                  </h3>
                  <p className="text-slate-400 text-xs font-medium">
                    Prevent others from viewing your records.
                  </p>
                </div>
              </div>

              {pinMessage && (
                <div
                  className={`p-3 rounded-xl mb-4 text-xs font-bold flex items-center gap-2 ${
                    pinMessage.type === "success"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {pinMessage.type === "success" ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{pinMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSetPin} className="space-y-4">
                <div>
                  <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block mb-1">
                    Enter 4 to 6 Digit PIN
                  </label>
                  <input
                    type="password"
                    maxLength={6}
                    placeholder="e.g. 1234"
                    required
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-center text-xl font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-[#1d61e8] focus:bg-white transition-all"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPinModal(false);
                      setPinMessage(null);
                      setNewPin("");
                    }}
                    className="flex-1 h-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold text-xs cursor-pointer transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={pinLoading}
                    className="flex-1 h-11 rounded-full bg-[#1d61e8] hover:bg-[#1a56db] text-white font-bold text-xs shadow-md shadow-blue-500/20 cursor-pointer transition-transform active:scale-95"
                  >
                    {pinLoading ? "Saving..." : "Save PIN"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
