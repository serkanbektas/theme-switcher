import React from "react";
import { Sun, Moon, Flower } from "lucide-react";

interface ThemeSelectorProps {
  theme: string;
}

export function ThemeSelector({ theme }: ThemeSelectorProps) {
  // Display the current theme name
  let ThemeIcon = Sun;
  let themeName = "Default";

  if (theme === "spring") {
    ThemeIcon = Flower;
    themeName = "Spring";
  } else if (theme === "darkside") {
    ThemeIcon = Moon;
    themeName = "Dark Side";
  }

  return (
    <div className="flex items-center gap-2 rounded-full bg-white/10 p-2 backdrop-blur-sm">
      <div className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium">
        <span className="mr-1">
          <ThemeIcon size={16} />
        </span>
        {themeName} Theme
      </div>
    </div>
  );
}
