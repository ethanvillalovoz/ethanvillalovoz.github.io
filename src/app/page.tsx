"use client";

import { useState, useRef, type ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaYoutube, FaXTwitter, FaApple } from "react-icons/fa6";
import { 
	SiPython, SiCplusplus, SiPytorch, SiPandas, SiOpencv, SiGit, SiDocker, SiGooglescholar
} from "react-icons/si";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const workTimeline = [
	{
		date: "May 2026 - Jul 2026",
		company: "Microsoft",
		logo: "/images/timeline/microsoft_logo.jpeg",
		title: <span className="text-foreground font-medium">Software Engineer Intern</span>,
		bullets: [
			"Commerce and Ecosystems.",
		],
	},
	{
		date: "Jan 2024 - May 2025",
		company: "Washington State University",
		logo: "/images/timeline/washington_state_university_logo.jpeg",
		title: <span className="text-foreground font-medium">Undergraduate Research Assistant</span>,
		bullets: [
			"Developed and evaluated a Bayesian optimization framework for prompt-based large language model code generation.",
		],
	},
  {
		date: "Jun 2024 - Aug 2024",
		company: "Carnegie Mellon University",
		logo: "/images/timeline/Carnegie_Mellon_icon.png",
		title: <span className="text-foreground font-medium">Robotics Institute Summer Scholar</span>,
		bullets: [
			"Developed a hierarchical reward learning framework with Bayesian inference and interactive clarification dialogues.",
		],
	},
  {
		date: "May 2023 - Aug 2023",
		company: "Google",
		logo: "/images/timeline/Google_icon.png",
		title: <span className="text-foreground font-medium">Software Engineering Intern (STEP)</span>,
		bullets: [
			"Developed scalable C++ and SQL analytics pipelines and interactive dashboards that optimized internal data workflows.",
		],
	},
  {
		date: "Jun 2022 - Aug 2022",
		company: "Oregon State University",
		logo: "/images/timeline/Oregon_State_icon.jpeg",
		title: <span className="text-foreground font-medium">NSF REU Fellow</span>,
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
			<span className="text-foreground font-medium">M.S. in Computer Science, Computational Perception and Robotics (GPA: 4.0/4.0)</span>
		),
		bullets: [],
	},
	{
		date: "Aug 2021 - May 2025",
		company: "Washington State University",
		logo: "/images/timeline/Washington_State_icon.png",
		title: (
			<span className="text-foreground font-medium">B.S. in Computer Science, Minor in Mathematics (GPA: 3.94/4.0)</span>
		),
		bullets: [
			<span>Senior Design Project: <a href="/data/capstone/index.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Retrieval-Augmented Generation Application Using Knowledge Graph and Vector Search</a></span>,
		],
	},
];

const skills = [
	{ name: "Python", icon: SiPython },
	{ name: "C/C++", icon: SiCplusplus },
	{ name: "PyTorch", icon: SiPytorch },
	{ name: "Pandas", icon: SiPandas },
	{ name: "OpenCV", icon: SiOpencv },
	// { name: "Git", icon: SiGit },
	{ name: "Docker", icon: SiDocker },
];

const profileImages = [
	"/images/EthanVillalovozPic.jpeg",
	"/images/graduation_2025.jpg",
];

export default function Home() {
	const [timelineTab, setTimelineTab] = useState<"work" | "education">("work");
	const [showAllNews, setShowAllNews] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    const newsItems: { date: string; content: ReactNode; hidden?: boolean }[] = [
		{
			date: "12/2025",
			content: (
				<>
					New paper on {" "}
					<span className="font-semibold">arXiv</span>{" "}
					on {" "}
					<a href="https://arxiv.org/abs/2512.15076" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
						Bayesian prompt optimization for LLM-based code generation
					</a>.
				</>
			),
		},
		{
			date: "07/2025",
			content: (
				<>
					Admitted to the{" "}
					<a href="https://www.cc.gatech.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
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
					<a href="https://marc.wsu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
						MARC
					</a>{" "}
					&{" "}
					<a href="https://mira.wsu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
						MIRA
					</a>{" "}
					program.
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
					Conducting research at Carnegie Mellon University as part of the CMU{" "}
					<a href="https://riss.ri.cmu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
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
					<a href="https://research.google/programs-and-events/csrmp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
						CS Research Mentorship Program
					</a>.
				</>
			),
			// hidden: true,
		},
		{
			date: "07/2023",
			content: (
				<>
					Awarded the{" "}
					<a href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
						Generation Google Scholarship
					</a>.
				</>
			),
			// hidden: true,
		},
		{
			date: "07/2023",
			content: (
				<>
					Paper accepted at {" "}
					<span className="font-semibold">IROS 2023</span>{" "}
					on{" "}
					<a href="https://ieeexplore.ieee.org/abstract/document/10342372" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
						multi-robot formations for social navigation
					</a>.
				</>
			),
			// hidden: true,
		},
		{
			date: "05/2023",
			content: (
				<>
					Interning as a{" "}
					<a href="https://about.google/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
						Software Engineering Intern (STEP)
					</a>{" "}
					at Google.
				</>
			),
			// hidden: true,
		},
		{
			date: "05/2023",
			content: (
				<>
					Became a{" "}
					<a href="https://marc.wsu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
						NIH MARC Scholar
					</a>{" "}
					through the National Institutes of Health.
				</>
			),
			// hidden: true,
		},
		{
			date: "06/2022",
			content: (
				<>
					Conducting research at Oregon State University as part of the{" "}
					<a href="https://engineering.oregonstate.edu/CoRIS/reu-robots-real-world" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
						REU: Robots in the Real World
					</a>{" "}
					program.
				</>
			),
			// hidden: true,
		},
    ];

	const visibleNews = newsItems.filter((item) => !item.hidden);

	return (
		<main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
			<div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
				
                {/* Hero Section */}
				<FadeIn className="mb-24 text-center md:text-left">
					<div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
						<div className="flex-1 space-y-6">
							<div>
								<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
									Ethan Villalovoz
								</h1>
								<div className="flex items-center justify-center md:justify-start gap-2 text-neutral-500 dark:text-neutral-400 select-none">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
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
									<span className="text-sm font-medium">
										Sacramento, California, United States
									</span>
								</div>
							</div>

							<div className="space-y-4 max-w-xl mx-auto md:mx-0">
								<p className="text-lg text-primary-light leading-relaxed">
									Master&apos;s student in Computer Science at <span className="text-foreground font-medium">Georgia Tech</span>. My research interests lie at the intersection of robot learning, world modeling, and human-aligned decision making.
								</p>
								{/* <p className="text-lg text-primary-light leading-relaxed">
									My research interests lie at the intersection of robot learning, world modeling, and human-aligned decision making. I’m particularly interested in how robots can learn structured, uncertainty-aware representations of the world and human intent through interaction and feedback.
								</p> */}
								<p className="text-lg text-primary-light leading-relaxed">
									I am always open to connecting. Please feel free to reach out!
								</p>
							</div>

							<div className="flex flex-col md:flex-row items-center gap-6 pt-2">
								<a
									href="/data/EthanVillalovoz-Resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
								>
									Resume
								</a>

								<a
									href="/macos"
									className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors group"
								>
									<FaApple className="mb-0.5 text-neutral-500 group-hover:text-foreground transition-colors" size={18} />
									{/* <span className="group-hover:text-foreground transition-colors">macOS</span> */}
								</a>
								
								<div className="flex items-center gap-5">
									<a href="https://www.linkedin.com/in/evillalovoz27/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#0077b5] transition-colors transform hover:scale-110 duration-200">
										<FaLinkedin size={22} />
									</a>
									<a href="https://github.com/ethanvillalovoz" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-foreground transition-colors transform hover:scale-110 duration-200">
										<FaGithub size={22} />
									</a>
									<a href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#4285F4] transition-colors transform hover:scale-110 duration-200">
										<SiGooglescholar size={22} />
									</a>
									<a href="https://x.com/etvillalovoz" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-foreground transition-colors transform hover:scale-110 duration-200">
										<FaXTwitter size={22} />
									</a>
									<a href="https://www.youtube.com/@ethanvillalovoz" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#FF0000] transition-colors transform hover:scale-110 duration-200">
										<FaYoutube size={22} />
									</a>
									<a href="mailto:ethan.villalovoz@gatech.edu" className="text-neutral-400 hover:text-foreground transition-colors transform hover:scale-110 duration-200">
										<FaEnvelope size={22} />
									</a>
								</div>
							</div>
						</div>
						
						<motion.div 
							className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 cursor-pointer"
							initial={{ rotate: 3 }}
							whileHover={{ rotate: 0 }}
							transition={{ duration: 0.3 }}
							onHoverStart={() => {
								hoverTimeout.current = setTimeout(() => {
									setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
								}, 320);
							}}
							onHoverEnd={() => {
								if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
							}}
						>
							<div className="relative w-full h-full rounded-2xl overflow-hidden shadow-soft bg-neutral-100 dark:bg-neutral-800">
								<AnimatePresence>
									<motion.div
										key={currentImageIndex}
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: 0.5 }}
										className="absolute inset-0"
									>
										<Image
											src={profileImages[currentImageIndex]}
											alt="Ethan Villalovoz"
											fill
											className="object-cover"
											priority
										/>
									</motion.div>
								</AnimatePresence>
							</div>
						</motion.div>
					</div>
				</FadeIn>

				{/* News Section */}
				<FadeIn className="mb-24">
					<h2 className="text-2xl font-bold mb-8 tracking-tight">News</h2>
					<FadeInStagger key={showAllNews ? "all" : "limited"} className="space-y-6 border-l-2 border-neutral-100 dark:border-neutral-800 pl-6 ml-2">
						{visibleNews.slice(0, showAllNews ? undefined : 3).map((item, index) => (
							<FadeInItem key={index} className="relative">
                                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border-2 border-background" />
								<div className="text-xs font-medium text-neutral-400 mb-1">{item.date}</div>
								<div className="text-base text-foreground/90 leading-relaxed">{item.content}</div>
							</FadeInItem>
						))}
					</FadeInStagger>
                    {visibleNews.length > 3 && (
                        <button 
                            onClick={() => setShowAllNews(!showAllNews)}
                            className="mt-6 ml-8 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                        >
                            {showAllNews ? "Show Less" : "Show More"}
                        </button>
                    )}
				</FadeIn>

				{/* Timeline Section */}
				<FadeIn className="mb-24">
					<div className="flex items-center gap-6 mb-8">
						<h2 className="text-2xl font-bold tracking-tight">Experience</h2>
						<div className="flex bg-neutral-100 dark:bg-neutral-900 p-1 rounded-full">
							{(["work", "education"] as const).map((tab) => (
								<button
									key={tab}
									onClick={() => setTimelineTab(tab)}
									className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
										timelineTab === tab
											? "bg-white dark:bg-neutral-800 text-foreground shadow-sm"
											: "text-neutral-500 hover:text-foreground"
									}`}
								>
									{tab.charAt(0).toUpperCase() + tab.slice(1)}
								</button>
							))}
						</div>
					</div>

					<FadeInStagger key={timelineTab} className="space-y-4">
						{(timelineTab === "work" ? workTimeline : educationTimeline).map((item, index) => (
							<FadeInItem key={index}>
								<div className="group flex gap-4 md:gap-6 p-6 -mx-6 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors">
									<div className="flex-shrink-0 mt-1">
										<div className="w-12 h-12 relative rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-900 shadow-sm border border-neutral-100 dark:border-neutral-800">
											<Image
												src={item.logo}
												alt={item.company}
												fill
												className="object-contain p-0.25"
											/>
										</div>
									</div>
									<div className="flex-1">
										<div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
											<h3 className="font-semibold text-foreground">{item.company}</h3>
											<span className="text-xs font-medium text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded-full w-fit mt-1 md:mt-0">
												{item.date}
											</span>
										</div>
										<div className="text-sm text-foreground/80 mb-2">{item.title}</div>
										<ul className="space-y-1.5">
											{item.bullets.map((bullet, i) => (
												<li key={i} className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed pl-3 border-l border-neutral-200 dark:border-neutral-800">
													{bullet}
												</li>
											))}
										</ul>
									</div>
								</div>
							</FadeInItem>
						))}
					</FadeInStagger>
				</FadeIn>

				{/* Skills Section */}
				<FadeIn>
					<h2 className="text-2xl font-bold mb-8 tracking-tight">Technologies</h2>
					<FadeInStagger className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4" faster>
						{skills.map((skill) => (
							<FadeInItem
								key={skill.name}
								className="flex flex-col items-center justify-center p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-200 group"
							>
								<skill.icon className="w-8 h-8 mb-3 text-neutral-400 group-hover:text-foreground transition-colors" />
								<span className="text-xs font-medium text-neutral-500 group-hover:text-foreground transition-colors text-center">
									{skill.name}
								</span>
							</FadeInItem>
						))}
					</FadeInStagger>
				</FadeIn>
			</div>
		</main>
	);
}
