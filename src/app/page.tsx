"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showAllNews, setShowAllNews] = useState(false);

  const newsItems = [
    {
      date: "05/2025",
      content: (
        <>Graduated from Washington State University with a B.S. in Computer Science and a minor in Mathematics. Go Cougs!</>
      ),
    },
    {
      date: "06/2024",
      content: (
        <>
          This summer, I will be conducting research at Carnegie Mellon University as part of the{" "}
          <a href="https://riss.ri.cmu.edu/" className="text-primary underline">CMU RISS</a> program.
        </>
      ),
    },
    {
      date: "09/2023",
      content: (
        <>
          I will be participating in Google Research&apos;s{" "}
          <a href="https://research.google/programs-and-events/csrmp/" className="text-primary underline">CS Research Mentorship Program</a> during the Fall semester.
        </>
      ),
    },
    {
      date: "07/2023",
      content: (
        <>
          I am thrilled and sincerely grateful to have been awarded the{" "}
          <a href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship" className="text-primary underline">Generation Google Scholarship</a>.
        </>
      ),
    },
    // Hidden news items
    {
      date: "07/2023",
      content: (
        <>
          My contributions to the work I completed at Oregon State University have been accepted for presentation at <b>IROS 2023</b>!
        </>
      ),
      hidden: true,
    },
    {
      date: "05/2023",
      content: (
        <>
          I will be interning as a{" "}
          <a href="https://buildyourfuture.withgoogle.com/programs/step" className="text-primary underline">STEP Intern</a> at Google.
        </>
      ),
      hidden: true,
    },
    {
      date: "05/2023",
      content: (
        <>
          I became a MARC Scholar through the{" "}
          <a href="https://marc.wsu.edu/" className="text-primary underline">NIH Fellowship</a>.
        </>
      ),
      hidden: true,
    },
    {
      date: "06/2022",
      content: (
        <>
          I conducted research at Oregon State University as part of the{" "}
          <a href="https://engineering.oregonstate.edu/CoRIS/reu-robots-real-world" className="text-primary underline">REU: Robots in the Real World</a> program.
        </>
      ),
      hidden: true,
    },
    {
      date: "07/2021",
      content: (
        <>
          I became an ESTEEMED Scholar through the{" "}
          <a href="https://mira.wsu.edu/" className="text-primary underline">NIH Fellowship</a>.
        </>
      ),
      hidden: true,
    },
  ];

  const visibleNews = newsItems.filter(item => !item.hidden);
  const hiddenNews = newsItems.filter(item => item.hidden);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10 relative overflow-hidden">
      {/* AI/Robotics SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.10 }}
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Neural network/circuit pattern */}
        <circle cx="100" cy="100" r="40" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="300" cy="200" r="30" stroke="#f59e42" strokeWidth="2"/>
        <circle cx="600" cy="120" r="50" stroke="#10b981" strokeWidth="2"/>
        <circle cx="700" cy="400" r="35" stroke="#6366f1" strokeWidth="2"/>
        <circle cx="200" cy="500" r="25" stroke="#f43f5e" strokeWidth="2"/>
        {/* Connecting lines */}
        <line x1="100" y1="100" x2="300" y2="200" stroke="#3b82f6" strokeWidth="2" />
        <line x1="300" y1="200" x2="600" y2="120" stroke="#f59e42" strokeWidth="2" />
        <line x1="600" y1="120" x2="700" y2="400" stroke="#10b981" strokeWidth="2" />
        <line x1="700" y1="400" x2="200" y2="500" stroke="#6366f1" strokeWidth="2" />
        <line x1="200" y1="500" x2="100" y2="100" stroke="#f43f5e" strokeWidth="2" />
      </svg>
      {/* Main content (z-10 to appear above background) */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
            >
              Hi, I&apos;m Ethan Villalovoz
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
              className="text-xl md:text-2xl font-medium text-gray-700 dark:text-primary-light mb-6"
            >
              AI/ML Researcher & Engineer
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Welcome! Explore my research, projects, and journey here!
            </motion.p>
            <p className="mb-4">
              I am a recent graduate in Computer Science from Washington State
              University with a minor in Mathematics. My research spans robotics,
              machine learning, and AI safety, with a focus on reinforcement
              learning, human-AI collaboration, and large language models.
            </p>
            <p className="mb-4">
              I’ve conducted research at Carnegie Mellon University (HARP Lab) on
              hierarchical reward learning, Oregon State University (CHARISMA Lab)
              on multi-robot navigation, and completed a software engineering
              internship at Google (STEP Intern), where I built scalable data
              processing and visualization systems to support internal analytics.
            </p>
            <p className="mb-4">
              I am currently seeking full-time opportunities in AI/ML research and
              engineering while preparing to apply for M.S. programs in Spring 2026.
            </p>
          </div>
          <div>
            <Image
              src="/images/EthanVillalovozGradPic.jpeg"
              alt="Ethan Villalovoz"
              width={220}
              height={220}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        {/* Add extra spacing before News section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">News</h2>
          <ul className="list-disc pl-5 space-y-2">
            {visibleNews.map((item, idx) => (
              <li key={idx}>
                <b>{item.date}:</b> {item.content}
              </li>
            ))}
            {!showAllNews && hiddenNews.length > 0 && (
              <li>
                <button
                  className="text-primary underline font-medium transition-colors duration-150 hover:text-primary-dark hover:underline hover:opacity-80"
                  onClick={() => setShowAllNews(true)}
                >
                  ▼ Show More
                </button>
              </li>
            )}
            {showAllNews &&
              hiddenNews.map((item, idx) => (
                <li key={visibleNews.length + idx}>
                  <b>{item.date}:</b> {item.content}
                </li>
              ))}
            {showAllNews && (
              <li>
                <button
                  className="text-primary underline font-medium transition-colors duration-150 hover:text-primary-dark hover:underline hover:opacity-80"
                  onClick={() => setShowAllNews(false)}
                >
                  ▲ Show Less
                </button>
              </li>
            )}
          </ul>
        </section>
      </div>
    </main>
  );
}
