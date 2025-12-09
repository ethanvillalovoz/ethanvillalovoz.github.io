"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      // No saved preference, use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setDark(true);
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        setDark(false);
        localStorage.setItem("theme", "light");
      }
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
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
      className="ml-4 rounded-full p-2 bg-gradient-to-br from-primary/10 via-primary-light/20 to-primary-dark/30 dark:from-primary-dark/30 dark:via-primary/20 dark:to-primary-dark/50 border border-primary/20 dark:border-primary-dark/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
      tabIndex={0}
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.span
            key="moon"
            initial={{ scale: 0.7, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.7, opacity: 0, rotate: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-hidden
            className="flex items-center justify-center"
          >
            {/* Classic Crescent Moon SVG (balanced) */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M21 12.5C21 17.19 16.97 21 12.5 21C9.61 21 7.06 19.44 5.5 17C8.5 17.5 12 15.5 12 12C12 8.5 8.5 6.5 5.5 7C7.06 4.56 9.61 3 12.5 3C16.97 3 21 6.81 21 12.5Z"
                fill="#facc15"
                stroke="#facc15"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5 }}
              />
            </svg>
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ scale: 0.7, opacity: 0, rotate: 30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.7, opacity: 0, rotate: -30 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-hidden
            className="flex items-center justify-center"
          >
            {/* Sun SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.circle
                cx="12" cy="12" r="5" fill="#fbbf24" stroke="#fbbf24" strokeWidth="1.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <line x1="12" y1="2" x2="12" y2="5" stroke="#fbbf24" strokeWidth="1.5" />
                <line x1="12" y1="19" x2="12" y2="22" stroke="#fbbf24" strokeWidth="1.5" />
                <line x1="2" y1="12" x2="5" y2="12" stroke="#fbbf24" strokeWidth="1.5" />
                <line x1="19" y1="12" x2="22" y2="12" stroke="#fbbf24" strokeWidth="1.5" />
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="#fbbf24" strokeWidth="1.5" />
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="#fbbf24" strokeWidth="1.5" />
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="#fbbf24" strokeWidth="1.5" />
                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="#fbbf24" strokeWidth="1.5" />
              </motion.g>
            </svg>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
