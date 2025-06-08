"use client";

import { motion } from "framer-motion";

export default function FirstPost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
      >
        My First Blog Post
      </motion.h1>
      <div className="flex items-center gap-2 text-neutral-500 mb-8 text-sm">
        {/* <CalendarIcon className="w-4 h-4" /> */}
        <span>June 8, 2025</span>
      </div>
      {/* Optional: Add a featured image here */}
      {/* <img src="/images/blog/first-post.jpg" alt="Blog visual" className="rounded-xl mb-8 w-full object-cover max-h-64" /> */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="prose dark:prose-invert bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 shadow space-y-4"
      >
        <p>
          Welcome to my new blog! I’m excited to start sharing my journey,
          thoughts, and lessons learned as I work in AI, robotics, and research.
          My goal is to document what I’m learning, reflect on challenges, and
          hopefully provide value to others interested in similar topics.
        </p>
        <p>
          In future posts, I’ll share project deep-dives, research updates, and
          personal reflections on the field. Thanks for reading, and stay tuned
          for more!
        </p>
      </motion.article>
    </main>
  );
}
