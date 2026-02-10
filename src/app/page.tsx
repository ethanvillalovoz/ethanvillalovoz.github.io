"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaYoutube, FaXTwitter, FaFilePdf, FaArrowRight, FaGlobe, FaUpRightFromSquare, FaDocker, FaAws, FaLinux, FaPython, FaGitAlt } from "react-icons/fa6";
import { SiGooglescholar, SiCplusplus, SiPytorch, SiPostgresql, SiTypescript, SiGnubash, SiReact, SiNextdotjs, SiFastapi, SiOpencv, SiLangchain, SiHuggingface, SiPandas, SiMlflow } from "react-icons/si";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const getLinkIcon = (label: string) => {
	const lower = label.toLowerCase();
	if (lower.includes("code") || lower.includes("github")) return <FaGithub />;
	if (lower.includes("report") || lower.includes("paper") || lower.includes("pdf")) return <FaFilePdf />;
	if (lower.includes("video") || lower.includes("youtube")) return <FaYoutube />;
	if (lower.includes("website") || lower.includes("demo") || lower.includes("app")) return <FaGlobe />;
	return <FaUpRightFromSquare />;
};

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

const profileImages = [
	"/images/EthanVillalovozPic.jpeg",
	"/images/graduation_2025.jpg",
];

interface Publication {
	title: string;
	url?: string;
	authors: { name: string; url?: string; isMe?: boolean; equalContribution?: boolean; equalAdvising?: boolean }[];
	conference: string;
	award?: string;
	paper?: string;
	bibtex?: string;
	image: string;
	description: string;
	tags: string[];
	website?: string;
	code?: string;
	video?: string;
	highlighted?: boolean;
}

const featuredPublication: Publication = {
    title: "An Exploratory Study of Bayesian Prompt Optimization for Test-Driven Code Generation with Large Language Models",
    url: "https://arxiv.org/abs/2512.15076",
    authors: [
        { name: "S. Tomar", url: "https://shlok-crypto.github.io/" },
        { name: "A. Deshwal", url: "https://aryandeshwal.github.io/" },
        { name: "E. Villalovoz", isMe: true },
        { name: "M. Fazzini", url: "https://www-users.cse.umn.edu/~mfazzini/" },
        { name: "H. Cai", url: "https://chapering.github.io/" },
        { name: "J.R. Doppa", url: "https://eecs.wsu.edu/~jana/" },
    ],
    conference: "arXiv, 2025",
    paper: "/data/research/2025_WSU_Bayesian_Prompt_Optimization/paper.pdf",
    image: "/data/research/2025_WSU_Bayesian_Prompt_Optimization/ICSE_BO_figure.png",
    description:
        "Explores Bayesian optimization as a principled approach to automated prompt search for large language model–based code generation. Demonstrates sample-efficient improvements in functional correctness over strong prompting baselines on the HumanEval+ benchmark.",
    tags: ["Robotics", "Multi-Robot", "Human-Robot Interaction"],
};

const featuredProjects = [
    {
		title: "Self-Driving Car: Behavioral Cloning in the Udacity Simulator",
		description:
			"End-to-end CNN (NVIDIA architecture) that predicts steering from front-camera images to autonomously drive the Udacity simulator. Includes balanced/augmented data pipeline, real-time inference via Flask + Socket.IO, and reproducible training.",
		image: "/images/projects/self_driving.png",
		tags: ["Computer Vision", "Deep Learning", "TensorFlow", "Autonomous Driving"],
		extraLinks: [
			{
                label: "Code",
                url: "https://github.com/ethanvillalovoz/self-driving-car-simulation"
			},
		],
		date: "September 2025",
		status: "Completed"
    },
    {
		title: "ClearBill.AI: Explaining Medical Bills with AI and RAG",
		description:
			"An AI-powered chatbot that uses Retrieval-Augmented Generation (RAG) with Astra DB, LangChain, and Hugging Face’s Llama-3.1-8B-Instruct to help users understand medical bills with clear, context-aware responses.",
		image: "/images/projects/clearbill.png",
		tags: ["RAG", "LLMs", "Next.js", "Vector Databases"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/clearbill-ai",
			},
		],
		date: "July 2025",
		status: "Completed"
    }
];

const skills = [
    { name: "Python", icon: FaPython },
    { name: "C/C++", icon: SiCplusplus },
    { name: "SQL", icon: SiPostgresql },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Bash", icon: SiGnubash },
    { name: "PyTorch", icon: SiPytorch },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "FastAPI", icon: SiFastapi },
    { name: "OpenCV", icon: SiOpencv },
    { name: "LangChain", icon: SiLangchain },
    { name: "Hugging Face", icon: SiHuggingface },
    { name: "Pandas", icon: SiPandas },
    { name: "Docker", icon: FaDocker },
    { name: "AWS", icon: FaAws },
    { name: "Git", icon: FaGitAlt },
    { name: "MLflow", icon: SiMlflow },
    { name: "Linux", icon: FaLinux },
];

export default function Home() {
	const [timelineTab, setTimelineTab] = useState<"work" | "education">("work");
	const [showAllNews, setShowAllNews] = useState(false);

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
								<div className="flex items-center justify-center md:justify-start gap-2 text-neutral-600 dark:text-neutral-400 select-none">
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
								<p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
									Master&apos;s student in Computer Science at <span className="text-foreground font-medium">Georgia Tech</span>. My research interests lie at the intersection of robot learning, world modeling, and human-aligned decision making.
								</p>
								<p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
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
									href="/data/EthanVillalovoz-CV.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center px-6 py-2.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700 group"
								>
									CV
								</a>
								
								<div className="flex items-center gap-5">
									<a href="https://www.linkedin.com/in/evillalovoz27/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1">
										<FaLinkedin size={22} />
									</a>
									<a href="https://github.com/ethanvillalovoz" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1">
										<FaGithub size={22} />
									</a>
									<a href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1">
										<SiGooglescholar size={22} />
									</a>
									<a href="https://x.com/etvillalovoz" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1">
										<FaXTwitter size={22} />
									</a>
									<a href="https://www.youtube.com/@ethanvillalovoz" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1">
										<FaYoutube size={22} />
									</a>
									<a href="mailto:ethan.villalovoz@gatech.edu" className="text-neutral-400 hover:text-foreground transition-all duration-300 ease-in-out hover:-translate-y-1">
										<FaEnvelope size={22} />
									</a>
								</div>
							</div>
						</div>
						
						<div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0">
							<div className="relative w-full h-full rounded-2xl overflow-hidden shadow-soft bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600">
								<Image
									src={profileImages[0]}
									alt="Ethan Villalovoz"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
					</div>
				</FadeIn>

				{/* News Section */}
				<FadeIn className="mb-24">
					<h2 className="text-2xl font-bold mb-8 tracking-tight">News</h2>
					<FadeInStagger key={showAllNews ? "all" : "limited"} className="space-y-6 border-l-2 border-neutral-300 dark:border-neutral-600 pl-6 ml-2">
						{visibleNews.slice(0, showAllNews ? undefined : 3).map((item, index) => (
							<FadeInItem key={index} className="relative">
                                <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-300 dark:bg-neutral-600 border-2 border-background" />
								<div className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1">{item.date}</div>
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
						<div className="flex bg-neutral-200 dark:bg-neutral-900 p-1 rounded-full">
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
								<div className="w-full flex gap-4 md:gap-6 p-6 rounded-2xl bg-card border border-neutral-300 dark:border-neutral-600 transition-colors">
									<div className="flex-shrink-0 mt-1">
										<div className="w-12 h-12 relative rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 shadow-sm border border-neutral-300 dark:border-neutral-600">
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
											<span className="text-xs font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 px-2 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 w-fit mt-1 md:mt-0">
												{item.date}
											</span>
										</div>
										<div className="text-sm text-foreground/80 mb-2">{item.title}</div>
										<ul className="space-y-1.5">
											{item.bullets.map((bullet, i) => (
												<li key={i} className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pl-3 border-l border-neutral-300 dark:border-neutral-600">
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

                {/* Featured Publication */}
                <FadeIn className="mb-24">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-bold tracking-tight">Recent Research</h2>
                        <Link href="/publications" className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                            View All <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </Link>
					</div>
                    
                    <FadeInItem>
                        <article className={`w-full flex flex-col md:flex-row gap-6 md:gap-8 p-6 rounded-2xl border border-neutral-300 dark:border-neutral-600 transition-colors ${
                                    featuredPublication.highlighted 
                                        ? "bg-yellow-50/80 dark:bg-yellow-900/20" 
                                        : "bg-card"
                                }`}>
                            <div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600">
                                <Image
                                    src={featuredPublication.image}
                                    alt={featuredPublication.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 192px"
                                />
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="font-semibold text-lg leading-tight text-foreground">
                                    <a href={featuredPublication.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        {featuredPublication.title}
                                    </a>
                                </h3>
                                
                                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                    {featuredPublication.authors.map((author, index) => (
                                        <span key={index}>
                                            {author.url ? (
                                                <a href={author.url} target="_blank" rel="noopener noreferrer" className={`hover:text-foreground transition-colors ${author.isMe ? "font-medium text-foreground" : ""}`}>
                                                    {author.name}
                                                </a>
                                            ) : (
                                                <span className={author.isMe ? "font-medium text-foreground" : ""}>
                                                    {author.name}
                                                </span>
                                            )}
                                            {author.equalContribution && "*"}
                                            {author.equalAdvising && "†"}
                                            {index < featuredPublication.authors.length - 1 && ", "}
                                        </span>
                                    ))}
                                </div>

                                <div className="text-sm font-medium text-foreground/80">
                                    {featuredPublication.conference}
                                    {featuredPublication.award && <span className="text-red-500 ml-2">{featuredPublication.award}</span>}
                                </div>
                                
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {featuredPublication.description}
                                </p>

                                <div className="flex flex-wrap gap-3 pt-2">
                                     {featuredPublication.paper && (
                                        <a href={featuredPublication.paper} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
                                            <FaFilePdf /> Paper
                                        </a>
                                    )}
                                    {featuredPublication.website && (
                                        <a href={featuredPublication.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
                                            <FaGlobe /> Website
                                        </a>
                                    )}
                                    {featuredPublication.code && (
                                        <a href={featuredPublication.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
                                            <FaGithub /> Code
                                        </a>
                                    )}
                                    {featuredPublication.video && (
                                        <a href={featuredPublication.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
                                            <FaYoutube /> Video
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    </FadeInItem>
                </FadeIn>

                 {/* Featured Projects */}
                 <FadeIn className="mb-24">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-bold tracking-tight">Recent Projects</h2>
                        <Link href="/projects" className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                            View All <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </Link>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{featuredProjects.map((project) => (
							<FadeInItem key={project.title} className="h-full">
								<article className="flex flex-col h-full rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-card overflow-hidden">
									<div className="relative w-full h-48 bg-neutral-200 dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-600">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
										/>
									</div>
									<div className="flex-1 p-6 flex flex-col">
										<h3 className="font-semibold text-lg leading-tight text-foreground mb-3">
											{project.title}
										</h3>
										<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
											{project.description}
										</p>
										
                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-0.5 text-xs font-medium bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-3">
                                                {project.extraLinks &&
                                                    project.extraLinks.map((link, idx) => (
                                                        <a
                                                            key={link.label + idx}
                                                            href={link.url}
                                                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {getLinkIcon(link.label)}
                                                            {link.label}
                                                        </a>
                                                    ))}
                                            </div>
                                        </div>
									</div>
								</article>
							</FadeInItem>
						))}
					</div>
				</FadeIn>

                {/* Skills */}
                <FadeIn className="mb-24">
                    <h2 className="text-2xl font-bold mb-8 tracking-tight">Technical Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                            <div 
                                key={skill.name}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-neutral-100 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 rounded-lg border border-neutral-200 dark:border-neutral-700"
                            >
                                <skill.icon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </FadeIn>
			</div>
		</main>
	);
}
