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
		<main className="max-w-5xl mx-auto px-6 py-16 bg-background text-foreground">
			<header className="mb-12">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-5xl font-serif font-medium text-primary mb-4"
				>
					Teaching
				</motion.h1>
				<p className="text-xl text-neutral-600 dark:text-neutral-300">
					A list of my teaching experiences.
				</p>
			</header>
			
			<section className="mb-12">
				<h2 className="text-sm font-mono uppercase tracking-widest text-primary-light mb-6">Washington State University</h2>
				<div className="grid gap-6">
					{teachingExperiences.map((exp, idx) => (
						<motion.article
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="p-6 rounded-xl bg-card border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
						>
							<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
								<div className="font-serif text-xl font-medium text-primary">
									{exp.course}
								</div>
								<span className="text-sm font-mono text-primary-light uppercase tracking-wider mt-1 md:mt-0">
									{exp.term}
								</span>
							</div>
							<div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">
								{exp.role}
							</div>
							<div className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
								{exp.description}
							</div>
						</motion.article>
					))}
				</div>
			</section>
		</main>
	);
}
