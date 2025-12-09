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
	// Add more experiences as you gain them!
];

export default function TeachingPage() {
	return (
		<main className="max-w-5xl mx-auto px-4 py-10 bg-gradient-to-br from-primary/10 via-primary-light/10 to-primary-dark/20 dark:from-primary-dark/30 dark:via-primary/10 dark:to-primary-dark/40">
			<header className="flex items-center justify-between mb-8 bg-gradient-to-r from-primary/30 via-primary-light/20 to-primary-dark/30 dark:from-primary-dark/40 dark:via-primary/20 dark:to-primary-dark/50 rounded-xl shadow-lg px-6 py-4">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-4xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent drop-shadow-lg"
				>
					Teaching
				</motion.h1>
			</header>
			<motion.p
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
				className="text-blue-900 dark:text-primary-light mb-8 text-xl font-medium bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary-dark/10 dark:from-primary-dark/20 dark:via-primary/10 dark:to-primary-dark/20 rounded-lg px-4 py-2 shadow"
			>
				A list of my teaching experiences.
			</motion.p>
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/40 dark:border-primary-dark/40 inline-block pb-1 drop-shadow-lg">
					Washington State University
				</h2>
				<div className="flex flex-col gap-8">
					{teachingExperiences.map((exp, idx) => (
						<motion.article
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="bg-gradient-to-br from-neutral-100/80 via-primary-light/30 to-primary-dark/40 dark:from-neutral-900/80 dark:via-primary/20 dark:to-primary-dark/60 rounded-2xl p-0 shadow-xl border border-primary/10 dark:border-primary-dark/20 backdrop-blur-md flex flex-col md:flex-row gap-4 items-start transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl"
						>
							  <div className="flex-1 p-6">
								<div className="font-semibold text-neutral-800 dark:text-neutral-200">
									{exp.course}
								</div>
								<div className="flex flex-wrap items-center gap-2 mb-1">
									<div className="font-bold text-lg text-red-600 dark:text-red-400 drop-shadow">
										{exp.role}
									</div>
									<span className="text-xs text-neutral-500 font-semibold ml-2">
										{exp.term}
									</span>
								</div>
								<div className="text-neutral-700 dark:text-neutral-300 text-sm">
									{exp.description}
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</section>
			{/* Optionally add a Teaching Philosophy or downloadable statement here */}
		</main>
	);
}
