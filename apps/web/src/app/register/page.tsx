"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { API_URL } from "@/lib/api";

export default function Register() {
  const router = useRouter();
  
  const [isWaitingForRoom, setIsWaitingForRoom] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    scholarNumber: "",
    course: "",
    semester: "",
    avatarId: "🦊" // Default avatar
  });

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
        course: formData.course,
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
      <div className="w-full max-w-5xl mx-auto min-h-[80vh] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#075EA8] border-t-transparent rounded-full animate-spin mb-6" />
        <h2 className="text-3xl font-bold text-[#075EA8] text-center">Registration Successful!</h2>
        <p className="text-gray-500 mt-4 text-center max-w-md">
          Please wait... The Admin has not started the competition room yet. You will be automatically joined as soon as the Host creates a match!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto min-h-[80vh] flex items-center justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center px-6">
        
        {/* Left Side: Title & Description */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide uppercase">
              ENTER THE ARENA
            </h1>
            <div className="h-1.5 w-16 bg-[#FFB800]" />
          </div>
          <p className="text-white/90 text-sm md:text-base max-w-xs">
            Register your player profile to join the typing battle.
          </p>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="text-[10px] font-bold text-white uppercase tracking-wider">
                FULL NAME
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full h-10 px-4 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="scholarNumber" className="text-[10px] font-bold text-white uppercase tracking-wider">
                SCHOLAR NUMBER
              </label>
              <input
                id="scholarNumber"
                type="text"
                placeholder="e.g. 210101001"
                required
                className="w-full h-10 px-4 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                value={formData.scholarNumber}
                onChange={(e) => setFormData({ ...formData, scholarNumber: e.target.value })}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="course" className="text-[10px] font-bold text-white uppercase tracking-wider">
                COURSE
              </label>
              <input
                id="course"
                type="text"
                placeholder="e.g. BCA / B.Tech CSE"
                required
                className="w-full h-10 px-4 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="semester" className="text-[10px] font-bold text-white uppercase tracking-wider">
                SEMESTER
              </label>
              <input
                id="semester"
                type="text"
                placeholder="e.g. Semester 4"
                required
                className="w-full h-10 px-4 rounded-md bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
              />
            </div>

            {/* Avatar Selection */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <label className="text-[10px] font-bold text-white uppercase tracking-wider block">Select Your Avatar</label>
              <div className="flex flex-wrap justify-center gap-3">
                {avatars.map(avatar => (
                  <button
                    key={avatar}
                    type="button"
                    onClick={() => setFormData({ ...formData, avatarId: avatar })}
                    className={`text-2xl w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      formData.avatarId === avatar 
                        ? "bg-white ring-2 ring-[#FFB800] scale-110 shadow-lg" 
                        : "bg-white/10 hover:bg-white/20 opacity-70 hover:opacity-100"
                    }`}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="w-full h-10 bg-[#FFB800] hover:bg-[#F0AD00] text-gray-900 font-bold rounded-full shadow-md transition-transform active:scale-95"
              >
                Enter Arena
              </button>
            </div>
            
          </form>
        </motion.div>

      </div>
    </div>
  );
}
