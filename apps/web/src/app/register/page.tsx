"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { API_URL } from "@/lib/api";
import { Mandal } from "@typearena/shared";

export default function Register() {
  return (
    <Suspense fallback={<div className="text-white text-center py-20 font-bold">Loading Registration...</div>}>
      <RegisterContent />
    </Suspense>
  );
}

function RegisterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const competitionId = searchParams.get("competitionId");
  
  const [isWaitingForRoom, setIsWaitingForRoom] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    scholarNumber: "",
    mandal: "BSC IT",
    semester: "",
    avatarId: "🦊" // Default avatar
  });

  const courses = ["BSC IT", "BCA", "MCA"];

  const avatars = ["🦊", "🐼", "🦁", "🐯", "🐸", "🦉", "🦄", "🐉"];

  // Function to check for active room
  const checkForRoomAndJoin = async () => {
    try {
      const compsRes = await fetch(`${API_URL}/api/competitions`);
      const comps = await compsRes.json();
      const activeComp = comps.find((c: any) => c.status === "LOBBY_OPEN");
      
      if (activeComp) {
        router.push(`/lobby?competitionId=${activeComp.id}`);
        return true;
      }
      return false;
    } catch (e) {
      console.error("Failed to fetch rooms");
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Create Player (backend expects "name" not "fullName")
      const payload = {
        name: formData.fullName,
        scholarNumber: formData.scholarNumber,
        mandal: formData.mandal,
        semester: formData.semester,
        avatarId: formData.avatarId
      };
      const res = await fetch(`${API_URL}/api/players`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const errData = await res.json();
        console.error("Failed to register:", errData);
        alert("Registration failed: " + (errData.error || "Unknown error"));
        return;
      }
      const data = await res.json();
      // Store secure session token
      localStorage.setItem("typearena_session", data.sessionToken);
      localStorage.setItem("typearena_player", JSON.stringify(data.playerSession));
      
      if (competitionId) {
        router.push(`/lobby?competitionId=${competitionId}`);
        return;
      }

      const foundRoom = await checkForRoomAndJoin();
      
      if (!foundRoom) {
        setIsWaitingForRoom(true);
        // Start polling for a room every 2 seconds
        const interval = setInterval(async () => {
          const found = await checkForRoomAndJoin();
          if (found) clearInterval(interval);
        }, 2000);
      }
      
    } catch (e) {
      console.error("Failed to register");
    }
  };

  if (isWaitingForRoom) {
    return (
      <div className="w-full max-w-5xl mx-auto min-h-[80vh] flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 max-w-md w-full text-center flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-[#1d61e8] border-t-transparent rounded-full animate-spin mb-6" />
          <h2 className="text-2xl font-black text-slate-900">Registration Successful!</h2>
          <p className="text-slate-500 mt-3 text-sm leading-relaxed">
            Please wait... The Admin has not opened a match lobby yet. You will automatically join as soon as a competition room opens!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-4xl">
        
        {/* Left Side: Title & Description */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 space-y-4"
        >
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1d61e8] tracking-[0.2em] uppercase">STUDENT PROFILE</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Enter The <br />
              <span className="text-[#1d61e8]">Arena</span>
            </h1>
          </div>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Register your student profile with your scholar number to join live typing battles.
          </p>
        </motion.div>

        {/* Right Side: Clean White Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-7"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-500/5 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="space-y-1">
                <label htmlFor="fullName" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  FULL NAME
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e8] focus:bg-white text-sm transition-all"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="scholarNumber" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                  SCHOLAR NUMBER
                </label>
                <input
                  id="scholarNumber"
                  type="text"
                  placeholder="e.g. 210101001"
                  required
                  className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e8] focus:bg-white text-sm transition-all font-mono"
                  value={formData.scholarNumber}
                  onChange={(e) => setFormData({ ...formData, scholarNumber: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="mandal" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    COURSE
                  </label>
                  <select
                    id="mandal"
                    required
                    className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e8] focus:bg-white text-sm transition-all"
                    value={formData.mandal}
                    onChange={(e) => setFormData({ ...formData, mandal: e.target.value })}
                  >
                    {courses.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="semester" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    SEMESTER
                  </label>
                  <select
                    id="semester"
                    required
                    className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1d61e8] focus:bg-white text-sm transition-all"
                    value={formData.semester}
                    onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                  >
                    <option value="">— Pick a Semester —</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(s => (
                      <option key={s} value={`Semester ${s}`}>Semester {s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Avatar Selection */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">SELECT YOUR AVATAR</label>
                <div className="flex flex-wrap justify-center gap-2.5 pt-1">
                  {avatars.map(avatar => (
                    <button
                      key={avatar}
                      type="button"
                      onClick={() => setFormData({ ...formData, avatarId: avatar })}
                      className={`text-2xl w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
                        formData.avatarId === avatar 
                          ? "bg-blue-50 ring-2 ring-[#1d61e8] scale-110 shadow-sm" 
                          : "bg-slate-50 border border-slate-200 hover:bg-slate-100 opacity-70 hover:opacity-100"
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3">
                <button 
                  type="submit"
                  className="w-full h-12 bg-[#1d61e8] hover:bg-[#1a56db] text-white font-extrabold rounded-full shadow-lg shadow-blue-500/25 transition-transform active:scale-95 text-base uppercase tracking-wide"
                >
                  Join Battle Arena
                </button>
              </div>
              
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
