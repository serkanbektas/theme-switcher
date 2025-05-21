import React from "react";
import Link from "next/link";
import { ThemeSelector } from "@/components/theme-selector";
import { Home, Video, Globe } from "lucide-react";
import { getDefaultTheme } from "@/lib/utils";

export function Header() {
  const theme = getDefaultTheme();

  return (
    <header className="border-b border-border bg-background py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <Globe size={32} />
            ThemeSwitcher
          </Link>
        </div>

        <nav className="hidden items-center space-x-6 md:flex">
          <Link
            href="/"
            className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link
            href="/videos"
            className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
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
