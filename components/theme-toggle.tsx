"use client";

import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type Theme = "light" | "dark";

// Toggles <html data-theme> between light and dark and remembers the choice.
// The initial theme is set before paint by the inline script in app/layout.tsx.
export const ThemeToggle = () => {
  const [theme, setTheme] = React.useState<Theme | null>(null);

  React.useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "light" ? "light" : "dark"
    );
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable (private mode, etc.) - theme still switches
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      {theme === "light" ? <FiMoon /> : theme === "dark" ? <FiSun /> : null}
    </button>
  );
};
