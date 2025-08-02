"use client";

import { motion } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,       // Twitter
  FaYoutube,       // YouTube
  FaArrowLeft      // Back arrow
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import Link from "next/link";

export default function FirstPost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary-dark mb-4 transition-colors">
        <FaArrowLeft className="mr-2" />
        Back to all blog posts
      </Link>
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent mb-2"
      >
        Welcome to My Blog
      </motion.h1>
      <div className="flex items-center gap-2 text-neutral-500 mb-8 text-sm">
        <FaCalendarAlt className="w-4 h-4" />
        <span>July 30, 2025</span>
        <span>•</span>
        <span>2 min read</span>
      </div>
      
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="prose dark:prose-invert max-w-none bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 shadow-md space-y-5"
      >
        {/* Tag pills at the top */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            Introduction
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 text-xs font-medium">
            Research
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-600/10 text-green-600 dark:text-green-400 text-xs font-medium">
            AI
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-600/10 text-orange-600 dark:text-orange-400 text-xs font-medium">
            Academic
          </span>
        </div>
        <p className="text-lg leading-relaxed">
          Hi there — I&apos;m Ethan Villalovoz. I recently graduated{" "}
          <strong className="text-primary dark:text-primary-light">summa cum laude</strong> with a B.S. in Computer Science from
          Washington State University, and I&apos;m now beginning my M.S. in Computer
          Science at Georgia Tech, specializing in Computational Perception and
          Robotics. Over the last few years, I&apos;ve explored the intersection of{" "}
          <strong className="text-primary dark:text-primary-light">robotics, machine learning, and human-AI collaboration</strong>{" "}
          — from NIH fellowships and academic research, to internships at places
          like <strong className="text-primary dark:text-primary-light">Google</strong> and <strong className="text-primary dark:text-primary-light">Meta</strong>, and summer
          research at <strong className="text-primary dark:text-primary-light">Carnegie Mellon</strong>.
        </p>
        <p className="text-lg leading-relaxed">
          This blog is my space to reflect, share, and explore what I&apos;m learning
          — not just the polished projects, but the in-between stages: the
          late-night debugging sessions, the research rabbit holes, the career
          crossroads, and the small wins that keep you moving.
        </p>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm my-6">
          <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-4">You can expect posts about:</h3>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>Building AI tools and full-stack projects (with plenty of trial and error)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>Lessons learned from research in <strong className="text-primary dark:text-primary-light">reinforcement learning, LLMs, and robotics</strong></span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>Behind-the-scenes of academic fellowships, internships, and grad school life</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>Advice for undergrads — especially those from under-resourced schools — who want to break into research or big tech</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>Occasional personal reflections on identity, resilience, and navigating this space as a first-gen student</span>
            </li>
          </ul>
        </div>
        
        <p className="text-lg leading-relaxed">
          I&apos;m building this blog not just as a record of my path, but as a place
          to give back — because I know how hard it is to find guidance when
          you&apos;re figuring this all out for the first time. If my writing helps
          even one student believe they can make it too, it&apos;s worth it.
        </p>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-5 mt-6">
          <p className="text-lg">
            Thanks for stopping by — and if any of this resonates with you, I&apos;d
            love for you to stick around. Feel free to connect with me on:
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="https://github.com/ethanvillalovoz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/evillalovoz27"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
            <a
              href="https://x.com/etvillalovoz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-300 transition-colors"
            >
              <FaTwitter className="mr-2" />
              Twitter
            </a>
            <a
              href="https://www.youtube.com/channel/UCgn7lZDWYZz0i7W_gv6xmaQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500 transition-colors"
            >
              <FaYoutube className="mr-2" />
              YouTube
            </a>
            <a
              href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors"
            >
              <SiGooglescholar className="mr-2" />
              Google Scholar
            </a>
          </div>
        </div>
      </motion.article>
    </main>
  );
}