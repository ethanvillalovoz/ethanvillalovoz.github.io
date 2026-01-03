"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGooglescholar } from "react-icons/si";
import { FaGithub, FaFilePdf, FaGlobe, FaYoutube } from "react-icons/fa6";

interface Author {
	name: string;
	url?: string;
	isMe?: boolean;
	equalContribution?: boolean;
	equalAdvising?: boolean;
}

{/* ------------------------------Pre-Prints-------------------------- */}

interface PrePrint {
	title: string;
	url?: string;
	authors: Author[];
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

const preprints: PrePrint[] = [
	{
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
		// bibtex: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.bib",
		image: "/data/research/2025_WSU_Bayesian_Prompt_Optimization/ICSE_BO_figure.png",
		description:
			"Explores Bayesian optimization as a principled approach to automated prompt search for large language model–based code generation. Demonstrates sample-efficient improvements in functional correctness over strong prompting baselines on the HumanEval+ benchmark.",
		tags: ["Robotics", "Multi-Robot", "Human-Robot Interaction"],
		// website: "https://sites.google.com/plu.edu/alexandra-bacula/publications",
		// code: "https://github.com/ethanvillalovoz/social-triangles-aggressive-lines",
		// video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		// highlighted: true,
		// award: "(Spotlight)",
	},
];

{/* ------------------------------2023-------------------------- */}

interface Paper {
	title: string;
	url?: string;
	authors: Author[];
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

const papers_2023: Paper[] = [
	{
		title: "Social Triangles and Aggressive Lines: Multi-Robot Formations Impact Navigation and Approach",
		url: "https://ieeexplore.ieee.org/abstract/document/10342372",
		authors: [
			{ name: "A. Bacula", url: "https://sites.google.com/plu.edu/alexandra-bacula" },
			{ name: "E. Villalovoz", isMe: true },
			{ name: "D. Flynn", url: "https://deannaflynn.wixsite.com/deanna-flynn" },
			{ name: "A. Mehta", url: "https://uclalemur.com/" },
			{ name: "H. Knight", url: "https://www.charismarobotics.com/" },
		],
		conference: "International Conference on Intelligent Robots and Systems (IROS), 2023",
		paper: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.pdf",
		bibtex: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.bib",
		image: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/STAL_Multi_Robot_Formations.png",
		description:
			"Investigates how different multi-robot formations affect navigation and approach behaviors in social environments. Demonstrates the impact of formation geometry on human-robot interaction and navigation efficiency.",
		tags: ["Robotics", "Multi-Robot", "Human-Robot Interaction"],
		// website: "https://sites.google.com/plu.edu/alexandra-bacula/publications",
		// code: "https://github.com/ethanvillalovoz/social-triangles-aggressive-lines",
		// video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		// highlighted: true,
		// award: "(Spotlight)",
	},
];

export default function ResearchPage() {
    return (
		<main className="max-w-5xl mx-auto px-6 py-24 bg-background text-foreground">
			<header className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
				<h1
					// initial={{ opacity: 0, y: 20 }}
					// animate={{ opacity: 1, y: 0 }}
					// transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-7xl md:text-8xl font-serif text-primary dark:text-white tracking-tighter leading-[0.9]"
				>
					Publications
				</h1>
				{/* <a
						href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity mb-2"
					>
						<SiGooglescholar className="mr-2 text-lg" />
						Google Scholar
				</a> */}
			</header>
			
			{/* <section className="mb-24"> */}
				{/* <h2 className="text-sm font-mono uppercase tracking-widest text-primary-light mb-8">Interests</h2> */}
				{/* <p className="text-2xl leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-4xl font-light">
					My research focuses on building aligned world models for robotics, which are frameworks that jointly 
					infer human intent and predict the consequences of actions in complex environments. I am interested in 
					interactive robot learning, human-AI collaboration, and generative models for embodied intelligence.
				</p>
			</section> */}

			<section className="mb-12">
				<div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1 flex flex-col md:flex-row gap-2 md:gap-6">
					<div>
						<span className="mr-4">* Equal Contribution</span>
						<span>† Equal Advising</span>
					</div>
					<div>
						Representative works are <span className="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">highlighted</span>
					</div>
				</div>
			</section>

			{/* ------------------------------Pre-Prints-------------------------- */}
			<section className="mb-24">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
					<h2 className="text-4xl font-serif text-primary dark:text-white">Pre-Prints</h2>
				</div>
				<div className="flex flex-col gap-12">
					{preprints.map((paper) => (
						<article
							key={paper.title}
							// initial={{ opacity: 0, y: 20 }}
							// whileInView={{ opacity: 1, y: 0 }}
							// viewport={{ once: true }}
							// transition={{ duration: 0.5, ease: "easeOut" }}
							className={`flex flex-col md:flex-row gap-8 md:gap-12 border-t border-neutral-200 dark:border-neutral-800 pt-8 p-6 -mx-6 rounded-xl transition-colors ${
								paper.highlighted ? "bg-yellow-100 dark:bg-yellow-900/30" : ""
							}`}
						>
							<div className="relative w-full md:w-64 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900">
								<Image
									src={paper.image}
									alt={paper.title}
									fill
									className="object-cover"
									sizes="300px"
								/>
							</div>
							  <div className="flex-1">
								<h3
									className="font-serif text-2xl font-medium text-primary dark:text-white block mb-3 leading-tight"
								>
									{paper.url ? (
										<a
											href={paper.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary"
										>
											{paper.title}
										</a>
									) : (
										paper.title
									)}
								</h3>
								<div className="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
									{paper.authors.map((author, index) => (
										<span key={index}>
											{author.url ? (
												<a
													href={author.url}
													target="_blank"
													rel="noopener noreferrer"
													className={`text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary ${
														author.isMe ? "font-bold" : ""
													}`}
												>
													{author.name}
												</a>
											) : (
												<span className={author.isMe ? "font-bold text-primary dark:text-white" : ""}>
													{author.name}
												</span>
											)}
											{author.equalContribution && "*"}
											{author.equalAdvising && "†"}
											{index < paper.authors.length - 1 && ", "}
										</span>
									))}
								</div>
								<div className="text-sm font-mono text-primary-light uppercase tracking-wider mb-6">
									{paper.conference}
									{paper.award && (
										<span className="text-red-600 dark:text-red-400 ml-2 normal-case tracking-normal font-sans font-medium">
											{paper.award}
										</span>
									)}
								</div>
								<p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6 leading-relaxed">
									{paper.description}
								</p>
								<div className="flex gap-3 flex-wrap">
									{paper.paper && (
										<a
											href={paper.paper}
											className="inline-flex items-center px-6 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
											target="_blank"
											rel="noopener noreferrer"
										>
											Paper
											<FaFilePdf className="ml-2 text-sm opacity-70" />
										</a>
									)}
									{paper.website && (
										<a
											href={paper.website}
											className="inline-flex items-center px-6 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
											target="_blank"
											rel="noopener noreferrer"
										>
											Website
											<FaGlobe className="ml-2 text-sm opacity-70" />
										</a>
									)}
									{paper.code && (
										<a
											href={paper.code}
											className="inline-flex items-center px-6 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
											target="_blank"
											rel="noopener noreferrer"
										>
											Code
											<FaGithub className="ml-2 text-sm opacity-70" />
										</a>
									)}
									{paper.video && (
										<a
											href={paper.video}
											className="inline-flex items-center px-6 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
											target="_blank"
											rel="noopener noreferrer"
										>
											Video
											<FaYoutube className="ml-2 text-sm opacity-70" />
										</a>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* ------------------------------2023-------------------------- */}
			<section className="mb-12">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
					<h2 className="text-4xl font-serif text-primary dark:text-white">2023</h2>
				</div>
				<div className="flex flex-col gap-12">
					{papers_2023.map((paper) => (
						<article
							key={paper.title}
							// initial={{ opacity: 0, y: 20 }}
							// whileInView={{ opacity: 1, y: 0 }}
							// viewport={{ once: true }}
							// transition={{ duration: 0.5, ease: "easeOut" }}
							className={`flex flex-col md:flex-row gap-8 md:gap-12 border-t border-neutral-200 dark:border-neutral-800 pt-8 p-6 -mx-6 rounded-xl transition-colors ${
								paper.highlighted ? "bg-yellow-100 dark:bg-yellow-900/30" : ""
							}`}
						>
							<div className="relative w-full md:w-64 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900">
								<Image
									src={paper.image}
									alt={paper.title}
									fill
									className="object-cover"
									sizes="300px"
								/>
							</div>
							  <div className="flex-1">
								<h3
									className="font-serif text-2xl font-medium text-primary dark:text-white block mb-3 leading-tight"
								>
									{paper.url ? (
										<a
											href={paper.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary"
										>
											{paper.title}
										</a>
									) : (
										paper.title
									)}
								</h3>
								<div className="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
									{paper.authors.map((author, index) => (
										<span key={index}>
											{author.url ? (
												<a
													href={author.url}
													target="_blank"
													rel="noopener noreferrer"
													className={`text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary ${
														author.isMe ? "font-bold" : ""
													}`}
												>
													{author.name}
												</a>
											) : (
												<span className={author.isMe ? "font-bold text-primary dark:text-white" : ""}>
													{author.name}
												</span>
											)}
											{author.equalContribution && "*"}
											{author.equalAdvising && "†"}
											{index < paper.authors.length - 1 && ", "}
										</span>
									))}
								</div>
								<div className="text-sm font-mono text-primary-light uppercase tracking-wider mb-6">
									{paper.conference}
									{paper.award && (
										<span className="text-red-600 dark:text-red-400 ml-2 normal-case tracking-normal font-sans font-medium">
											{paper.award}
										</span>
									)}
								</div>
								<p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6 leading-relaxed">
									{paper.description}
								</p>
								<div className="flex gap-3 flex-wrap">
									{paper.paper && (
										<a
											href={paper.paper}
											className="inline-flex items-center px-6 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
											target="_blank"
											rel="noopener noreferrer"
										>
											Paper
											<FaFilePdf className="ml-2 text-sm opacity-70" />
										</a>
									)}
									{paper.website && (
										<a
											href={paper.website}
											className="inline-flex items-center px-6 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
											target="_blank"
											rel="noopener noreferrer"
										>
											Website
											<FaGlobe className="ml-2 text-sm opacity-70" />
										</a>
									)}
									{paper.code && (
										<a
											href={paper.code}
											className="inline-flex items-center px-6 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
											target="_blank"
											rel="noopener noreferrer"
										>
											Code
											<FaGithub className="ml-2 text-sm opacity-70" />
										</a>
									)}
									{paper.video && (
										<a
											href={paper.video}
											className="inline-flex items-center px-6 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
											target="_blank"
											rel="noopener noreferrer"
										>
											Video
											<FaYoutube className="ml-2 text-sm opacity-70" />
										</a>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
