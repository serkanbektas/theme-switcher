"use client";

import React from "react";
import Link from "next/link";
import { ThemeSelector } from "@/components/theme-selector";
import { ModeToggle } from "@/components/mode-toggle";
import { Home, Video, Flower } from "lucide-react";
import { getDefaultTheme } from "@/lib/utils";

export function Header() {
  const theme = getDefaultTheme();

  return (
    <header className="bg-[#f0f9eb] py-6 dark:bg-[#1a2e1a] dark:border-b dark:border-[#2d4a2d]">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Flower className="h-8 w-8 text-[#67c23a] dark:text-[#85d65a]" />
          <Link
            href="/"
            className="text-2xl font-bold text-[#3c8618] transition-colors dark:text-[#a8e890]"
          >
            Theme Spring
          </Link>
        </div>

        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="/"
            className="flex items-center gap-2 text-[#606266] transition-colors hover:text-[#67c23a] dark:text-[#b3c4b3] dark:hover:text-[#85d65a]"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            href="/videos"
            className="flex items-center gap-2 text-[#606266] transition-colors hover:text-[#67c23a] dark:text-[#b3c4b3] dark:hover:text-[#85d65a]"
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
