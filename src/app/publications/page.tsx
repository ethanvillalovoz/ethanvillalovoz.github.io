"use client";

import Image from "next/image";
import { FaGithub, FaFilePdf, FaGlobe, FaYoutube } from "react-icons/fa6";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { papers2023, preprints } from "@/data/publications";

export default function ResearchPage() {
    return (
		<main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
			<div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
				<FadeIn>
					<header className="mb-24">
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
							Publications
						</h1>
						<p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                            My research spans machine learning for code generation and human-centered robotics, with a focus on systems that learn from feedback, evaluation, and interaction.
						</p>
					</header>
				</FadeIn>
                
                {/* Legend */}
                <FadeIn className="mb-12">
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-b border-neutral-300 dark:border-neutral-600 pb-4">
                        <div className="flex gap-4">
                            <span>* Equal Contribution</span>
                            <span>† Equal Advising</span>
                        </div>
                        <div className="hidden sm:block w-px h-4 bg-neutral-300 dark:bg-neutral-600" />
                        <div>
                            My name is emphasized in each author list.
                        </div>
                    </div>
                </FadeIn>

				{/* Pre-Prints */}
				<FadeIn className="mb-24">
					<h2 className="text-2xl font-bold mb-8 tracking-tight">Preprints</h2>
					<FadeInStagger className="space-y-8">
						{preprints.map((paper) => (
							<FadeInItem key={paper.title}>
                                <article className={`w-full flex flex-col md:flex-row gap-6 md:gap-8 transition-colors ${
                                    paper.highlighted 
                                        ? "p-6 rounded-2xl bg-yellow-50/80 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800" 
                                        : ""
                                }`}>
                                    <div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600">
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
                                        
                                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
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

                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {paper.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3 pt-2">
                                            {paper.paper && (
                                                <a href={paper.paper} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
                                                    <FaFilePdf /> Paper
                                                </a>
                                            )}
                                            {paper.website && (
                                                <a href={paper.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
                                                    <FaGlobe /> Website
                                                </a>
                                            )}
                                            {paper.code && (
                                                <a href={paper.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
                                                    <FaGithub /> Code
                                                </a>
                                            )}
                                            {paper.video && (
                                                <a href={paper.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
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
					<FadeInStagger className="space-y-8">
						{papers2023.map((paper) => (
							<FadeInItem key={paper.title}>
                                <article className={`w-full flex flex-col md:flex-row gap-6 md:gap-8 transition-colors ${
                                    paper.highlighted 
                                        ? "p-6 rounded-2xl bg-yellow-50/80 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800" 
                                        : ""
                                }`}>
                                    <div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600">
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
                                        
                                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
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

                                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                            {paper.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3 pt-2">
                                            {paper.paper && (
                                                <a href={paper.paper} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
                                                    <FaFilePdf /> Paper
                                                </a>
                                            )}
                                            {paper.website && (
                                                <a href={paper.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
                                                    <FaGlobe /> Website
                                                </a>
                                            )}
                                            {paper.code && (
                                                <a href={paper.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
                                                    <FaGithub /> Code
                                                </a>
                                            )}
                                            {paper.video && (
                                                <a href={paper.video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700">
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
