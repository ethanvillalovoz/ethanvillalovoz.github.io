"use client";

import { motion } from "framer-motion";

export default function ResearchPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent mb-2 sm:mb-0"
        >
          Research
        </motion.h1>
        <a
          href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary-dark transition-colors text-base mt-2 sm:mt-0"
        >
          Google Scholar
        </a>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="text-blue-900 dark:text-primary-light mb-6 text-lg font-medium"
      >
        A list of my research papers and publications.
      </motion.p>
      {/* TODO: Add research papers, bibtex links, etc. */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2">Research Interests</h2>
        <p className="text-lg mb-2">
          My research focuses on robotics, machine learning, AI safety, reinforcement learning, human-AI collaboration, and large language models. I am passionate about building intelligent systems that are robust, interpretable, and beneficial to society.
        </p>
      </section>
      <section className="mb-12">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <img src="/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/STAL_Multi_Robot_Formations.jpeg" alt="Multi-Robot Formations" className="w-40 h-32 object-cover rounded-lg border border-yellow-200 dark:border-yellow-700" />
            <div>
              <a href="/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.pdf" target="_blank" rel="noopener noreferrer" className="font-bold text-lg text-primary hover:underline block">Social Triangles and Aggressive Lines: Multi-Robot Formations Impact Navigation and Approach</a>
              <div className="font-semibold text-neutral-800 dark:text-neutral-200">Ethan Villalovoz, Alexandra Bacula, Deanna Flynn, Ankur Mehta, Heather Knight</div>
              <div className="italic text-neutral-700 dark:text-neutral-300 mb-1">IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2023</div>
              <div className="flex flex-wrap gap-4 mb-1">
                <a href="/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.pdf" className="text-primary underline text-sm" target="_blank" rel="noopener noreferrer">PDF</a>
                <a href="/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.bib" className="text-primary underline text-sm" target="_blank" rel="noopener noreferrer">BibTeX</a>
              </div>
              <div className="text-neutral-700 dark:text-neutral-300 text-sm">
                Investigates how different multi-robot formations affect navigation and approach behaviors in social environments. Demonstrates the impact of formation geometry on human-robot interaction and navigation efficiency.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
