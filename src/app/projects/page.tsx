"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
	"AI Interview Prep": "📈",
	FastAPI: "⚡",
	React: "⚛️",
	"Hugging Face": "🤗",
	SQLite: "💾",
	"Computer Vision": "👁️",
	OpenCV: "📷",
	face_recognition: "🧬",
	LaTeX: "📄",
	Resume: "🧾",
	ATS: "✅",
	PDF: "🖨️",
	"Open Source": "👐",
	LangChain: "🧠",
	LangGraph: "🧩",
	Firecrawl: "🔥",
	CLI: "💻",
	"AI Agents": "🕵️‍♂️",
	OpenAI: "🌐",
	MLOps: "⚙️",
	MLflow: "📊",
	DVC: "🔁",
	Docker: "🐳",
	AWS: "☁️",
	Flask: "🍶",
	"Chrome Extension": "🌐",
	"Sentiment Analysis": "💬",
	LightGBM: "🌲",
	"Next.js": "📦",
	TypeScript: "🔷",
	"Astra DB": "🗄️",
	"Healthcare AI": "🩺",
	"Web Scraping": "🕸️",
	Puppeteer: "🎭",
	Mistral: "🌬️",
	"Llama-3": "🦙"
};


const projects = [
	{
		title: "ACME10-HE-RAGApp: RAG with Vector Search, Knowledge Graphs, and LLMs",
		description:
			"A full-stack Retrieval-Augmented Generation (RAG) application developed for HackerEarth that integrates vector search (FAISS), knowledge graphs (DBpedia), and OpenAI’s LLM to generate traceable, context-rich answers from a Wikipedia-based knowledge base.",
		image: "/images/projects/RAG_flowchart.jpg",
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
		title: "DDPG: Deep Deterministic Policy Gradient Reimplementation in TensorFlow 2.x",
		description:
			"A robust, modular, and extensible reimplementation of the DDPG reinforcement learning algorithm (Lillicrap et al., 2015) using TensorFlow 2.x. Built for reproducibility, research comparison, and interactive experimentation with Gym environments.",
		image: "/images/projects/DDPG_padded.png",
		tags: ["Reinforcement Learning", "DDPG", "TensorFlow", "OpenAI Gym"],
		features: [
			"Modular architecture: separate agent, networks, noise, buffer, wrappers",
			"Hyperparameter sweeps, YAML config system, and TensorBoard logging",
			"Includes full unit test suite and reproducibility controls (seed, version logging)",
			"Supports Gym ≥ 0.26, Apple Silicon acceleration (tensorflow-macos, -metal)"
		],
		extraLinks: [
			{
				label: "GitHub",
				url: "https://github.com/ethanvillalovoz/ddpg-paper-reimplementation",
			},
			{
				label: "Architecture Diagram",
				url: "https://github.com/ethanvillalovoz/ddpg-paper-reimplementation/blob/main/docs/architecture.md",
			},
			{
				label: "Original Paper",
				url: "https://arxiv.org/abs/1509.02971",
			}
		],
		date: "July 2025",
		status: "Completed",
	},
	{
		title: "CodePrep.AI: AI-Powered Coding Interview Prep with LLMs",
		description:
			"An interactive full-stack web application that generates multiple-choice coding challenges using Meta-Llama-3-8B-Instruct. Designed for interview practice, daily challenge tracking, and progress feedback with real-time explanations.",
		image: "/images/projects/codeprep_home.png",
		tags: ["LLM", "AI Interview Prep", "FastAPI", "React", "Hugging Face", "SQLite"],
		features: [
			"Dynamic challenge generation using Meta-Llama-3-8B-Instruct from Hugging Face",
			"Clerk authentication with quota tracking and personalized history view",
			"Full-stack system with React (Vite), FastAPI, and SQLite",
			"Support for challenge explanation, user feedback, and difficulty selection",
		],
		extraLinks: [
			{
			label: "GitHub",
			url: "https://github.com/ethanvillalovoz/codeprep-ai",
			},
			{
			label: "Architecture",
			url: "https://github.com/ethanvillalovoz/codeprep-ai/blob/main/docs/architecture.md",
			},
			// {
			// label: "Live Demo (Optional)",
			// url: "https://your-deployment-url.com" // Replace or remove if not applicable
			// }
		],
		date: "July 2025",
		status: "Completed"
	},
	{
		title: "FaceTrack: Smart Face Recognition Attendance System",
		description:
			"A full-stack web application that automates attendance tracking using facial recognition. Built with FastAPI, React, and SQLite, it supports real-time webcam input and batch image uploads for seamless attendance logging.",
		image: "/images/projects/facetrack.png", // Replace with actual path or upload one
		tags: ["Computer Vision", "OpenCV", "FastAPI", "React", "face_recognition", "SQLite"],
		features: [
			"Real-time face recognition via webcam and batch image uploads",
			"FastAPI backend with REST API endpoints and SQLite integration",
			"React frontend with live feedback, image previews, and attendance viewer",
			"OpenCV and face_recognition for robust face encoding and matching",
			"Interactive database-backed attendance logs with export support"
		],
		extraLinks: [
			{
			label: "GitHub",
			url: "https://github.com/ethanvillalovoz/FaceTrack-Face-Attendance-System",
			},
		],
		date: "July 2025",
		status: "Completed",
	},
	{
		title: "LaTeX Resume Template",
		description:
			"A clean, ATS-friendly, and modern LaTeX resume template built for students and developers applying to technical roles. Features minimalist design, modular macros, and PDF outputs optimized for readability and machine parsing.",
		image: "/images/projects/resume-template.png", // Let me know if you'd like a custom one generated
		tags: ["LaTeX", "Resume", "ATS", "PDF", "Open Source"],
		features: [
			"Modular LaTeX macros for easy customization and consistency across sections",
			"Single-page layout with bolded technologies and quantifiable bullet points",
			"Fully ATS-compatible PDF output using Unicode embedding and semantic structure",
			"Includes Overleaf support, documentation, and contribution guidelines",
			"Open-source under MIT License, ready to fork and adapt"
		],
		extraLinks: [
			{
				label: "GitHub",
				url: "https://github.com/ethanvillalovoz/latex-resume-template",
			},
			{
				label: "Docs",
				url: "https://github.com/ethanvillalovoz/latex-resume-template/blob/main/docs/ABOUT.md",
			}
		],
		date: "July 2025",
		status: "Completed"
	},
	{
		title: "IntelliCrawl: Autonomous AI Research Agent for Developer Tools",
		description:
			"An advanced autonomous research agent that uses LLMs and web crawling to analyze and compare developer tools. Built with LangGraph, LangChain, and Firecrawl for scalable, multi-step analysis workflows.",
		image: "/images/projects/intellicrawl.png", // Let me know if you want me to generate this!
		tags: ["LLM", "LangChain", "LangGraph", "OpenAI", "Firecrawl", "CLI", "AI Agents"],
		features: [
			"Supports batch, single, and interactive CLI modes with customizable output (text, markdown, JSON, CSV)",
			"Uses LangGraph for async, multi-step workflows and LangChain for LLM orchestration",
			"Scrapes and analyzes developer tool websites using Firecrawl and GPT-4o-mini",
			"Implements persistent caching with diskcache and .env-configured API keys",
			"Includes a secondary lightweight agent using Firecrawl MCP and GPT-4.1-nano"
		],
		extraLinks: [
			{
				label: "GitHub",
				url: "https://github.com/ethanvillalovoz/intellicrawl",
			},
			{
				label: "Docs",
				url: "https://github.com/ethanvillalovoz/intellicrawl/blob/main/README.md",
			}
		],
		date: "July 2025",
		status: "Completed"
	},
	{
		title: "SentiSync: Real-Time YouTube Sentiment Analysis with MLOps",
		description:
			"A full MLOps pipeline and Chrome extension for real-time sentiment analysis on YouTube comments, using Flask, MLflow, Docker, and AWS.",
		image: "/images/projects/sentisync.png", // I can generate one for you if needed
		tags: [
			"MLOps",
			"MLflow",
			"DVC",
			"Docker",
			"AWS",
			"Flask",
			"Chrome Extension",
			"Sentiment Analysis",
			"NLP",
			"LightGBM"
		],
		features: [
			"Chrome Extension scrapes YouTube comments and fetches real-time sentiment insights from the backend",
			"End-to-end MLOps workflow using DVC for reproducibility and MLflow for experiment tracking",
			"Flask backend deployed via Docker on AWS EC2, with GitHub Actions-based CI/CD pipeline",
			"Supports sentiment prediction, word cloud generation, and trend visualizations through API endpoints",
			"Includes a suite of Jupyter notebooks for model experimentation, evaluation, and ensemble learning"
		],
		extraLinks: [
			{
				label: "GitHub",
				url: "https://github.com/ethanvillalovoz/sentisync",
			},
			{
				label: "Docs",
				url: "https://github.com/ethanvillalovoz/sentisync/blob/main/README.md",
			}
		],
		date: "July 2025",
		status: "Completed"
	},
	{
		title: "ClearBill.AI: Explaining Medical Bills with AI and RAG",
		description:
			"An AI-powered chatbot that uses Retrieval-Augmented Generation (RAG) with Astra DB, LangChain, and Hugging Face’s Llama-3.1-8B-Instruct to help users understand medical bills with clear, context-aware responses.",
		image: "/images/projects/clearbill.png", // Replace with your actual image path or generate one
		tags: [
			"RAG",
			"LLM",
			"LangChain",
			"Next.js",
			"TypeScript",
			"Vector Search",
			"Astra DB",
			"Healthcare AI",
			"Web Scraping",
			"Puppeteer",
			"Hugging Face",
			"Mistral",
			"Llama-3"
		],
		features: [
			"Built with Next.js and TypeScript, featuring a sleek, responsive chat UI for seamless user interaction",
			"Retrieves answers using semantic search over a vector database populated with scraped healthcare resources",
			"Uses @xenova/transformers for local embedding and LangChain for intelligent text processing",
			"Runs LLM inference with Llama-3.1-8B-Instruct via Hugging Face API with context injection",
			"Includes a custom script to scrape, embed, and load structured healthcare content into Astra DB",
			"CI/CD pipeline using GitHub Actions for automatic linting and builds on push"
		],
		extraLinks: [
			{
				label: "GitHub",
				url: "https://github.com/ethanvillalovoz/clearbill-ai",
			},
			{
				label: "Docs",
				url: "https://github.com/ethanvillalovoz/clearbill-ai/blob/main/README.md",
			}
		],
		date: "July 2025",
		status: "Completed"
	}
	// {
	// 	title: "ClarifyBot: An LLM-Guided Clarification System",
	// 	description:
	// 		"An interactive system that improves robot alignment by generating clarification questions in response to ambiguous human feedback. Combines bandit-style reinforcement learning with large language models and real-time feedback visualization.",
	// 	image: "/images/projects/ClarifyBot.png",
	// 	tags: ["LLM", "Reinforcement Learning", "Human-AI Interaction", "Reward Modeling", "Bandits"],
	// 	features: [
	// 		"Bandit-driven adaptive question generation (Epsilon-Greedy and UCB)",
	// 		"Clarification question generation using Mistral-7B-Instruct",
	// 		"Web-based GUI with alignment confidence and real-time analytics",
	// 		"Live integration between Flask UI and Jupyter-based research dashboard",
	// 		"Research-grade logging and misalignment detection with explainable metrics",
	// 	],
	// 	extraLinks: [
	// 		{
	// 			label: "GitHub",
	// 			url: "https://github.com/ethanvillalovoz/clarifybot",
	// 		},
	// 		{
	// 			label: "Colab Notebook",
	// 			url: "https://colab.research.google.com/github/ethanvillalovoz/clarifybot/blob/main/notebooks/demo.ipynb",
	// 		},
	// 		{
	// 			label: "Project Blog",
	// 			url: "https://github.com/ethanvillalovoz/clarifybot/blob/main/blog.md",
	// 		},
	// 	],
	// 	date: "June 2025",
	// 	status: "Completed",
	// },
	// {
	// 	title: "AI Shakespeare Translator: T5 for Text Style Transfer",
	// 	description:
	// 		"A neural machine translation pipeline using the T5 transformer to convert modern English into Shakespearean English. Emphasizes the critical role of dataset alignment in text style transfer and includes an interactive Streamlit app.",
	// 	image: "/images/projects/shakespeare_translator.png",
	// 	tags: ["LLM", "NLP", "Text Style Transfer", "T5", "Streamlit"],
	// 	features: [
	// 		"Modern → Shakespearean translation with fine-tuned T5 model",
	// 		"Demonstrates data quality impact using tiny vs. noisy datasets",
	// 		"Training, inference, and evaluation pipelines using Hugging Face and PyTorch",
	// 		"Interactive Streamlit web app with example inputs and model behavior",
	// 		"Runs on Apple Silicon, CUDA, or CPU with Colab support"
	// 	],
	// 	extraLinks: [
	// 		{
	// 			label: "GitHub",
	// 			url: "https://github.com/ethanvillalovoz/ai-shakespeare-translator"
	// 		},
	// 		{
	// 			label: "Colab Demo",
	// 			url: "https://colab.research.google.com/github/ethanvillalovoz/ai-shakespeare-translator/blob/main/demo.ipynb"
	// 		},
	// 		{
	// 			label: "Project Blog",
	// 			url: "https://github.com/ethanvillalovoz/ai-shakespeare-translator/blob/main/blog.md"
	// 		}
	// 	],
	// 	date: "June 2025",
	// 	status: "Completed",
	// },
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
							<div className="relative w-40 h-32 rounded-lg overflow-hidden border border-yellow-200 dark:border-yellow-700">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover"
									sizes="160px"
								/>
							</div>
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
