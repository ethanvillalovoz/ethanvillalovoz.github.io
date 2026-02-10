"use client";

import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const teachingExperiences = [
	{
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 315: Introduction to Data Mining",
		institution: "Washington State University",
		term: "Spring 2025",
		description:
			"The process of automatically extracting valid, useful, and previously unknown information from large repositories.",
	},
	{
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 350: Design and Analysis of Algorithms",
		institution: "Washington State University",
		term: "Fall 2024",
		description:
			"Analysis of data structures and algorithms; computational complexity and design of efficient data-handling procedures.",
	},
  {
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 355: Programming Language Design",
		institution: "Washington State University",
		term: "Fall 2023",
		description:
			"Design concepts of high-level programming languages; survey of existing languages, experience using some languages.",
	},
	{
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 121: Program Design and Development C/C++",
		institution: "Washington State University",
		term: "Fall 2022",
		description:
			"Formulation of problems and top-down design of programs in a modern structured language (C/C++) for their solution on a digital computer.",
	},
];

export default function TeachingPage() {
	return (
		<main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
			<div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
				<FadeIn>
					<header className="mb-24">
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
							Teaching
						</h1>
						<p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
							My teaching experience.
						</p>
					</header>
				</FadeIn>
			
				<FadeIn>
					<h2 className="text-2xl font-bold mb-8 tracking-tight">Washington State University</h2>
					<FadeInStagger className="space-y-4">
						{teachingExperiences.map((exp, idx) => (
							<FadeInItem key={idx}>
								<article className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 p-6 -mx-6 rounded-2xl bg-card border border-neutral-300 dark:border-neutral-600 transition-colors">
									<div className="flex-shrink-0 md:w-32 pt-1">
										<span className="inline-block px-2 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 rounded-full border border-neutral-200 dark:border-neutral-700">
											{exp.term}
										</span>
									</div>
									<div className="flex-1">
										<h3 className="font-semibold text-lg text-foreground mb-1">
											{exp.course}
										</h3>
										<div className="text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-3">
											{exp.role}
										</div>
										<p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
											{exp.description}
										</p>
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
