"use client";

import { useState, useEffect } from "react";

export default function Background() {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((h) => (h + 2) % 360);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div
        className="absolute inset-0 transition-all duration-2000 ease-linear"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, hsl(${240 + hue}, 30%, 4%) 0%, transparent 80%),
            radial-gradient(circle at 80% 20%, hsl(${280 + hue}, 35%, 3%) 0%, transparent 80%),
            linear-gradient(135deg, hsl(${220 + hue}, 40%, 1%) 0%, hsl(${180 + hue}, 50%, 0.5%) 100%)
          `,
        }}
      />
      <div className="absolute inset-0 opacity-10">
        {[0, 1].map((i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, hsl(${200 + 90 * i}, 40%, 20%) 0%, transparent 85%)`,
              width: `${180 + 120 * i}px`,
              height: `${180 + 120 * i}px`,
              filter: "blur(80px)",
              left: `${30 + 40 * i}%`,
              top: `${30 + 20 * i}%`,
            }}
          />
        ))}
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}
