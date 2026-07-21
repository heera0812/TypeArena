import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NavigationProgress from "@/components/NavigationProgress";

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
  title: "TypeArena — Dev Sanskriti Vishwavidyalaya",
  description: "Hindi & English LAN Typing Competition Platform",
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
      <body className="min-h-full flex flex-col bg-[#f4f8fc] text-[#0f172a] selection:bg-blue-500/20">
        
        {/* Navigation Progress Indicator */}
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>

        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 flex flex-col relative z-10 w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full bg-[#1e40af] py-4 border-t border-blue-900/50 text-white text-center text-xs font-medium">
          <p>© {new Date().getFullYear()} Dev Sanskriti Vishwavidyalaya. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}
