"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { 
	SiGooglescholar, 
	SiPython, 
	SiCplusplus, 
	SiPytorch, 
	SiHuggingface,
	SiOpencv,
	SiGit,
	SiDocker,
	SiAnaconda,
	SiMlflow,
	SiDvc,
	SiJupyter,
	SiPandas,
	SiSqlite,
	SiFastapi
} from "react-icons/si";

// Example timeline data structure
const workTimeline = [
	{
		date: "May 2026 - Jul 2026",
		company: "Microsoft",
		logo: "/images/timeline/microsoft_logo.jpeg",
		title: <span className="text-primary dark:text-white font-medium">Software Engineer Intern</span>,
		bullets: [
			"Commerce and Ecosystems.",
		],
	},
	{
		date: "Jan 2024 - May 2025",
		company: "Washington State University",
		logo: "/images/timeline/washington_state_university_logo.jpeg",
		title: <span className="text-primary dark:text-white font-medium">Undergraduate Research Assistant</span>,
		bullets: [
			"Developed and evaluated a Bayesian optimization framework for prompt-based large language model code generation.",
		],
	},
	// {
	// 	date: "Jun 2025 - Sep 2025",
	// 	company: "Meta & Major League Hacking",
	// 	logo: "/images/timeline/meta_MLH_fellowship_logo.png",
	// 	title: <span className="text-primary dark:text-white font-medium">Production Engineering Fellow</span>,
	// 	bullets: [
	// 		"Built and deployed a production-grade full-stack Flask application with Docker, CI/CD automation, and monitoring infrastructure.",
	// 	],
	// },
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
		date: "Jan 2026 - Dec 2027",
		company: "Georgia Institute of Technology",
		logo: "/images/timeline/GT_icon.png",
		title: (
			<span className="text-primary dark:text-white font-medium">M.S. in Computer Science, Computational Perception and Robotics (GPA: 4.0/4.0)</span>
		),
		bullets: [
			// "Pursuing M.S. in Computer Science with a focus on AI, robotics, and perception",
			// "Activities: AI Safety Initiative",
		],
	},
	{
		date: "Aug 2021 - May 2025",
		company: "Washington State University",
		logo: "/images/timeline/Washington_State_icon.png",
		title: (
			<span className="text-primary dark:text-white font-medium">B.S. in Computer Science, Minor in Mathematics (GPA: 3.94/4.0)</span>
		),
		bullets: [
			<span>Senior Design Project: <a href="/data/capstone/index.html" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">Retrieval-Augmented Generation Application Using Knowledge Graph and Vector Search</a></span>,
			// "Activities: Honors College, NIH ESTEEMED Fellow, VCEA College Ambassador, NIH MARC Fellow",
		],
	},
];

const skills = [
	{ name: "Python", icon: SiPython },
	{ name: "C/C++", icon: SiCplusplus },
	// { name: "SQL", icon: SiSqlite },
	{ name: "PyTorch", icon: SiPytorch },
	// { name: "Hugging Face Transformers", icon: SiHuggingface },
	{ name: "Pandas", icon: SiPandas },
	{ name: "OpenCV", icon: SiOpencv },
	{ name: "Git", icon: SiGit },
	{ name: "Docker", icon: SiDocker },
	// { name: "Conda", icon: SiAnaconda },
	// { name: "MLflow", icon: SiMlflow },
	// { name: "DVC", icon: SiDvc },
	// { name: "Jupyter", icon: SiJupyter },
	// { name: "FastAPI", icon: SiFastapi },
];

export default function Home() {
	const [timelineTab, setTimelineTab] = useState<"work" | "education">("work");
	const [showAllNews, setShowAllNews] = useState(false);

	const newsItems = [
		{
			date: "12/2025",
			content: (
				<>
					New paper on {" "}
					<span className="font-semibold">arXiv</span>{" "}
					on {" "}
					<a href="https://arxiv.org/abs/2512.15076" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						Bayesian prompt optimization for LLM-based code generation
					</a>.
				</>
			),
			// hidden: true,
		},
		{
			date: "07/2025",
			content: (
				<>
					Admitted to the{" "}
					<a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
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
					Gave an alumni talk for the WSU{" "}
					<a href="https://marc.wsu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						MARC
					</a>{" "}
					&{" "}
					<a href="https://mira.wsu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						MIRA
					</a>{" "}
					program.
				</>
			),
		},
		// {
		// 	date: "06/2025",
		// 	content: (
		// 		<>
		// 			Joined Meta & Major League Hacking as a{" "}
		// 			<a href="https://fellowship.mlh.io/programs/production-engineering-sre" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
		// 				Production Engineering Fellow
		// 			</a>!
		// 		</>
		// 	),
		// },
		{
			date: "05/2025",
			content: <>Graduated from Washington State University with a B.S. in Computer Science. Go Cougs!</>,
		},
		{
			date: "06/2024",
			content: (
				<>
					Conducting research at Carnegie Mellon University as part of the CMU{" "}
					<a href="https://riss.ri.cmu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						RISS
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
					<a href="https://research.google/programs-and-events/csrmp/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
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
					<a href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
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
					Paper accepted at {" "}
					<span className="font-semibold">IROS 2023</span>{" "}
					on{" "}
					<a href="https://ieeexplore.ieee.org/abstract/document/10342372" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						multi-robot formations for social navigation
					</a>.
				</>
			),
			hidden: true,
		},
		{
			date: "05/2023",
			content: (
				<>
					Interning as a{" "}
					<a href="https://about.google/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
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
					Became a{" "}
					<a href="https://marc.wsu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						NIH MARC Scholar
					</a>{" "}
					through the National Institutes of Health.
				</>
			),
			hidden: true,
		},
		{
			date: "06/2022",
			content: (
				<>
					Conducting research at Oregon State University as part of the{" "}
					<a href="https://engineering.oregonstate.edu/CoRIS/reu-robots-real-world" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
						REU: Robots in the Real World
					</a>{" "}
					program.
				</>
			),
			hidden: true,
		},
		// {
		// 	date: "07/2021",
		// 	content: (
		// 		<>
		// 			Became an ESTEEMED Scholar through the{" "}
		// 			<a href="https://mira.wsu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary">
		// 				NIH Fellowship
		// 			</a>.
		// 		</>
		// 	),
		// 	hidden: true,
		// },
	];
	const visibleNews = newsItems.filter((item) => !item.hidden);
	const hiddenNews = newsItems.filter((item) => item.hidden);

	return (
		<main className="max-w-5xl mx-auto px-6 py-24 bg-background text-foreground">
			<div className="relative z-10">
				{/* Intro Section */}
				<div className="flex flex-col md:flex-row items-start gap-12 mb-24">
					<div className="flex-1">
						<h1
							// initial={{ opacity: 0, y: 20 }}
							// animate={{ opacity: 1, y: 0 }}
							// transition={{ duration: 0.7, ease: "easeOut" }}
							className="text-7xl md:text-8xl font-serif mb-4 text-primary dark:text-white tracking-tighter leading-[0.9]"
						>
							Ethan Villalovoz
						</h1>
						<div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 select-none mb-8">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
								<circle cx="12" cy="10" r="3" />
							</svg>
							<span className="text-lg font-medium">
								Sacramento, California, United States
							</span>
						</div>
						<p className="mb-6 text-xl md:text-2xl leading-relaxed text-neutral-600 dark:text-neutral-300 font-light max-w-2xl">
							Master&apos;s student in Computer Science at Georgia Tech. My research interests are in robot learning and world modeling from human interaction and feedback.
						</p>
						<p className="mb-8 text-lg md:text-xl leading-relaxed text-neutral-600 dark:text-neutral-300 font-light max-w-2xl">
							I am always open to connecting—please feel free to reach out!
						</p>
						<div className="flex flex-wrap items-center gap-6 mb-12">
							<a
								href="/data/EthanVillalovoz-Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground text-lg font-medium hover:opacity-90 transition-opacity"
							>
								Resume
							</a>
							{/* <a
								href="/data/EthanVillalovoz-CV.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-8 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-lg"
							>
								CV
							</a> */}
							<div className="flex items-center gap-6">
								<a href="https://www.linkedin.com/in/evillalovoz27/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors text-2xl"><FaLinkedin /></a>
								<a href="https://github.com/ethanvillalovoz" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors text-2xl"><FaGithub /></a>
								<a href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors text-2xl"><SiGooglescholar /></a>
								<a href="https://x.com/etvillalovoz" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors text-2xl"><FaXTwitter /></a>
								<a href="https://www.youtube.com/@ethanvillalovoz" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary transition-colors text-2xl"><FaYoutube /></a>
								<a href="mailto:ethan.villalovoz@gatech.edu" className="text-neutral-400 hover:text-primary transition-colors text-2xl"><FaEnvelope /></a>
							</div>
						</div>
					</div>
					<div className="w-full md:w-auto flex justify-center md:justify-end">
						<Image
							src="/images/EthanVillalovozPic.jpeg"
							alt="Ethan Villalovoz"
							width={300}
							height={300}
							className="rounded-2xl object-cover shadow-2xl"
						/>
					</div>
				</div>

				{/* Tech Stack Section */}
				<section className="mb-24">
					<h2 className="text-4xl font-serif mb-8 text-primary dark:text-white">Technical Skills</h2>
					<div className="flex flex-wrap gap-4">
						{skills.map((skill) => (
							<div 
								key={skill.name} 
								className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors cursor-default"
							>
								<skill.icon className="text-xl" />
								<span className="font-medium">{skill.name}</span>
							</div>
						))}
					</div>
				</section>

				{/* Timeline Section */}
				<section className="mb-24">
					<div className="flex gap-8 mb-8 border-b border-neutral-200 dark:border-neutral-800">
						<button
							className={`pb-4 text-lg font-serif transition-colors ${
								timelineTab === "work"
									? "border-b-2 border-primary text-primary dark:text-white"
									: "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
							}`}
							onClick={() => setTimelineTab("work")}
						>
							Experience
						</button>
						<button
							className={`pb-4 text-lg font-serif transition-colors ${
								timelineTab === "education"
									? "border-b-2 border-primary text-primary dark:text-white"
									: "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
							}`}
							onClick={() => setTimelineTab("education")}
						>
							Education
						</button>
					  </div>
					<div className="space-y-12">
						{(timelineTab === "work" ? workTimeline : educationTimeline).map((item, idx) => (
							<div
								key={idx}
								className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-12"
							>
								<div className="flex-shrink-0 md:w-48 pt-1">
									<div className="text-sm font-mono text-neutral-500 uppercase tracking-widest">{item.date}</div>
								</div>
								<div className="flex-1">
									<div className="flex items-center gap-4 mb-2">
										<Image
											src={item.logo}
											alt={item.company + ' logo'}
											width={32}
											height={32}
											className="w-8 h-8 rounded-full object-contain bg-white"
										/>
										<h3 className="font-serif text-2xl text-primary dark:text-white">{item.company}</h3>
									</div>
									<div className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">{item.title}</div>
									<ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
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
					<h2 className="text-4xl font-serif mb-12 text-primary dark:text-white">Latest News</h2>
					<div className="grid gap-8">
						{visibleNews.map((item, idx) => (
							<div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
								<div className="md:w-32 flex-shrink-0">
									<span className="font-mono text-sm text-neutral-500 uppercase tracking-widest">{item.date}</span>
								</div>
								<div className="text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
									{item.content}
								</div>
							</div>
						))}
						{!showAllNews && hiddenNews.length > 0 && (
							<div className="pt-8">
								<button
									className="text-primary hover:opacity-70 transition-opacity font-medium underline decoration-neutral-300 underline-offset-4"
									onClick={() => setShowAllNews(true)}
								>
									View Archive
								</button>
							</div>
						)}
						{showAllNews &&
							hiddenNews.map((item, idx) => (
								<div key={visibleNews.length + idx} className="flex flex-col md:flex-row gap-4 md:gap-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
									<div className="md:w-32 flex-shrink-0">
										<span className="font-mono text-sm text-neutral-500 uppercase tracking-widest">{item.date}</span>
									</div>
									<div className="text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed">
										{item.content}
									</div>
								</div>
							))}
						{showAllNews && (
							<div className="pt-8">
								<button
									className="text-primary hover:opacity-70 transition-opacity font-medium underline decoration-neutral-300 underline-offset-4"
									onClick={() => setShowAllNews(false)}
								>
									Show Less
								</button>
							</div>
						)}
					</div>
				</section>
			</div>
		</main>
	);
}
