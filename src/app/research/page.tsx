"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGooglescholar } from "react-icons/si";

const papers = [
	{
		title: "Social Triangles and Aggressive Lines: Multi-Robot Formations Impact Navigation and Approach",
		authors: [
			"Alexandra Bacula",
			"Ethan Villalovoz",
			"Deanna Flynn",
			"Ankur Mehta",
			"Heather Knight",
		],
		conference: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), 2023",
		pdf: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.pdf",
		bibtex: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.bib",
		image: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/STAL_Multi_Robot_Formations.jpeg",
		description:
			"Investigates how different multi-robot formations affect navigation and approach behaviors in social environments. Demonstrates the impact of formation geometry on human-robot interaction and navigation efficiency.",
		tags: ["Robotics", "Multi-Robot", "Human-Robot Interaction"],
	},
];

export default function ResearchPage() {
    return (
		<main className="max-w-5xl mx-auto px-6 py-16 bg-background text-foreground">
			<header className="flex items-center justify-between mb-12">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-5xl font-serif font-medium text-primary dark:text-white"
				>
					Research
				</motion.h1>
				<a
						href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm"
					>
						<SiGooglescholar className="mr-2" />
						Google Scholar
				</a>
			</header>
			
			<section className="mb-16">
				<h2 className="text-sm font-mono uppercase tracking-widest text-primary-light mb-4">Interests</h2>
				<p className="text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">
					My research focuses on building aligned world models for robotics, which are frameworks that jointly 
					infer human intent and predict the consequences of actions in complex environments. I am interested in 
					interactive robot learning, human-AI collaboration, and generative models for embodied intelligence.
				</p>
			</section>

			<section className="mb-12">
				<h2 className="text-sm font-mono uppercase tracking-widest text-primary-light mb-6">Publications</h2>
				<div className="flex flex-col gap-8">
					{papers.map((paper) => (
						<motion.article
							key={paper.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="flex flex-col md:flex-row gap-8 p-6 rounded-xl bg-card border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
						>
							<div className="relative w-full md:w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900">
								<Image
									src={paper.image}
									alt={paper.title}
									fill
									className="object-cover"
									sizes="200px"
								/>
							</div>
							  <div className="flex-1">
								<a
									href={paper.pdf}
									target="_blank"
									rel="noopener noreferrer"
									className="font-serif text-xl font-medium text-primary dark:text-white hover:text-primary-light transition-colors block mb-2"
								>
									{paper.title}
								</a>
								<div className="text-neutral-600 dark:text-neutral-400 mb-1">
									{paper.authors.join(", ")}
								</div>
								<div className="text-sm font-medium text-primary-light mb-4">
									{paper.conference}
								</div>
								<p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed">
									{paper.description}
								</p>
								<div className="flex gap-3">
									<a
										href={paper.pdf}
										className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
										target="_blank"
										rel="noopener noreferrer"
									>
										PDF
									</a>
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</section>
		</main>
	);
}
