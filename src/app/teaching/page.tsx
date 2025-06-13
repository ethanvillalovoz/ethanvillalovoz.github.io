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
		<main className="max-w-5xl mx-auto px-4 py-10">
			<header className="flex items-center justify-between mb-8">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
				>
					Teaching
				</motion.h1>
			</header>
			<motion.p
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
				className="text-blue-900 dark:text-primary-light mb-6 text-lg font-medium"
			>
				A list of my teaching experiences.
			</motion.p>
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
					Washington State University
				</h2>
				<div className="flex flex-col gap-6">
					{teachingExperiences.map((exp, idx) => (
						<motion.article
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 flex flex-col md:flex-row gap-4 items-start shadow transition-transform duration-200 hover:scale-[1.025] hover:shadow-xl"
						>
							<div className="flex-1">
								<div className="font-semibold text-neutral-800 dark:text-neutral-200">
									{exp.course}
								</div>
								<div className="flex flex-wrap items-center gap-2 mb-1">
									<div className="font-bold text-lg text-primary">
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
