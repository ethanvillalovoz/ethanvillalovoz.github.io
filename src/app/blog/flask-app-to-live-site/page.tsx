"use client";

import { motion } from "framer-motion";
import { 
  FaCalendarAlt, 
  FaGithub, 
  FaExternalLinkAlt,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaArrowLeft
} from "react-icons/fa";
import { SiDocker, SiFlask, SiMysql, SiNginx, SiPython, SiGooglescholar } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function BlogPost() {
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
        🚀 From Flask App to Live Site
      </motion.h1>
      <div className="flex items-center gap-2 text-neutral-500 mb-8 text-sm">
        <FaCalendarAlt className="w-4 h-4" />
        <span>July 31, 2025</span>
        <span>•</span>
        <span>3 min read</span>
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
            <SiFlask className="text-sm" /> Flask
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 text-xs font-medium">
            <SiDocker className="text-sm" /> Docker
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-600/10 text-green-600 dark:text-green-400 text-xs font-medium">
            <SiNginx className="text-sm" /> Nginx
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-600/10 text-orange-600 dark:text-orange-400 text-xs font-medium">
            <SiMysql className="text-sm" /> MySQL
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-600/10 text-yellow-600 dark:text-yellow-400 text-xs font-medium">
            <SiPython className="text-sm" /> Python
          </span>
        </div>

        <p className="text-lg leading-relaxed">
          Six weeks ago, I was staring at a blank Flask app. Now? I&apos;m staring at a live HTTPS-secured portfolio site, containerized with Docker, deployed on a VPS, and backed by a real MySQL database.
        </p>
        
        <p className="text-lg leading-relaxed">
          This is the halfway mark of the <strong className="text-primary dark:text-primary-light">Meta x MLH Production Engineering Fellowship</strong>, and I&apos;ve learned more in two weeks than I did in some full college courses.
        </p>

        <div className="my-8 relative aspect-video rounded-lg overflow-hidden shadow-lg border dark:border-neutral-700">
          <Image
            src="/images/blog/flask-app-to-live-site/MLH.jpeg"
            alt="The MLH Fellowship — a 12-week sprint through real-world engineering, collaboration, and growth"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-primary dark:text-primary-light">So what did I build?</h2>
        <p className="text-lg leading-relaxed">
          I set out to create a personal portfolio — something simple to showcase my work. But simple wasn&apos;t enough. I wanted to build it like a production engineer would.
        </p>
        
        <p className="text-lg leading-relaxed">So I did.</p>
        
        <p className="text-lg leading-relaxed">
          I designed a full-stack Flask web app with templated pages for projects, education, hobbies, and research. Then I added a live, dynamic Timeline feature, backed by MySQL and exposed through a REST API I built from scratch. You can post to it. It stores your message. It renders instantly. It just works.
        </p>
        
        <p className="text-lg leading-relaxed">Next came the infrastructure.</p>
        
        <p className="text-lg leading-relaxed">
          I Dockerized everything — Flask, MySQL, Nginx — and orchestrated it all with Docker Compose. I set up a custom domain with DuckDNS, configured Nginx as a reverse proxy, and added HTTPS using Certbot, because let&apos;s be honest: if your site doesn&apos;t have a lock icon in 2025, what are we even doing?
        </p>
        
        <h3 className="text-xl font-semibold text-primary dark:text-primary-light">Deployment? Automated.</h3>
        <p className="text-lg leading-relaxed">
          I wrote a custom redeploy-site.sh script that pulls the latest GitHub changes, rebuilds containers, and restarts the stack in seconds. No FTP. No manual file copying. Just code → push → live.
        </p>

        <div className="my-8 relative aspect-video rounded-lg overflow-hidden shadow-lg border dark:border-neutral-700">
          <Image
            src="/images/blog/flask-app-to-live-site/homepage.png"
            alt="The homepage of my journey — where research, engineering, and curiosity collide"
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm my-6">
          <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-4">Here&apos;s what I ran into:</h3>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>SELinux blocking Docker? Fixed it by moving my files out of /root/ and rewriting my systemd units.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>Python cryptography build errors? Resolved dependency like a boss.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>MySQL container not talking to Flask? Traced it through Docker networks and nailed the config.</span>
            </li>
          </ul>
        </div>
        
        <p className="text-lg leading-relaxed">I learned to troubleshoot like a real engineer — with logs, grit, and a lot of StackOverflow tabs.</p>

        <div className="my-8 relative aspect-video rounded-lg overflow-hidden shadow-lg border dark:border-neutral-700">
          <Image
            src="/images/blog/flask-app-to-live-site/logs.png"
            alt="One script to rule them all: rebuilding and redeploying my portfolio with Docker Compose in seconds"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold text-primary dark:text-primary-light">And here&apos;s why it matters.</h2>
        <p className="text-lg leading-relaxed">
          This wasn&apos;t about making a flashy homepage. It was about learning how real software is built and shipped.
          It was about building something I could break, fix, deploy, and evolve.
        </p>
        
        <p className="text-lg leading-relaxed">
          Now, I have a portfolio that doesn&apos;t just list my skills — it demonstrates them. It&apos;s living, modular, and extensible. I even added test coverage and validation logic, because clean UIs mean nothing without solid backends.
        </p>
        
        <p className="text-lg leading-relaxed">And it&apos;s just the beginning.</p>
        
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm my-6">
          <h3 className="text-xl font-semibold text-primary dark:text-primary-light mb-4">Up Next:</h3>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>Add a full blog engine</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>Build an admin dashboard for managing content</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>Integrate CI/CD with GitHub Actions</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>Write end-to-end UI tests</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block mr-3 text-primary dark:text-primary-light">•</span>
              <span>Refactor data to make it fully database-driven</span>
            </li>
          </ul>
        </div>
        
        <p className="text-lg leading-relaxed">Why stop at a portfolio when I can turn it into a platform?</p>
        
        <h2 className="text-2xl font-bold text-primary dark:text-primary-light">Want to see it?</h2>
        <div className="flex flex-wrap gap-4 my-4">
          <a 
            href="https://ethanvillalovoz.duckdns.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            <FaExternalLinkAlt className="mr-2" /> View Live Site
          </a>
          <a 
            href="https://github.com/ethanvillalovoz/ethanvillalovoz-mlh-portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <FaGithub className="mr-2" /> GitHub Repo
          </a>
        </div>

        <div className="my-8 relative aspect-video rounded-lg overflow-hidden shadow-lg border dark:border-neutral-700">
          <Image
            src="/images/blog/flask-app-to-live-site/banner.png"
            alt="The MLH Fellowship team collaborating on projects"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed">
          I&apos;m beyond grateful to MLH and Meta for making this possible. I&apos;ve gone from &quot;I think I can do this&quot; to &quot;I just did it, and here&apos;s the link.&quot;
        </p>
        
        <p className="text-lg leading-relaxed">
          If you&apos;re curious about Flask, Docker, deployment pipelines, or just how to turn a passion project into a production-grade system — reach out. Or better yet, fork my repo and build your version.
        </p>
        
        <p className="text-lg font-medium">Let&apos;s make cool stuff.</p>
        <p>— Ethan</p>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg mt-8 mb-6 shadow-sm border border-blue-100 dark:border-blue-800">
          <p className="text-lg mb-3">
            This article is also available on Medium. If you prefer to read it there or want to give it some claps, check it out:
          </p>
          <a 
            href="https://medium.com/@ethan.villalovoz/from-flask-app-to-live-site-halfway-through-the-mlh-fellowship-2e55cf9c218b" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            <svg viewBox="0 0 1043.63 592.71" className="w-5 h-5 mr-2">
              <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460.03 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" fill="white"></path>
            </svg>
            Read on Medium
          </a>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-5 mt-6">
          <p className="text-lg">
            Thanks for reading! If you found this interesting, feel free to connect with me on:
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