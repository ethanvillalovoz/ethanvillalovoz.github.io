"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGooglescholar } from "react-icons/si";

// Tag to emoji/icon mapping for visual emphasis
// const tagIcons: Record<string, string> = {
// 	"Robotics": "🤖",
// 	"Multi-Robot": "🤝",
// 	"Human-Robot Interaction": "🧑‍🤝‍🤖",
// 	"AI Safety": "🛡️",
// 	"Reinforcement Learning": "🎯",
// 	"Machine Learning": "📈",
// 	"Large Language Models": "💬",
// 	"Computer Vision": "👁️",
// 	// Add more as needed
// };

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
	// Add more papers here as needed
];

// function copyToClipboard(text: string) {
// 	navigator.clipboard.writeText(text);
// }

export default function ResearchPage() {
    return (
		<main className="max-w-5xl mx-auto px-4 py-10 bg-gradient-to-br from-primary/10 via-primary-light/10 to-primary-dark/20 dark:from-primary-dark/30 dark:via-primary/10 dark:to-primary-dark/40">
			<header className="flex items-center justify-between mb-8 bg-gradient-to-r from-primary/30 via-primary-light/20 to-primary-dark/30 dark:from-primary-dark/40 dark:via-primary/20 dark:to-primary-dark/50 rounded-xl shadow-lg px-6 py-4">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-4xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent drop-shadow-lg mb-2 sm:mb-0"
				>
					Research
				</motion.h1>
				<a
						href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-4 py-2 rounded bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white font-semibold shadow-lg hover:brightness-110 transition"
					>
						<SiGooglescholar className="mr-2" />
						Google Scholar
				</a>
			</header>
			<motion.p
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
				className="text-blue-900 dark:text-primary-light mb-8 text-xl font-medium bg-gradient-to-r from-primary/10 via-primary-light/10 to-primary-dark/10 dark:from-primary-dark/20 dark:via-primary/10 dark:to-primary-dark/20 rounded-lg px-4 py-2 shadow"
			>
				A list of my research papers and publications.
			</motion.p>
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/40 dark:border-primary-dark/40 inline-block pb-1 drop-shadow-lg">
					Research Interests
				</h2>
				<p className="text-lg mb-2">
					My research focuses on building aligned world models for robotics, which are frameworks that jointly 
					infer human intent and predict the consequences of actions in complex environments. I am interested in 
					interactive robot learning, human-AI collaboration, and generative models for embodied intelligence. 
					My work aims to develop autonomous systems that resolve ambiguity, learn from minimal human feedback, and 
					plan safely and intelligently through predictive modeling and foundation-model-based representations.
				</p>
			</section>
			{/* Tag Filter */}
			{/* {allTags.length > 0 && (
				<div className="mb-8 flex flex-wrap gap-2">
					<button
						className={`px-3 py-1 rounded-full border text-sm font-medium transition-colors ${
							!selectedTag
								? "bg-primary text-white border-primary"
								: "bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-primary hover:text-white hover:border-primary"
						}`}
						onClick={() => setSelectedTag(null)}
					>
						All
					</button>
					{allTags.map((tag) => (
						<button
							key={tag}
							className={`px-3 py-1 rounded-full border text-sm font-medium transition-colors ${
								selectedTag === tag
									? "bg-primary text-white border-primary"
									: "bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:bg-primary hover:text-white hover:border-primary"
							}`}
							onClick={() => setSelectedTag(tag)}
						>
							<span className="mr-1">{tagIcons[tag] || "🔖"}</span>
							{tag}
						</button>
					))}
				</div>
			)} */}
			{/* Papers List */}
			<section className="mb-12">
				<div className="flex flex-col gap-8">
					{papers.map((paper) => (
						<motion.article
							key={paper.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="bg-gradient-to-br from-neutral-100/80 via-primary-light/30 to-primary-dark/40 dark:from-neutral-900/80 dark:via-primary/20 dark:to-primary-dark/60 rounded-2xl p-0 shadow-xl border border-primary/10 dark:border-primary-dark/20 backdrop-blur-md flex flex-col md:flex-row gap-4 items-start transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl"
						>
							<div className="relative w-40 h-32 rounded-lg overflow-hidden border-2 border-primary/30 dark:border-primary-dark/40 shadow">
								<Image
									src={paper.image}
									alt={paper.title}
									fill
									className="object-cover"
									sizes="160px"
								/>
							</div>
							  <div className="flex-1 p-6">
								<a
									href={paper.pdf}
									target="_blank"
									rel="noopener noreferrer"
									className="font-bold text-lg text-primary dark:text-primary-light hover:underline block drop-shadow"
								>
									{paper.title}
								</a>
								<div className="font-semibold text-neutral-800 dark:text-neutral-200">
									{paper.authors.join(", ")}
								</div>
								<div className="italic text-neutral-700 dark:text-neutral-300 mb-1">
									{paper.conference}
								</div>
								<div className="flex flex-wrap gap-3 mb-3">
									<a
										href={paper.pdf}
										className="inline-flex items-center px-4 py-2 rounded bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white font-semibold shadow-lg hover:brightness-110 transition text-sm"
										target="_blank"
										rel="noopener noreferrer"
									>
										Paper
									</a>
									{/* <a
										href={paper.bibtex}
										className="inline-flex items-center px-4 py-2 rounded bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white font-semibold shadow-lg hover:brightness-110 transition text-sm"
										target="_blank"
										rel="noopener noreferrer"
									>
										BibTeX
									</a> */}
								</div>
								<div className="text-neutral-700 dark:text-neutral-300 text-sm">
									{paper.description}
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</section>
		</main>
	);
}
