"use client";
import React from "react";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import Image from "next/image";
import { FaGithub, FaPython, FaReact, FaDatabase, FaRobot, FaChartLine, FaBook, FaBrain, FaCloud, FaDocker, FaFlask, FaFilePdf, FaFileAlt, FaUserGraduate, FaCodeBranch, FaSearch, FaEye, FaAward, FaClipboardList, FaLaptopCode, FaRegSmile, FaCar, FaRegFileAlt } from "react-icons/fa";
import { SiTensorflow, SiOpenai, SiTypescript, SiNextdotjs, SiHuggingface, SiLangchain, SiOpencv, SiFastapi, SiFlask, SiDocker, SiKeras, SiPuppeteer, SiStreamlit, SiLatex, SiGithub, SiPython, SiSqlite, SiDvc, SiMlflow, SiAstra, SiUdacity } from "react-icons/si";

const projects = [
	{
		title: "ACME10-HE-RAGApp: RAG with Vector Search, Knowledge Graphs, and LLMs",
		description:
			"A full-stack Retrieval-Augmented Generation (RAG) application developed for HackerEarth that integrates vector search (FAISS), knowledge graphs (DBpedia), and OpenAI’s LLM to generate traceable, context-rich answers from a Wikipedia-based knowledge base.",
		image: "/images/projects/RAG_flowchart.jpg",
		tags: ["LLM", "RAG", "Vector Search", "Knowledge Graph", "Full-Stack", "NLP"],
		extraLinks: [
			{
				label: "Code",
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
	// {
	// 	title: "DDPG: Deep Deterministic Policy Gradient Reimplementation",
	// 	description:
	// 		"A robust, modular, and extensible reimplementation of the DDPG reinforcement learning algorithm (Lillicrap et al., 2015) using TensorFlow 2.x. Built for reproducibility, research comparison, and interactive experimentation with Gym environments.",
	// 	image: "/images/projects/DDPG_padded.png",
	// 	tags: ["Reinforcement Learning", "DDPG", "TensorFlow", "OpenAI Gym"],
	// 	extraLinks: [
	// 		{
	// 			label: "Code",
	// 			url: "https://github.com/ethanvillalovoz/ddpg-paper-reimplementation",
	// 		},
	// 		{
	// 			label: "Original Paper",
	// 			url: "https://arxiv.org/abs/1509.02971",
	// 		}
	// 	],
	// 	date: "July 2025",
	// 	status: "Completed",
	// },
	{
		title: "CodePrep.AI: AI-Powered Coding Interview Prep with LLMs",
		description:
			"An interactive full-stack web application that generates multiple-choice coding challenges using Meta-Llama-3-8B-Instruct. Designed for interview practice, daily challenge tracking, and progress feedback with real-time explanations.",
		image: "/images/projects/codeprep_home.png",
		tags: ["LLM", "AI Interview Prep", "FastAPI", "React", "Hugging Face", "SQLite"],
		extraLinks: [
			{
			label: "Code",
			url: "https://github.com/ethanvillalovoz/codeprep-ai",
			},
		],
		date: "July 2025",
		status: "Completed"
	},
	{
		title: "FaceTrack: Smart Face Recognition Attendance System",
		description:
			"A full-stack web application that automates attendance tracking using facial recognition. Built with FastAPI, React, and SQLite, it supports real-time webcam input and batch image uploads for seamless attendance logging.",
		image: "/images/projects/facetrack.png",
		tags: ["Computer Vision", "OpenCV", "FastAPI", "React", "face_recognition", "SQLite"],
		extraLinks: [
			{
			label: "Code",
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
		image: "/images/projects/resume-template.png",
		tags: ["LaTeX", "Resume", "ATS", "PDF", "Open Source"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/latex-resume-template",
			},
		],
		date: "July 2025",
		status: "Completed"
	},
	{
		title: "IntelliCrawl: Autonomous AI Research Agent for Developer Tools",
		description:
			"An advanced autonomous research agent that uses LLMs and web crawling to analyze and compare developer tools. Built with LangGraph, LangChain, and Firecrawl for scalable, multi-step analysis workflows.",
		image: "/images/projects/intellicrawl.png",
		tags: ["LLM", "LangChain", "LangGraph", "OpenAI", "Firecrawl", "CLI", "AI Agents"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/intellicrawl",
			},
		],
		date: "July 2025",
		status: "Completed"
	},
	{
		title: "SentiSync: Real-Time YouTube Sentiment Analysis with MLOps",
		description:
			"A full MLOps pipeline and Chrome extension for real-time sentiment analysis on YouTube comments, using Flask, MLflow, Docker, and AWS.",
		image: "/images/projects/sentisync.png",
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
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/sentisync",
			},
		],
		date: "July 2025",
		status: "Completed"
	},
	{
		title: "ClearBill.AI: Explaining Medical Bills with AI and RAG",
		description:
			"An AI-powered chatbot that uses Retrieval-Augmented Generation (RAG) with Astra DB, LangChain, and Hugging Face’s Llama-3.1-8B-Instruct to help users understand medical bills with clear, context-aware responses.",
		image: "/images/projects/clearbill.png",
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
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/clearbill-ai",
			},
		],
		date: "July 2025",
		status: "Completed"
	},
	{
		title: "Self-Driving Car: Behavioral Cloning in the Udacity Simulator",
		description:
			"End-to-end CNN (NVIDIA architecture) that predicts steering from front-camera images to autonomously drive the Udacity simulator. Includes balanced/augmented data pipeline, real-time inference via Flask + Socket.IO, and reproducible training.",
		image: "/images/projects/self-driving-udacity.png",
		tags: [
			"Autonomous Driving",
			"Computer Vision",
			"TensorFlow",
			"Keras",
			"CNN",
			"OpenCV",
			"Data Augmentation",
			"Flask",
			"Socket.IO",
			"Python",
			"Udacity Simulator"
		],
		extraLinks: [
			{
			label: "Code",
			url: "https://github.com/ethanvillalovoz/self-driving-car-simulation"
			},
		],
		date: "September 2025",
		status: "Completed"
	},
];

export default function ProjectsPage() {
	const reversedProjects = [...projects].reverse();

	return (
		<main className="max-w-6xl mx-auto px-6 py-24 bg-background text-foreground">
			<header className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-7xl md:text-8xl font-serif text-primary dark:text-white tracking-tighter leading-[0.9]"
				>
					Projects
				</motion.h1>
				<a
					href="https://github.com/ethanvillalovoz"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity mb-2"
				>
					<FaGithub className="mr-2 text-lg" />
					GitHub
				</a>
			</header>
			
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
				className="text-2xl text-neutral-600 dark:text-neutral-300 mb-24 max-w-3xl leading-relaxed font-light"
			>
				A showcase of my personal and technical projects, ranging from reinforcement learning research to full-stack AI applications.
			</motion.p>

			{/* GitHub Activity Widget */}
			<section className="mb-16">
				<h2 className="text-sm font-mono uppercase tracking-widest text-primary-light mb-4">Contribution Activity</h2>
				<div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-card">
					<GitHubCalendar username="ethanvillalovoz" blockSize={12} blockMargin={4} fontSize={14} />
				</div>
			</section>

			{/* Project cards */}
			<section className="mb-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{reversedProjects.map((project) => (
						<motion.article
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="group flex flex-col bg-card rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
						>
							<div className="relative w-full h-48 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
							<div className="flex-1 p-6 flex flex-col">
								<h3 className="font-serif text-xl font-medium text-primary dark:text-white mb-3 leading-tight">
									{project.title}
								</h3>
								<p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed flex-1">
									{project.description}
								</p>
								
								<div className="flex flex-wrap gap-3 mt-auto">
									{project.extraLinks &&
										project.extraLinks.map((link, idx) => (
											<a
												key={link.label + idx}
												href={link.url}
												className="inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
												target="_blank"
												rel="noopener noreferrer"
											>
												{link.label}
											</a>
										))}
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</section>
		</main>
	);
}
