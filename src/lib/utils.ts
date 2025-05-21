import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDefaultTheme(): string {
  // Check for environment variable on server-side
  if (typeof process !== "undefined" && process.env) {
    return process.env.NEXT_PUBLIC_DEFAULT_THEME || "default";
  }
  return "default"; // Fallback if not available
}

// Safe browser API access
export const isBrowser = typeof window !== "undefined";
