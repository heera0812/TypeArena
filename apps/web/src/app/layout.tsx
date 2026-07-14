import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "TypeArena",
  description: "LAN Multiplayer Typing Battle Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30">
        
        {/* Navigation Bar */}
        <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            
            {/* Left: DSVV Logo & Text */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 overflow-hidden">
                <img src="/dsvv-logo.png" alt="DSVV Logo" className="object-contain w-full h-full" />
              </div>
              
              <div className="h-8 md:h-10 w-px bg-gray-300 mx-1 md:mx-2"></div>
              
              <div className="flex flex-col text-gray-800 justify-center">
                <span className="text-sm md:text-lg font-medium tracking-wide uppercase leading-tight" style={{ fontFamily: 'Times New Roman, serif' }}>DEV SANSKRITI</span>
                <span className="text-[9px] md:text-xs tracking-[0.2em] uppercase text-gray-500 leading-tight" style={{ fontFamily: 'Times New Roman, serif' }}>VISHWAVIDYALAYA</span>
              </div>
            </div>

            {/* Right: App Links & Dept */}
            <div className="flex items-center gap-4 md:gap-8">
              
              {/* TypeArena Navigation */}
              <div className="hidden lg:flex items-center gap-6">
                <Link href="/" className="text-sm font-bold text-[#075EA8] hover:text-[#044075] transition-colors">Home</Link>
                <Link href="/register" className="text-sm font-bold text-[#075EA8] hover:text-[#044075] transition-colors">Register</Link>
                <Link href="/practice" className="text-sm font-bold text-[#075EA8] hover:text-[#044075] transition-colors">Practice</Link>
                <Link href="/results" className="text-sm font-bold text-[#075EA8] hover:text-[#044075] transition-colors">Results</Link>
                <Link href="/hall-of-fame" className="text-sm font-bold text-[#FFB800] hover:text-[#F0AD00] transition-colors">🏆 Hall of Fame</Link>
              </div>

              {/* Department Info */}
              <div className="hidden md:flex flex-col items-end text-right border-l border-gray-200 pl-6">
                <span className="text-xs md:text-sm font-black text-gray-900 tracking-wide uppercase">Department of Computer Science</span>
                <span className="text-[10px] md:text-xs text-gray-600">School of Technology, Communication & Management</span>
              </div>

              {/* Admin CTA (Mobile & Desktop) */}
              <Link href="/admin">
                <button className="text-xs font-bold px-4 py-1.5 rounded-full bg-[#075EA8] hover:bg-[#044075] text-white transition-colors shadow-sm">
                  Admin
                </button>
              </Link>
            </div>
            
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex flex-col relative z-10 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-[#044075] py-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-xs">
            <div>
              <p>&copy; {new Date().getFullYear()} Department of Computer Science. All rights reserved.</p>
              <p className="mt-1">Dev Sanskriti Vishwavidyalaya, Haridwar</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Support</a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
