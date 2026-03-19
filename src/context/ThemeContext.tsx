"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Theme {
  idx: number;
  // CSS gradient strings for inline styles
  primary: string;
  secondary: string;
  accent: string;
  // For text gradient (bg-clip-text)
  primaryText: string;
  secondaryText: string;
  accentText: string;
  // for glow colors
  glowColor: string;
  // Solid accent for simple highlights
  solidAccent: string;
  solidSecondary: string;
}

const THEMES: Theme[] = [
  {
    idx: 0,
    primary: "linear-gradient(to right, #60a5fa, #3b82f6, #6366f1)",
    secondary: "linear-gradient(to right, #22d3ee, #60a5fa, #3b82f6)",
    accent: "linear-gradient(to right, #c084fc, #a855f7, #ec4899)",
    primaryText: "linear-gradient(to right, #60a5fa, #3b82f6, #6366f1)",
    secondaryText: "linear-gradient(to right, #22d3ee, #60a5fa, #3b82f6)",
    accentText: "linear-gradient(to right, #c084fc, #a855f7, #ec4899)",
    glowColor: "rgba(59, 130, 246, 0.5)",
    solidAccent: "#60a5fa",
    solidSecondary: "#22d3ee",
  },
  {
    idx: 1,
    primary: "linear-gradient(to right, #22c55e, #0d9488)",
    secondary: "linear-gradient(to right, #34d399, #22c55e)",
    accent: "linear-gradient(to right, #2dd4bf, #06b6d4)",
    primaryText: "linear-gradient(to right, #22c55e, #0d9488)",
    secondaryText: "linear-gradient(to right, #34d399, #22c55e)",
    accentText: "linear-gradient(to right, #2dd4bf, #06b6d4)",
    glowColor: "rgba(34, 197, 94, 0.5)",
    solidAccent: "#22c55e",
    solidSecondary: "#34d399",
  },
  {
    idx: 2,
    primary: "linear-gradient(to right, #f97316, #dc2626)",
    secondary: "linear-gradient(to right, #facc15, #f97316)",
    accent: "linear-gradient(to right, #f87171, #ec4899)",
    primaryText: "linear-gradient(to right, #f97316, #dc2626)",
    secondaryText: "linear-gradient(to right, #facc15, #f97316)",
    accentText: "linear-gradient(to right, #f87171, #ec4899)",
    glowColor: "rgba(249, 115, 22, 0.5)",
    solidAccent: "#f97316",
    solidSecondary: "#facc15",
  },
  {
    idx: 3,
    primary: "linear-gradient(to right, #8b5cf6, #9333ea)",
    secondary: "linear-gradient(to right, #818cf8, #8b5cf6)",
    accent: "linear-gradient(to right, #c084fc, #ec4899)",
    primaryText: "linear-gradient(to right, #8b5cf6, #9333ea)",
    secondaryText: "linear-gradient(to right, #818cf8, #8b5cf6)",
    accentText: "linear-gradient(to right, #c084fc, #ec4899)",
    glowColor: "rgba(139, 92, 246, 0.5)",
    solidAccent: "#8b5cf6",
    solidSecondary: "#818cf8",
  },
  {
    idx: 4,
    primary: "linear-gradient(to right, #f43f5e, #db2777)",
    secondary: "linear-gradient(to right, #f472b6, #f43f5e)",
    accent: "linear-gradient(to right, #e879f9, #ec4899)",
    primaryText: "linear-gradient(to right, #f43f5e, #db2777)",
    secondaryText: "linear-gradient(to right, #f472b6, #f43f5e)",
    accentText: "linear-gradient(to right, #e879f9, #ec4899)",
    glowColor: "rgba(244, 63, 94, 0.5)",
    solidAccent: "#f43f5e",
    solidSecondary: "#f472b6",
  },
];

const ThemeContext = createContext<Theme>(THEMES[0]);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [idx, setIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % THEMES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={THEMES[idx]}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export { THEMES };
