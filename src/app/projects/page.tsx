"use client";

import Image from "next/image";
import { FaGithub, FaYoutube, FaGlobe, FaFilePdf, FaUpRightFromSquare } from "react-icons/fa6";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/FadeIn";

const projects = [
	{
		title: "DDPG: Deep Deterministic Policy Gradient Reimplementation",
		description:
			"A robust, modular, and extensible reimplementation of the DDPG reinforcement learning algorithm (Lillicrap et al., 2015) using TensorFlow 2.x. Built for reproducibility, research comparison, and interactive experimentation with Gym environments.",
		image: "/images/projects/ddpg.png",
		tags: ["Reinforcement Learning", "DDPG", "TensorFlow", "OpenAI Gym"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/ddpg-paper-reimplementation",
			},
		],
		date: "July 2025",
		status: "Completed",
	},
	{
		title: "CodePrep.AI: AI-Powered Coding Interview Prep with LLMs",
		description:
			"An interactive full-stack web application that generates multiple-choice coding challenges using Meta-Llama-3-8B-Instruct. Designed for interview practice, daily challenge tracking, and progress feedback with real-time explanations.",
		image: "/images/projects/codeprep.png",
		tags: ["React", "FastAPI", "LLMs", "Hugging Face"],
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
		tags: ["Computer Vision", "Face Recognition", "React", "FastAPI"],
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
		image: "/images/projects/latex.png",
		tags: ["LaTeX", "Resume Template", "Overleaf", "CI/CD"],
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
		tags: ["AI Agents", "LangChain", "OpenAI", "Web Scraping"],
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
		tags: ["MLOps", "Sentiment Analysis", "Docker", "AWS"],
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
		tags: ["RAG", "LLMs", "Next.js", "Vector Databases"],
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
		image: "/images/projects/self_driving.png",
		tags: ["Computer Vision", "Deep Learning", "TensorFlow", "Autonomous Driving"],
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

const getLinkIcon = (label: string) => {
	const lower = label.toLowerCase();
	if (lower.includes("code") || lower.includes("github")) return <FaGithub />;
	if (lower.includes("report") || lower.includes("paper") || lower.includes("pdf")) return <FaFilePdf />;
	if (lower.includes("video") || lower.includes("youtube")) return <FaYoutube />;
	if (lower.includes("website") || lower.includes("demo") || lower.includes("app")) return <FaGlobe />;
	return <FaUpRightFromSquare />;
};

export default function ProjectsPage() {
	const reversedProjects = [...projects].reverse();

	return (
		<main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
			<div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
				<FadeIn>
					<header className="mb-24">
						<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
							Projects
						</h1>
						<p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
							A showcase of my personal and technical projects, ranging from reinforcement learning research to full-stack AI applications.
						</p>
					</header>
				</FadeIn>

				<FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{reversedProjects.map((project) => (
						<FadeInItem key={project.title} className="h-full">
							<article className="flex flex-col h-full rounded-2xl border border-neutral-300 dark:border-neutral-600 bg-card overflow-hidden">
								<div className="relative w-full h-48 bg-neutral-200 dark:bg-neutral-900 border-b border-neutral-300 dark:border-neutral-600">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</div>
								
								<div className="flex-1 p-6 flex flex-col">
									<h3 className="font-semibold text-lg leading-tight text-foreground mb-3">
										{project.title}
									</h3>
									<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
										{project.description}
									</p>

									<div className="mt-auto">
										<div className="flex flex-wrap gap-2 mb-4">
											{project.tags.map((tag) => (
												<span
													key={tag}
													className="px-2 py-0.5 text-xs font-medium bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full border border-neutral-200 dark:border-neutral-700"
												>
													{tag}
												</span>
											))}
										</div>

										<div className="flex flex-wrap gap-3">
											{project.extraLinks &&
												project.extraLinks.map((link, idx) => (
													<a
														key={link.label + idx}
														href={link.url}
														className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-200 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors border border-neutral-200 dark:border-neutral-700"
														target="_blank"
														rel="noopener noreferrer"
													>
														{getLinkIcon(link.label)}
														{link.label}
													</a>
												))}
										</div>
									</div>
								</div>
							</article>
						</FadeInItem>
					))}
				</FadeInStagger>
			</div>
		</main>
	);
}
