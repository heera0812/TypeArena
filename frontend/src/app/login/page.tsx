"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, Lock, ArrowRight, Sparkles, ShieldCheck, Keyboard, AlertCircle } from "lucide-react";
import { getApiUrl } from "@/lib/api";

function FloatingKey({ char, className }: { char: string; className: string }) {
  return (
    <div className={`absolute pointer-events-none select-none ${className}`}>
      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-md flex items-center justify-center text-slate-400 font-mono text-sm font-bold">
        {char}
      </div>
    </div>
  );
}

export default function StudentLoginPage() {
  const router = useRouter();

  const [scholarNumber, setScholarNumber] = useState("");
  const [pin, setPin] = useState("");
  const [requiresPin, setRequiresPin] = useState(false);
  const [studentPreview, setStudentPreview] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Check if already logged in
  useEffect(() => {
    try {
      const savedStudent = localStorage.getItem("typearena_student");
      if (savedStudent) {
        const parsed = JSON.parse(savedStudent);
        if (parsed?.scholarNumber) {
          router.replace("/records");
        }
      }
    } catch {
      // ignore
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scholarNumber.trim()) {
      setError("Please enter your Scholar Number");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const payload: { scholarNumber: string; pin?: string } = {
        scholarNumber: scholarNumber.trim(),
      };
      if (pin) payload.pin = pin.trim();

      const res = await fetch(`${getApiUrl()}/api/auth/player-login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed. Please check your credentials.");
        setLoading(false);
        return;
      }

      // If backend requires a PIN
      if (data.requiresPin) {
        setRequiresPin(true);
        setStudentPreview(data.player);
        setLoading(false);
        return;
      }

      // Success
      if (data.player && data.sessionToken) {
        localStorage.setItem("typearena_student", JSON.stringify(data.player));
        localStorage.setItem("typearena_session", data.sessionToken);
        localStorage.setItem("typearena_player", JSON.stringify(data.player));

        // Dispatch storage event so Navbar updates immediately
        window.dispatchEvent(new Event("storage"));

        router.push("/records");
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Unable to connect to server. Please ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleQuickSelect = (sNum: string) => {
    setScholarNumber(sNum);
    setError("");
    setRequiresPin(false);
    setPin("");
  };

  return (
    <div className="relative flex flex-col min-h-[85vh] w-full items-center justify-center px-4 py-12 overflow-hidden bg-gradient-to-b from-[#f4f8fc] via-[#e9f2fc] to-[#f4f8fc]">
      {/* Decorative floating keys */}
      <FloatingKey char="A" className="top-[15%] left-[8%] animate-float delay-100 opacity-80" />
      <FloatingKey char="J" className="top-[25%] left-[22%] animate-float-reverse delay-300 opacity-70" />
      <FloatingKey char="K" className="bottom-[20%] left-[12%] animate-float-slow delay-500 opacity-75" />
      <FloatingKey char="S" className="top-[20%] right-[16%] animate-float delay-200 opacity-80" />
      <FloatingKey char="D" className="bottom-[25%] right-[10%] animate-float-reverse delay-400 opacity-75" />

      {/* Radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-[130px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10 animate-slide-up">
        {/* Header Branding */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 shadow-xs mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#1d61e8]" />
            <span className="text-[#1d61e8] font-bold text-xs uppercase tracking-wider">
              Student Records Portal
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Welcome to <span className="text-[#1d61e8]">TypeArena</span>
          </h1>
          <p className="text-slate-500 text-xs md:text-sm font-medium max-w-sm mx-auto leading-relaxed">
            Enter your Scholar Number to view your practice sessions, live competition results, and typing speed progress.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-7 md:p-8 shadow-xl shadow-blue-500/5 border border-slate-100 relative overflow-hidden">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#1d61e8] to-blue-400 absolute top-0 left-0" />

          {/* Quick Demo Selector Chips */}
          <div className="mb-5 pb-4 border-b border-slate-100">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-2">
              Quick Test Profiles
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleQuickSelect("2424068")}
                className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-[#1d61e8] text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>🐸</span>
                <span>Heera Chugh (2424068)</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickSelect("2424100")}
                className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-[#1d61e8] text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>🦁</span>
                <span>Gyan (2424100)</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-red-600 font-medium"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span>{error}</span>
                    {error.includes("register") && (
                      <Link
                        href="/register"
                        className="block mt-1 text-[#1d61e8] font-bold hover:underline"
                      >
                        Click here to register your profile →
                      </Link>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scholar Number Input */}
            <div className="space-y-1.5">
              <label
                htmlFor="scholarNumber"
                className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block"
              >
                Scholar Number
              </label>
              <div className="relative">
                <input
                  id="scholarNumber"
                  type="text"
                  placeholder="e.g. 2424068"
                  required
                  value={scholarNumber}
                  onChange={(e) => {
                    setScholarNumber(e.target.value);
                    setError("");
                    if (requiresPin) setRequiresPin(false);
                  }}
                  className="w-full h-12 px-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e8] focus:bg-white text-base font-mono transition-all"
                />
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                Your university roll/scholar number used during competition registration.
              </p>
            </div>

            {/* Optional PIN input (if profile is protected) */}
            {requiresPin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-1.5 pt-1"
              >
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="pin"
                    className="text-xs font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                    <span>Security PIN</span>
                  </label>
                  {studentPreview && (
                    <span className="text-xs font-semibold text-slate-500">
                      Welcome, {studentPreview.name}!
                    </span>
                  )}
                </div>
                <input
                  id="pin"
                  type="password"
                  maxLength={6}
                  placeholder="Enter 4-digit PIN"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setError("");
                  }}
                  className="w-full h-12 px-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e8] focus:bg-white text-base font-mono tracking-widest transition-all"
                />
              </motion.div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-[#1d61e8] hover:bg-[#1a56db] disabled:opacity-70 text-white font-extrabold rounded-full shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 text-sm uppercase tracking-wide cursor-pointer"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>View My Records</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Links & Helpers */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-3 text-center text-xs">
            <div className="text-slate-500">
              Haven&apos;t joined a match yet?{" "}
              <Link
                href="/register"
                className="text-[#1d61e8] font-bold hover:underline inline-flex items-center gap-1"
              >
                Register Student Profile
              </Link>
            </div>
            <div className="flex items-center justify-center gap-4 text-slate-400 font-medium pt-1">
              <Link href="/practice" className="hover:text-slate-600 transition-colors">
                Free Practice Mode
              </Link>
              <span>•</span>
              <Link href="/admin" className="hover:text-slate-600 transition-colors">
                Admin Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
