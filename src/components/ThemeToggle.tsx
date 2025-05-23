"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Default to light mode if no preference is set
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="ml-4 rounded-full p-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary-light transition-colors shadow-soft"
    >
      {dark ? (
        <span aria-hidden>🌙</span>
      ) : (
        <span aria-hidden>☀️</span>
      )}
    </button>
  );
}
