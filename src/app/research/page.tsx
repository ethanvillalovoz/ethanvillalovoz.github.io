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
        <main className="max-w-5xl mx-auto px-4 py-10">
			<header className="flex items-center justify-between mb-4">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent mb-2 sm:mb-0"
				>
					Research
				</motion.h1>
				<a
					href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-4 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition-colors text-base mt-2 sm:mt-0"
				>
					<SiGooglescholar className="mr-2" />
					Google Scholar
				</a>
			</header>
			<motion.p
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
				className="text-blue-900 dark:text-primary-light mb-6 text-lg font-medium"
			>
				A list of my research papers and publications.
			</motion.p>
			<section className="mb-10">
				<h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
					Research Interests
				</h2>
				<p className="text-lg mb-2">
					My research focuses on robotics, machine learning, AI safety, reinforcement
					learning, human-AI collaboration, and large language models. I am
					passionate about building intelligent systems that are robust,
					interpretable, and beneficial to society.
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
                <div className="flex flex-col gap-6">
                    {papers.map((paper) => (
                        <motion.article
							key={paper.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 flex flex-col md:flex-row gap-4 items-start shadow transition-transform duration-200 hover:scale-[1.025] hover:shadow-xl"
						>
							<div className="relative w-40 h-32 rounded-lg overflow-hidden border border-yellow-200 dark:border-yellow-700">
								<Image
									src={paper.image}
									alt={paper.title}
									fill
									className="object-cover"
									sizes="160px"
								/>
							</div>
							<div className="flex-1">
								<a
									href={paper.pdf}
									target="_blank"
									rel="noopener noreferrer"
									className="font-bold text-lg text-primary hover:underline block"
								>
									{paper.title}
								</a>
								<div className="font-semibold text-neutral-800 dark:text-neutral-200">
									{paper.authors.join(", ")}
								</div>
								<div className="italic text-neutral-700 dark:text-neutral-300 mb-1">
									{paper.conference}
								</div>
								<div className="flex flex-wrap gap-4 mb-1">
									<a
										href={paper.pdf}
										className="text-primary underline text-sm"
										target="_blank"
										rel="noopener noreferrer"
									>
										PDF
									</a>
									<a
										href={paper.bibtex}
										className="text-primary underline text-sm"
										target="_blank"
										rel="noopener noreferrer"
									>
										BibTeX
									</a>
									{/* <button
										onClick={() => {
											fetch(paper.bibtex)
												.then((res) => res.text())
												.then((text) => copyToClipboard(text));
										}}
										className="text-primary underline text-sm hover:text-primary-dark focus:outline-none ml-2"
										title="Copy BibTeX to clipboard"
									>
										Copy BibTeX
									</button> */}
								</div>
								<div className="text-neutral-700 dark:text-neutral-300 text-sm">
									{paper.description}
								</div>
								{/* Tags with icons */}
								{/* {paper.tags && (
									<div className="mt-2 flex flex-wrap gap-2">
										{paper.tags.map((tag) => (
											<span
												key={tag}
												className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium"
											>
												<span>{tagIcons[tag] || "🔖"}</span>
												{tag}
											</span>
										))}
									</div>
								)} */}
							</div>
						</motion.article>
                    ))}
                </div>
            </section>
		</main>
	);
}
