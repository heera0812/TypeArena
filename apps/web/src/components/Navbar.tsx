"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Home, UserCheck, Keyboard, BarChart2, Trophy, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    // Check if admin is authenticated
    const checkAdmin = () => {
      const token = localStorage.getItem("typearena_admin_token");
      setIsAdminLoggedIn(!!token);
    };

    checkAdmin();
    window.addEventListener("storage", checkAdmin);
    return () => window.removeEventListener("storage", checkAdmin);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Register", href: "/register", icon: UserCheck },
    { label: "Practice", href: "/practice", icon: Keyboard },
    { label: "Results", href: "/results", icon: BarChart2 },
    { label: "Hall of Fame", href: "/hall-of-fame", icon: Trophy, isGold: true },
  ];

  return (
    <header className="w-full bg-white border-b border-slate-200/80 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Left: DSVV Logo & Institution Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <img src="/dsvv-logo.png" alt="DSVV Emblem" className="object-contain w-full h-full drop-shadow-sm" />
          </div>
          <div className="flex flex-col text-slate-800 justify-center">
            <span className="text-sm md:text-base font-extrabold tracking-wider uppercase leading-none text-[#0f172a]" style={{ fontFamily: 'Times New Roman, serif' }}>
              DEV SANSKRITI
            </span>
            <span className="text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-slate-500 font-semibold leading-tight mt-0.5" style={{ fontFamily: 'Times New Roman, serif' }}>
              VISHWAVIDYALAYA
            </span>
          </div>
        </Link>

        {/* Center-Right Nav & Department Info */}
        <div className="flex items-center gap-6 md:gap-8">
          
          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-bold text-sm">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              const Icon = item.icon;

              if (item.isGold) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 flex items-center gap-2 font-bold transition-all relative ${
                      isActive
                        ? "text-amber-600 border-b-2 border-amber-500"
                        : "text-amber-500 hover:text-amber-600"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-amber-500" />
                    <span>{item.label}</span>
                  </Link>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 flex items-center gap-2 font-bold transition-all relative ${
                    isActive
                      ? "text-[#1d61e8] border-b-2 border-[#1d61e8]"
                      : "text-slate-600 hover:text-[#1d61e8]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Department Info */}
          <div className="hidden xl:flex items-center gap-4 border-l border-slate-200 pl-6">
            <div className="flex flex-col items-end text-right">
              <span className="text-xs font-black text-slate-900 tracking-wide">Department of Computer Science</span>
              <span className="text-[11px] text-slate-500 font-medium">School of Technology, Communication &amp; Management</span>
            </div>
          </div>

          {/* Admin CTA Button (ONLY shown if logged in as Admin) */}
          {isAdminLoggedIn && (
            <Link href="/admin/dashboard">
              <button className="px-5 py-2 rounded-full bg-[#1d61e8] hover:bg-[#1a56db] text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Admin Panel
              </button>
            </Link>
          )}
        </div>
        
      </div>
    </header>
  );
}
