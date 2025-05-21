import React from "react";
import Link from "next/link";
import { ThemeSelector } from "@/components/theme-selector";
import { Home, Video, Moon } from "lucide-react";
import { getDefaultTheme } from "@/lib/utils";

export function Header() {
  const theme = getDefaultTheme();

  return (
    <header className="border-b border-[#333333] bg-[#1a1a1a] py-4 text-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Moon className="h-7 w-7 text-[#bb86fc]" />
          <Link href="/" className="text-2xl font-bold text-white">
            Theme Dark
          </Link>
        </div>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-300 transition-colors hover:text-[#bb86fc]"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            href="/videos"
            className="flex items-center gap-2 text-gray-300 transition-colors hover:text-[#bb86fc]"
          >
            <Video size={18} />
            <span>Videos</span>
          </Link>
        </nav>

        <ThemeSelector theme={theme} />
      </div>
    </header>
  );
}
