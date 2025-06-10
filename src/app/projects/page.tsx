"use client";

import { motion } from "framer-motion";

// Tag to emoji/icon mapping for visual emphasis
const tagIcons: Record<string, string> = {
	LLM: "🤖",
	RAG: "📚",
	"Vector Search": "🔎",
	"Knowledge Graph": "🗺️",
	"Full-Stack": "🛠️",
	NLP: "📝",
	"Reinforcement Learning": "🎯",
	DDPG: "🧠",
	TensorFlow: "🔢",
	"OpenAI Gym": "🏋️",
	"Human-AI Interaction": "🧑‍💻",
	"Reward Modeling": "🏆",
	Bandits: "🎰",
	T5: "📘",
	"Text Style Transfer": "🎭",
	Streamlit: "🌐",
};

const projects = [
	{
		title: "ACME10-HE-RAGApp: RAG with Vector Search, Knowledge Graphs, and LLMs",
		description:
			"A full-stack Retrieval-Augmented Generation (RAG) application developed for HackerEarth that integrates vector search (FAISS), knowledge graphs (DBpedia), and OpenAI’s LLM to generate traceable, context-rich answers from a Wikipedia-based knowledge base.",
		image: "/images/projects/RAG_flowchart.jpeg",
		tags: ["LLM", "RAG", "Vector Search", "Knowledge Graph", "Full-Stack", "NLP"],
		features: [
			"Developed for HackerEarth using 10,000+ Wikipedia articles",
			"FAISS-based vector search for semantic retrieval",
			"Knowledge graph context enhancement with DBpedia and SPARQL",
			"OpenAI LLM for coherent and natural language answers",
			"Dockerized deployment with local dev option",
		],
		extraLinks: [
			{
				label: "GitHub",
				url: "https://github.com/mollyiverson/ACME10-HE-RAGApp",
			},
			{
				label: "Final Report",
				url: "https://github.com/mollyiverson/ACME10-HE-RAGApp/blob/main/docs/project-report/RAGApp-FinalReport.pdf",
			},
		],
		date: "May 2025",
		status: "Completed",
	},
	{
		title: "DDPG: Deep Deterministic Policy Gradient (TensorFlow 2.x)",
		description:
			"A clean and modular reimplementation of the DDPG reinforcement learning algorithm (Lillicrap et al., 2015) using modern TensorFlow 2.x APIs, compatible with Gym environments, GPU acceleration, and interactive analysis notebooks.",
		image: "/images/projects/DDPG_padded.png",
		tags: ["Reinforcement Learning", "DDPG", "TensorFlow", "OpenAI Gym"],
		features: [
			"Modular implementation of actor-critic, buffer, and noise components",
			"Compatible with Gym ≥ 0.26, CPU/GPU, and Apple Silicon (M1–M4)",
			"Colab/Binder-ready for easy reproducibility and visualization",
			"Includes logging, learning curves, and training metrics (e.g., Pendulum-v1)",
		],
		extraLinks: [
			{
				label: "GitHub",
				url: "https://github.com/ethanvillalovoz/ddpg-paper-reimplementation",
			},
			{
				label: "Colab Notebook",
				url: "https://colab.research.google.com/github/ethanvillalovoz/ddpg-paper-reimplementation/blob/main/notebooks/DDPG_Analysis.ipynb",
			},
			{
				label: "Original Paper",
				url: "https://arxiv.org/abs/1509.02971",
			},
		],
		date: "May 2025",
		status: "Completed",
	},
	{
		title: "ClarifyBot: An LLM-Guided Clarification System",
		description:
			"An interactive system that improves robot alignment by generating clarification questions in response to ambiguous human feedback. Combines bandit-style reinforcement learning with large language models and real-time feedback visualization.",
		image: "/images/projects/ClarifyBot.png",
		tags: ["LLM", "Reinforcement Learning", "Human-AI Interaction", "Reward Modeling", "Bandits"],
		features: [
			"Bandit-driven adaptive question generation (Epsilon-Greedy and UCB)",
			"Clarification question generation using Mistral-7B-Instruct",
			"Web-based GUI with alignment confidence and real-time analytics",
			"Live integration between Flask UI and Jupyter-based research dashboard",
			"Research-grade logging and misalignment detection with explainable metrics",
		],
		extraLinks: [
			{
				label: "GitHub",
				url: "https://github.com/ethanvillalovoz/clarifybot",
			},
			{
				label: "Colab Notebook",
				url: "https://colab.research.google.com/github/ethanvillalovoz/clarifybot/blob/main/notebooks/demo.ipynb",
			},
			{
				label: "Project Blog",
				url: "https://github.com/ethanvillalovoz/clarifybot/blob/main/blog.md",
			},
		],
		date: "June 2025",
		status: "Completed",
	},
	{
		title: "AI Shakespeare Translator: T5 for Text Style Transfer",
		description:
			"A neural machine translation pipeline using the T5 transformer to convert modern English into Shakespearean English. Emphasizes the critical role of dataset alignment in text style transfer and includes an interactive Streamlit app.",
		image: "/images/projects/shakespeare_translator.png",
		tags: ["LLM", "NLP", "Text Style Transfer", "T5", "Streamlit"],
		features: [
			"Modern → Shakespearean translation with fine-tuned T5 model",
			"Demonstrates data quality impact using tiny vs. noisy datasets",
			"Training, inference, and evaluation pipelines using Hugging Face and PyTorch",
			"Interactive Streamlit web app with example inputs and model behavior",
			"Runs on Apple Silicon, CUDA, or CPU with Colab support"
		],
		extraLinks: [
			{
				label: "GitHub",
				url: "https://github.com/ethanvillalovoz/ai-shakespeare-translator"
			},
			{
				label: "Colab Demo",
				url: "https://colab.research.google.com/github/ethanvillalovoz/ai-shakespeare-translator/blob/main/demo.ipynb"
			},
			{
				label: "Project Blog",
				url: "https://github.com/ethanvillalovoz/ai-shakespeare-translator/blob/main/blog.md"
			}
		],
		date: "June 2025",
		status: "Completed",
	},
];

export default function ProjectsPage() {
	const reversedProjects = [...projects].reverse();

	return (
		<main className="max-w-5xl mx-auto px-4 py-10">
			<header className="flex items-center justify-between mb-4">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
				>
					Projects
				</motion.h1>
				<a
					href="https://github.com/ethanvillalovoz"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark transition"
				>
					View GitHub
				</a>
			</header>
			<motion.p
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
				className="text-blue-900 dark:text-primary-light mb-6 text-lg font-medium"
			>
				A showcase of my personal and technical projects.
			</motion.p>
			{/* Project cards */}
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
					Project Gallery
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{reversedProjects.map((project) => (
						<motion.article
							key={project.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 flex flex-col md:flex-row gap-4 items-start shadow transition-transform duration-200 hover:scale-[1.025] hover:shadow-xl"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-40 h-32 object-cover rounded-lg border border-yellow-200 dark:border-yellow-700"
							/>
							<div className="flex-1">
								<div className="flex flex-wrap items-center gap-2 mb-1">
									<div className="font-bold text-lg text-primary">
										{project.title}
									</div>
									{project.date && (
										<span className="text-xs text-neutral-500 font-semibold ml-2">
											{project.date}
										</span>
									)}
									{project.status && (
										<span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary font-semibold ml-2">
											{project.status}
										</span>
									)}
								</div>
								<div className="flex flex-wrap gap-4 mb-1">
									{project.extraLinks &&
										project.extraLinks.map((link, idx) => (
											<a
												key={link.label + idx}
												href={link.url}
												className="text-primary underline text-sm"
												target="_blank"
												rel="noopener noreferrer"
											>
												{link.label}
											</a>
										))}
								</div>
								<div className="text-neutral-700 dark:text-neutral-300 text-sm mb-2">
									{project.description}
								</div>
								{/* Features */}
								{project.features && (
									<ul className="list-disc list-inside text-xs text-neutral-600 dark:text-neutral-300 mb-2">
										{project.features.map((feature, idx) => (
											<li key={idx}>{feature}</li>
										))}
									</ul>
								)}
								{/* Tags with icons */}
								{project.tags && (
									<div className="mt-2 flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium"
											>
												<span>{tagIcons[tag] || "🔖"}</span>
												{tag}
											</span>
										))}
									</div>
								)}
							</div>
						</motion.article>
					))}
				</div>
			</section>
		</main>
	);
}
