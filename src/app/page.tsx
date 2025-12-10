"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

// Example timeline data structure
const workTimeline = [
	{
		date: "Summer 2026",
		company: "Microsoft",
		logo: "/images/timeline/microsoft_logo.jpeg",
		title: <span className="text-primary dark:text-white font-medium">Software Engineer Intern</span>,
		bullets: [
			"Commerce and Ecosystems.",
		],
	},
	{
		date: "Jun 2025 - Sep 2025",
		company: "Meta & Major League Hacking",
		logo: "/images/timeline/meta_MLH_fellowship_logo.png",
		title: <span className="text-primary dark:text-white font-medium">Production Engineering Fellow</span>,
		bullets: [
			"Built and deployed a production-grade full-stack Flask application with Docker, CI/CD automation, and monitoring infrastructure.",
		],
	},
  {
		date: "Jun 2024 - Aug 2024",
		company: "Carnegie Mellon University",
		logo: "/images/timeline/Carnegie_Mellon_icon.png",
		title: <span className="text-primary dark:text-white font-medium">Robotics Institute Summer Scholar</span>,
		bullets: [
			"Developed a hierarchical reward learning framework with Bayesian inference and interactive clarification dialogues.",
		],
	},
  {
		date: "May 2023 - Aug 2023",
		company: "Google",
		logo: "/images/timeline/Google_icon.png",
		title: <span className="text-primary dark:text-white font-medium">Software Engineering Intern (STEP)</span>,
		bullets: [
			"Developed scalable C++ and SQL analytics pipelines and interactive dashboards that optimized internal data workflows.",
		],
	},
  {
		date: "Jun 2022 - Aug 2022",
		company: "Oregon State University",
		logo: "/images/timeline/Oregon_State_icon.jpeg",
		title: <span className="text-primary dark:text-white font-medium">NSF REU Fellow</span>,
		bullets: [
			"Designed and implemented geometric motion primitives and interactive deployment tools enabling expressive multi-robot behaviors.",
		],
	},
];

const educationTimeline = [
	{
		date: "2026 - 2027 (expected)",
		company: "Georgia Institute of Technology",
		logo: "/images/timeline/GT_icon.png",
		title: (
			<span className="text-primary dark:text-white font-medium">M.S. in Computer Science, Specialization in Computational Perception and Robotics</span>
		),
		bullets: [
			"Pursuing M.S. in Computer Science with a focus on AI, robotics, and perception.",
			"Activities: AI Safety Initiative",
		],
	},
	{
		date: "2021 - 2025",
		company: "Washington State University, Honors College",
		logo: "/images/timeline/Washington_State_icon.png",
		title: (
			<span className="text-primary dark:text-white font-medium">B.S. in Computer Science, Minor in Mathematics (GPA: 3.94/4.00)</span>
		),
		bullets: [
			"Graduated with honors, focusing on AI, machine learning, and mathematics.",
			"Activities: Honors College, NIH ESTEEMED Fellow, VCEA College Ambassador, NIH MARC Fellow",
		],
	},
];

export default function Home() {
	const [timelineTab, setTimelineTab] = useState<"work" | "education">("work");
	const [showAllNews, setShowAllNews] = useState(false);

	const newsItems = [
		{
			date: "07/2025",
			content: (
				<>
					Admitted to the{" "}
					<a href="https://www.cc.gatech.edu/" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						Georgia Tech MSCS
					</a>{" "}
					program! I’ll be starting in {" "}
					<span className="font-semibold">Spring 2026</span>.
				</>
			),
		},
		{
			date: "06/2025",
			content: (
				<>
					Gave an alumni talk for the{" "}
					<a href="https://marc.wsu.edu/" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						WSU MARC
					</a>{" "}
					&{" "}
					<a href="https://mira.wsu.edu/" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						MIRA
					</a>{" "}
					program.
				</>
			),
		},
		{
			date: "06/2025",
			content: (
				<>
					Joined Meta & Major League Hacking as a{" "}
					<a href="https://fellowship.mlh.io/programs/production-engineering-sre" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						Production Engineering Fellow
					</a>!
				</>
			),
		},
		{
			date: "05/2025",
			content: <>Graduated from Washington State University with a B.S. in Computer Science. Go Cougs!</>,
		},
		{
			date: "06/2024",
			content: (
				<>
					Conducting research at Carnegie Mellon University as part of the{" "}
					<a href="https://riss.ri.cmu.edu/" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						CMU RISS
					</a>{" "}
					program.
				</>
			),
		},
		{
			date: "09/2023",
			content: (
				<>
					Participating in Google Research&apos;s{" "}
					<a href="https://research.google/programs-and-events/csrmp/" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						CS Research Mentorship Program
					</a>.
				</>
			),
			hidden: true,
		},
		{
			date: "07/2023",
			content: (
				<>
					Awarded the{" "}
					<a href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						Generation Google Scholarship
					</a>.
				</>
			),
			hidden: true,
		},
		{
			date: "07/2023",
			content: (
				<>
					Work accepted for presentation at {" "}
					<span className="font-semibold">IROS 2023</span>!
				</>
			),
			hidden: true,
		},
		{
			date: "05/2023",
			content: (
				<>
					Interning as a{" "}
					<a href="https://buildyourfuture.withgoogle.com/programs/step" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						Software Engineering Intern (STEP)
					</a>{" "}
					at Google.
				</>
			),
			hidden: true,
		},
		{
			date: "05/2023",
			content: (
				<>
					Became a MARC Scholar through the{" "}
					<a href="https://marc.wsu.edu/" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						NIH Fellowship
					</a>.
				</>
			),
			hidden: true,
		},
		{
			date: "06/2022",
			content: (
				<>
					Conducting research at Oregon State University as part of the{" "}
					<a href="https://engineering.oregonstate.edu/CoRIS/reu-robots-real-world" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						REU: Robots in the Real World
					</a>{" "}
					program.
				</>
			),
			hidden: true,
		},
		{
			date: "07/2021",
			content: (
				<>
					Became an ESTEEMED Scholar through the{" "}
					<a href="https://mira.wsu.edu/" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						NIH Fellowship
					</a>.
				</>
			),
			hidden: true,
		},
	];
	const visibleNews = newsItems.filter((item) => !item.hidden);
	const hiddenNews = newsItems.filter((item) => item.hidden);

	return (
		<main className="max-w-5xl mx-auto px-6 py-16 bg-background text-foreground">
			<div className="relative z-10">
				{/* Intro Section */}
				<div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
					<div className="flex-1">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							className="text-6xl font-serif mb-6 text-primary dark:text-white tracking-tight"
						>
							Ethan Villalovoz
						</motion.h1>
						<p className="mb-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
							I am a Master&apos;s student in Computer Science at Georgia Tech, specializing in Computational Perception and Robotics. This summer, I&apos;ll be joining Microsoft as a Software Engineer Intern.
						</p>
						<p className="mb-8 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
							Please feel free to reach out about research, collaboration, or any advice I can help with!
						</p>
						<div className="flex flex-wrap items-center gap-4 mb-8">
							<a
								href="/data/EthanVillalovoz-Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
							>
								Resume
							</a>
							<a
								href="/data/EthanVillalovoz-CV.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-6 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
							>
								CV
							</a>
							<div className="flex gap-4 ml-2">
								<a href="https://www.linkedin.com/in/evillalovoz27/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-colors text-2xl"><FaLinkedin /></a>
								<a href="https://github.com/ethanvillalovoz" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-colors text-2xl"><FaGithub /></a>
								<a href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary transition-colors text-2xl"><SiGooglescholar /></a>
								<a href="mailto:ethan.villalovoz@gatech.edu" className="text-neutral-500 hover:text-primary transition-colors text-2xl"><FaEnvelope /></a>
							</div>
						</div>
					</div>
					<div>
						<Image
							src="/images/EthanVillalovozPic.jpeg"
							alt="Ethan Villalovoz"
							width={240}
							height={240}
							className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
						/>
					</div>
				</div>

				{/* Timeline Section */}
				<section className="mb-16">
					<div className="flex gap-6 mb-6 border-b border-neutral-200 dark:border-neutral-800">
						<button
							className={`pb-3 font-medium transition-colors ${
								timelineTab === "work"
									? "border-b-2 border-primary text-primary dark:text-white"
									: "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
							}`}
							onClick={() => setTimelineTab("work")}
						>
							Work
						</button>
						<button
							className={`pb-3 font-medium transition-colors ${
								timelineTab === "education"
									? "border-b-2 border-primary text-primary dark:text-white"
									: "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
							}`}
							onClick={() => setTimelineTab("education")}
						>
							Education
						</button>
					  </div>
					<div className="space-y-6">
						{(timelineTab === "work" ? workTimeline : educationTimeline).map((item, idx) => (
							<div
								key={idx}
								className="flex items-start gap-6 p-6 rounded-xl bg-card border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
							>
								<div className="flex-shrink-0">
									<Image
										src={item.logo}
										alt={item.company + ' logo'}
										width={48}
										height={48}
										className="w-12 h-12 rounded-full object-contain bg-white border border-neutral-100"
									/>
								</div>
								<div>
									<div className="text-sm text-primary-light mb-1 font-medium">{item.date}</div>
									<div className="font-serif text-xl text-primary dark:text-white mb-1">{item.company}</div>
									<div className="text-base text-neutral-700 dark:text-neutral-300 mb-2">{item.title}</div>
									<ul className="list-disc pl-5 space-y-1 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
										{item.bullets.map((point, i) => (
											<li key={i}>{point}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</section>

				{/* News Section */}
				<section className="mb-12">
					<h2 className="text-3xl font-serif mb-8 text-primary dark:text-white">News</h2>
					<ul className="space-y-4 border-l-2 border-neutral-100 dark:border-neutral-800 pl-6">
						{visibleNews.map((item, idx) => (
							<li key={idx} className="text-neutral-700 dark:text-neutral-300">
								<span className="font-mono text-xs text-primary-light mr-3 uppercase tracking-wider">{item.date}</span>
								<span>{item.content}</span>
							</li>
						))}
						{!showAllNews && hiddenNews.length > 0 && (
							<li>
								<button
									className="text-sm text-primary-light hover:text-primary transition-colors font-medium mt-2"
									onClick={() => setShowAllNews(true)}
								>
									+ Show More
								</button>
							</li>
						)}
						{showAllNews &&
							hiddenNews.map((item, idx) => (
								<li key={visibleNews.length + idx} className="text-neutral-700 dark:text-neutral-300">
									<span className="font-mono text-xs text-primary-light mr-3 uppercase tracking-wider">{item.date}</span>
									<span>{item.content}</span>
								</li>
							))}
						{showAllNews && (
							<li>
								<button
									className="text-sm text-primary-light hover:text-primary transition-colors font-medium mt-2"
									onClick={() => setShowAllNews(false)}
								>
									- Show Less
								</button>
							</li>
						)}
					</ul>
				</section>
			</div>
		</main>
	);
}
