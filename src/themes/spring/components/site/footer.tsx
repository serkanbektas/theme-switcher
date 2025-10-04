import React from "react";
import Link from "next/link";
import { Flower } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#e1f3d8] bg-[#f0f9eb] py-10 dark:border-[#2d4a2d] dark:bg-[#1a2e1a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Flower className="h-6 w-6 text-[#67c23a] dark:text-[#85d65a]" />
              <h3 className="text-lg font-bold text-[#3c8618] dark:text-[#a8e890]">Theme Spring</h3>
            </div>
            <p className="max-w-md text-[#606266] dark:text-[#b3c4b3]">
              A refreshing spring-themed design with light colors and natural
              elements, perfect for nature-inspired websites and applications.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-[#3c8618] dark:text-[#a8e890]">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-[#606266] transition-colors hover:text-[#67c23a] dark:text-[#b3c4b3] dark:hover:text-[#85d65a]"
              >
                Home
              </Link>
              <Link
                href="/videos"
                className="text-[#606266] transition-colors hover:text-[#67c23a] dark:text-[#b3c4b3] dark:hover:text-[#85d65a]"
              >
                Videos
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#e1f3d8] pt-8 text-center text-[#909399] dark:border-[#2d4a2d] dark:text-[#8a9a8a]">
          <p>
            © {new Date().getFullYear()} Theme Switcher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
