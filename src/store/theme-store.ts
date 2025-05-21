"use client";

import { create } from "zustand";

interface ThemeState {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "default",
  setTheme: (newTheme: string) => set({ theme: newTheme }),
}));
