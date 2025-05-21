import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <h3 className="mb-4 text-lg font-bold">Theme Switcher</h3>
            <p className="max-w-md text-muted-foreground">
              A modern web application with multiple theme support, built with
              Next.js and TypeScript.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/videos"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Videos
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Theme Switcher. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
