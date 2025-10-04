"use client";

import React from "react";
import Link from "next/link";
import { ThemeSelector } from "@/components/theme-selector";
import { ModeToggle } from "@/components/mode-toggle";
import { Home, Video, Moon } from "lucide-react";
import { getDefaultTheme } from "@/lib/utils";

export function Header() {
  const theme = getDefaultTheme();

  return (
    <header className="border-b border-[#333333] bg-[#1a1a1a] py-4 text-white dark:border-[#222] dark:bg-[#0d0d0d] dark:text-gray-100">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Moon className="h-7 w-7 text-[#bb86fc] dark:text-[#a370f7]" />
          <Link
            href="/"
            className="text-2xl font-bold text-white transition-colors dark:text-gray-100"
          >
            Theme Dark
          </Link>
        </div>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-300 transition-colors hover:text-[#bb86fc] dark:text-gray-400 dark:hover:text-[#a370f7]"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            href="/videos"
            className="flex items-center gap-2 text-gray-300 transition-colors hover:text-[#bb86fc] dark:text-gray-400 dark:hover:text-[#a370f7]"
          >
            <Video size={18} />
            <span>Videos</span>
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <ThemeSelector theme={theme} />
        </div>
      </div>
    </header>
  );
}
