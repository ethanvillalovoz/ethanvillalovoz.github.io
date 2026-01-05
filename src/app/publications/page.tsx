"use client";

import Image from "next/image";
import { FaGithub, FaFilePdf, FaGlobe, FaYoutube } from "react-icons/fa6";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

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
		<main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
			<div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
				<FadeIn>
					<header className="mb-24">
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
							Publications
						</h1>
						<p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
							I&apos;m interested in how robots can learn structured, uncertainty-aware representations of the world and human intent through interaction and feedback.
						</p>
					</header>
				</FadeIn>
                
                {/* Legend */}
                <FadeIn className="mb-12">
                    <div className="text-sm text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                        <div className="flex gap-4">
                            <span>* Equal Contribution</span>
                            <span>† Equal Advising</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-neutral-200 dark:bg-neutral-800" />
                        <div>
                            Representative works are <span className="bg-yellow-100 dark:bg-yellow-900/30 px-1.5 py-0.5 rounded text-foreground">highlighted</span>
                        </div>
                    </div>
                </FadeIn>

				{/* Pre-Prints */}
				<FadeIn className="mb-24">
					<h2 className="text-2xl font-bold mb-8 tracking-tight">Pre-Prints</h2>
					<FadeInStagger className="space-y-4">
						{preprints.map((paper) => (
							<FadeInItem key={paper.title}>
                                <article className={`flex flex-col md:flex-row gap-6 md:gap-8 p-6 -mx-6 rounded-2xl transition-colors ${
                                    paper.highlighted 
                                        ? "bg-yellow-50/80 dark:bg-yellow-900/20" 
                                        : "hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                                }`}>
                                    <div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                                        <Image
                                            src={paper.image}
                                            alt={paper.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 192px"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <h3 className="font-semibold text-lg leading-tight text-foreground">
                                            {paper.url ? (
                                                <a href={paper.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                                    {paper.title}
                                                </a>
                                            ) : paper.title}
                                        </h3>
                                        
                                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                                            {paper.authors.map((author, index) => (
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
                                                    {index < paper.authors.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="text-sm font-medium text-foreground/80">
                                            {paper.conference}
                                            {paper.award && <span className="text-red-500 ml-2">{paper.award}</span>}
                                        </div>

                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                            {paper.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3 pt-2">
                                            {paper.paper && (
                                                <a href={paper.paper} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                                    <FaFilePdf /> Paper
                                                </a>
                                            )}
                                            {paper.website && (
                                                <a href={paper.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                                    <FaGlobe /> Website
                                                </a>
                                            )}
                                            {paper.code && (
                                                <a href={paper.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                                    <FaGithub /> Code
                                                </a>
                                            )}
                                            {paper.video && (
                                                <a href={paper.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                                    <FaYoutube /> Video
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
							</FadeInItem>
						))}
					</FadeInStagger>
				</FadeIn>

                {/* 2023 Papers */}
                <FadeIn>
					<h2 className="text-2xl font-bold mb-8 tracking-tight">2023</h2>
					<FadeInStagger className="space-y-4">
						{papers_2023.map((paper) => (
							<FadeInItem key={paper.title}>
                                <article className={`flex flex-col md:flex-row gap-6 md:gap-8 p-6 -mx-6 rounded-2xl transition-colors ${
                                    paper.highlighted 
                                        ? "bg-yellow-50/80 dark:bg-yellow-900/20" 
                                        : "hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                                }`}>
                                    <div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                                        <Image
                                            src={paper.image}
                                            alt={paper.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 192px"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-3">
                                        <h3 className="font-semibold text-lg leading-tight text-foreground">
                                            {paper.url ? (
                                                <a href={paper.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                                    {paper.title}
                                                </a>
                                            ) : paper.title}
                                        </h3>
                                        
                                        <div className="text-sm text-neutral-500 dark:text-neutral-400">
                                            {paper.authors.map((author, index) => (
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
                                                    {index < paper.authors.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="text-sm font-medium text-foreground/80">
                                            {paper.conference}
                                            {paper.award && <span className="text-red-500 ml-2">{paper.award}</span>}
                                        </div>

                                        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                            {paper.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3 pt-2">
                                            {paper.paper && (
                                                <a href={paper.paper} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                                    <FaFilePdf /> Paper
                                                </a>
                                            )}
                                            {paper.website && (
                                                <a href={paper.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                                    <FaGlobe /> Website
                                                </a>
                                            )}
                                            {paper.code && (
                                                <a href={paper.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                                    <FaGithub /> Code
                                                </a>
                                            )}
                                            {paper.video && (
                                                <a href={paper.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                                                    <FaYoutube /> Video
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </article>
							</FadeInItem>
						))}
					</FadeInStagger>
				</FadeIn>
			</div>
		</main>
	);
}
