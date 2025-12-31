"use client";

import { motion } from "framer-motion";

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
		<main className="max-w-5xl mx-auto px-6 py-24 bg-background text-foreground">
			<header className="mb-24">
				<h1
					// initial={{ opacity: 0, y: 20 }}
					// animate={{ opacity: 1, y: 0 }}
					// transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-7xl md:text-8xl font-serif text-primary dark:text-white mb-8 tracking-tighter leading-[0.9]"
				>
					Teaching
				</h1>
				<p className="text-2xl text-neutral-600 dark:text-neutral-300 font-light">
					A list of my teaching experiences.
				</p>
			</header>
			
			<section className="mb-12">
				<h2 className="text-sm font-mono uppercase tracking-widest text-primary-light mb-12">Washington State University</h2>
				<div className="space-y-12">
					{teachingExperiences.map((exp, idx) => (
						<article
							key={idx}
							// initial={{ opacity: 0, y: 20 }}
							// whileInView={{ opacity: 1, y: 0 }}
							// viewport={{ once: true }}
							// transition={{ duration: 0.5, ease: "easeOut" }}
							className="group flex flex-col md:flex-row md:items-start gap-6 md:gap-12 border-t border-neutral-200 dark:border-neutral-800 pt-8"
						>
							<div className="flex-shrink-0 md:w-48 pt-1">
								<div className="text-sm font-mono text-neutral-500 uppercase tracking-widest">{exp.term}</div>
							</div>
							<div className="flex-1">
								<div className="font-serif text-2xl text-primary dark:text-white mb-2">
									{exp.course}
								</div>
								<div className="text-lg font-medium text-neutral-500 dark:text-neutral-400 mb-4">
									{exp.role}
								</div>
								<div className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
									{exp.description}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
