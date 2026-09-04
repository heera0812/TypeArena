"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // Reset loading indicator when pathname or search parameters change
    setIsNavigating(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement | null;
      if (target && target.href) {
        const targetUrl = new URL(target.href, window.location.href);
        const currentUrl = new URL(window.location.href);

        // Only trigger loading for internal route transitions
        if (
          targetUrl.origin === currentUrl.origin &&
          targetUrl.href !== currentUrl.href
        ) {
          setIsNavigating(true);
        }
      }
    };

    const anchors = Array.from(document.querySelectorAll("a[href]"));
    anchors.forEach((a) => a.addEventListener("click", handleAnchorClick as EventListener));

    return () => {
      anchors.forEach((a) => a.removeEventListener("click", handleAnchorClick as EventListener));
    };
  }, [pathname]);

  if (!isNavigating) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[10000] pointer-events-none">
      {/* Top Progress Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-[#1d61e8] to-amber-400 animate-pulse shadow-[0_0_10px_#1d61e8]" />
      
      {/* Subtle top right spinner indicator */}
      <div className="fixed top-4 right-4 z-[10001] bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 text-slate-700 text-xs font-bold animate-fade-in">
        <div className="w-3.5 h-3.5 border-2 border-[#1d61e8] border-t-transparent rounded-full animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  );
}
