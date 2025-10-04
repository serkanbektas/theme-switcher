import React from "react";
import Link from "next/link";
import { Moon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-[#121212] py-10 text-white dark:border-[#1a1a1a] dark:bg-[#0a0a0a] dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Moon className="h-6 w-6 text-[#bb86fc] dark:text-[#a370f7]" />
              <h3 className="text-lg font-bold text-white dark:text-gray-100">Theme Dark</h3>
            </div>
            <p className="max-w-md text-gray-400 dark:text-gray-500">
              A sleek dark theme with high contrast and vibrant accent colors,
              perfect for night mode enthusiasts and modern applications.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-[#bb86fc] dark:text-[#a370f7]">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-gray-400 transition-colors hover:text-[#bb86fc] dark:text-gray-500 dark:hover:text-[#a370f7]"
              >
                Home
              </Link>
              <Link
                href="/videos"
                className="text-gray-400 transition-colors hover:text-[#bb86fc] dark:text-gray-500 dark:hover:text-[#a370f7]"
              >
                Videos
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#333333] pt-8 text-center text-gray-400 dark:border-[#1a1a1a] dark:text-gray-500">
          <p>
            © {new Date().getFullYear()} Theme Switcher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
