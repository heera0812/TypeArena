"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Lock, User, Eye, EyeOff, ShieldCheck } from "lucide-react";

import { API_URL } from "@/lib/api";

export default function AdminLogin() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        const data = await res.json();
        // Store adminToken in localStorage so Socket.IO can use it for admin auth in lobby
        if (data.adminToken) {
          localStorage.setItem("typearena_admin_token", data.adminToken);
        }
        router.push("/admin/dashboard");
      } else {
        setError("Invalid username or password.");
        setIsSubmitting(false);
      }
    } catch (e) {
      setError("Server error. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto min-h-[85vh] flex items-center justify-center pt-8">
      <div className="w-full max-w-sm relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white shadow-xl shadow-blue-500/5 border border-slate-100 overflow-hidden rounded-3xl">
            <div className="h-1.5 w-full bg-[#1d61e8]" />
            <CardHeader className="space-y-2 pb-4 text-center">
              <CardTitle className="text-2xl font-black text-slate-900">Admin Console</CardTitle>
              <CardDescription className="text-xs font-medium text-slate-400">Sign in to manage competitions and paragraphs</CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2"
                  >
                    <p className="text-xs text-red-600 font-medium">{error}</p>
                  </motion.div>
                )}

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label htmlFor="username" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                      Username
                    </label>
                    <div className="relative">
                      <Input 
                        id="username" 
                        placeholder="Enter admin username" 
                        required 
                        className="h-11 border-slate-200 text-slate-900 focus-visible:ring-[#1d61e8] bg-slate-50 rounded-xl text-sm"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="password" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                      Password
                    </label>
                    <div className="relative">
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••" 
                        required 
                        className="pr-10 h-11 border-slate-200 text-slate-900 focus-visible:ring-[#1d61e8] bg-slate-50 rounded-xl text-sm"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || !formData.username || !formData.password}
                  className="w-full h-11 text-sm font-extrabold bg-[#1d61e8] hover:bg-[#1a56db] text-white rounded-full shadow-lg shadow-blue-500/25 transition-all mt-3 uppercase tracking-wide"
                >
                  {isSubmitting ? "Loading..." : "Authenticate"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
