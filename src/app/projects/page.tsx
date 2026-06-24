"use client";

import Image from "next/image";
import { FaGithub, FaYoutube, FaGlobe, FaFilePdf, FaUpRightFromSquare } from "react-icons/fa6";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";

const getLinkIcon = (label: string) => {
	const lower = label.toLowerCase();
	if (lower.includes("code") || lower.includes("github")) return <FaGithub />;
	if (lower.includes("report") || lower.includes("paper") || lower.includes("pdf")) return <FaFilePdf />;
	if (lower.includes("video") || lower.includes("youtube")) return <FaYoutube />;
	if (lower.includes("website") || lower.includes("demo") || lower.includes("app")) return <FaGlobe />;
	return <FaUpRightFromSquare />;
};

export default function ProjectsPage() {
	const reversedProjects = [...projects].reverse();

	return (
		<main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
			<div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
				<FadeIn>
					<header className="mb-24">
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
							Projects
						</h1>
						<p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
							A selection of software, AI/ML, and robotics-adjacent projects, spanning RAG systems, applied machine learning, research tooling, and full-stack developer products.
						</p>
					</header>
				</FadeIn>

				<FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{reversedProjects.map((project, projectIdx) => (
						<FadeInItem key={project.title} className="h-full">
							<article className="flex flex-col h-full rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-card overflow-hidden">
								<div className="relative w-full h-48 bg-neutral-200 dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-600">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 50vw"
										loading={projectIdx < 2 ? "eager" : "lazy"}
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
				</FadeInStagger>
			</div>
		</main>
	);
}
