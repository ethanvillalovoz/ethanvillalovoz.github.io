"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10 rounded-3xl bg-gradient-to-br from-primary/10 via-primary-light/10 to-primary-dark/10 p-8 shadow-soft"
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent">
          Hi, I'm [Your Name]
        </h1>
        <p className="text-xl text-blue-900 dark:text-primary-light mb-4 font-medium">
          Welcome to my personal portfolio website. I'm a researcher and developer
          passionate about impactful technology and science.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="mb-10 rounded-3xl bg-gradient-to-br from-primary-light/10 via-primary/10 to-primary-dark/10 p-8 shadow-soft"
      >
        <h2 className="text-2xl font-bold mb-4 text-primary dark:text-primary-light">
          News & Milestones
        </h2>
        <ul className="space-y-2 text-blue-900 dark:text-primary-light">
          {/* Example timeline items, replace with your own */}
          <li>May 2025: Launched my new portfolio website 🚀</li>
          <li>Mar 2025: Published a paper at [Conference Name]</li>
          <li>Jan 2025: Started a new research project on [Topic]</li>
        </ul>
      </motion.section>
    </main>
  );
}
