"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGooglescholar } from "react-icons/si";
import { FaGithub, FaFilePdf, FaGlobe, FaYoutube } from "react-icons/fa";

interface Author {
	name: string;
	url?: string;
}

interface Paper {
	title: string;
	authors: Author[];
	conference: string;
	paper?: string;
	bibtex?: string;
	image: string;
	description: string;
	tags: string[];
	website?: string;
	code?: string;
	video?: string;
}

const papers: Paper[] = [
	{
		title: "Social Triangles and Aggressive Lines: Multi-Robot Formations Impact Navigation and Approach",
		authors: [
			{ name: "Alexandra Bacula", url: "https://sites.google.com/plu.edu/alexandra-bacula" },
			{ name: "Ethan Villalovoz" },
			{ name: "Deanna Flynn", url: "https://deannaflynn.wixsite.com/deanna-flynn" },
			{ name: "Ankur Mehta", url: "https://uclalemur.com/" },
			{ name: "Heather Knight", url: "https://www.charismarobotics.com/" },
		],
		conference: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2023",
		paper: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.pdf",
		bibtex: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.bib",
		image: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/STAL_Multi_Robot_Formations.png",
		description:
			"Investigates how different multi-robot formations affect navigation and approach behaviors in social environments. Demonstrates the impact of formation geometry on human-robot interaction and navigation efficiency.",
		tags: ["Robotics", "Multi-Robot", "Human-Robot Interaction"],
	},
];

export default function ResearchPage() {
    return (
		<main className="max-w-5xl mx-auto px-6 py-24 bg-background text-foreground">
			<header className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-7xl md:text-8xl font-serif text-primary dark:text-white tracking-tighter leading-[0.9]"
				>
					Research
				</motion.h1>
				<a
						href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity mb-2"
					>
						<SiGooglescholar className="mr-2 text-lg" />
						Google Scholar
				</a>
			</header>
			
			<section className="mb-24">
				<h2 className="text-sm font-mono uppercase tracking-widest text-primary-light mb-8">Interests</h2>
				<p className="text-2xl leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-4xl font-light">
					My research focuses on building aligned world models for robotics, which are frameworks that jointly 
					infer human intent and predict the consequences of actions in complex environments. I am interested in 
					interactive robot learning, human-AI collaboration, and generative models for embodied intelligence.
				</p>
			</section>

			<section className="mb-12">
				<h2 className="text-4xl font-serif mb-12 text-primary dark:text-white">Publications</h2>
				<div className="flex flex-col gap-12">
					{papers.map((paper) => (
						<motion.article
							key={paper.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="flex flex-col md:flex-row gap-8 md:gap-12 border-t border-neutral-200 dark:border-neutral-800 pt-12"
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
									{paper.title}
								</h3>
								<div className="text-lg text-neutral-600 dark:text-neutral-400 mb-2">
									{paper.authors.map((author, index) => (
										<span key={index}>
											{author.url ? (
												<a
													href={author.url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-primary dark:text-white underline decoration-primary-light/50 hover:decoration-primary"
												>
													{author.name}
												</a>
											) : (
												author.name
											)}
											{index < paper.authors.length - 1 && ", "}
										</span>
									))}
								</div>
								<div className="text-sm font-mono text-primary-light uppercase tracking-wider mb-6">
									{paper.conference}
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
						</motion.article>
					))}
				</div>
			</section>
		</main>
	);
}
