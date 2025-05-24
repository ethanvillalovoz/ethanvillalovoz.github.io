"use client";

import { motion } from "framer-motion";

const projects = [
	{
		title: "ACME10-HE-RAGApp: Hybrid-Expert RAG for Academic Paper QA",
		description:
			"A hybrid-expert Retrieval-Augmented Generation (RAG) app for answering questions about academic papers. Combines LLMs with symbolic tools and custom retrievers for robust, interpretable QA.",
		image: "/images/ai_robot_icon.jpeg",
		tags: ["LLM", "RAG", "Academic QA", "Open Source"],
		features: [
			"Hybrid LLM + symbolic tool pipeline",
			"Custom retriever for academic PDFs",
			"Interpretable answer traces",
			"Open source, extensible design",
		],
		extraLinks: [
			{
				label: "GitHub",
				url: "https://github.com/ethanvillalovoz/ACME10-HE-RAGApp",
			},
			{
				label: "Demo",
				url: "https://acme10-he-ragapp-demo.vercel.app/",
			},
		],
		date: "2024",
		status: "Maintained",
	},
	{
		title: "DDPG Paper Reimplementation (PyTorch, Gymnasium)",
		description:
			"A faithful PyTorch reimplementation of Deep Deterministic Policy Gradient (DDPG) for continuous control, with full Gymnasium integration, reproducibility, and experiment tracking.",
		image: "/images/ai_robot_icon.jpeg",
		tags: ["Reinforcement Learning", "PyTorch", "DDPG", "Open Source"],
		features: [
			"Reproducible results",
			"Gymnasium integration",
			"Experiment tracking",
			"Colab-ready",
		],
		extraLinks: [
			{
				label: "GitHub",
				url: "https://github.com/ethanvillalovoz/ddpg-paper-reimplementation",
			},
			{
				label: "Colab",
				url: "https://colab.research.google.com/drive/1Qw6Qw3Qw6Qw3Qw6Qw3Qw6Qw6Qw6Qw6Qw",
			},
		],
		date: "2023",
		status: "Maintained",
	},
	{
		title: "OLMo Fine-Tuning on Resume Data",
		description:
			"End-to-end fine-tuning of the open-source OLMo LLM on a custom prompt-response dataset derived from Kaggle resume data. Includes data processing, custom PyTorch dataset, training config, HuggingFace conversion, and evaluation scripts.",
		image: "https://allenai.org/olmo/olmo-7b-animation.gif",
		tags: ["LLM", "Fine-Tuning", "PyTorch", "NLP", "Open Source"],
		features: [
			"Custom data pipeline",
			"HuggingFace model conversion",
			"Evaluation scripts included",
			"Open source",
		],
		extraLinks: [
			{
				label: "GitHub (OLMo fork)",
				url: "https://github.com/ethanvillalovoz/OLMo",
			},
			{
				label: "Original OLMo",
				url: "https://github.com/allenai/OLMo",
			},
			{
				label: "Kaggle Resume Data",
				url: "https://www.kaggle.com/datasets/gauravduttakiit/resume-dataset",
			},
			{
				label: "arXiv Paper",
				url: "https://arxiv.org/abs/2501.00656",
			},
			{
				label: "HuggingFace Model",
				url: "https://huggingface.co/allenai/OLMo-2-0425-1B",
			},
		],
		date: "2024",
		status: "In Progress",
	},
];

export default function ProjectsPage() {
	// Remove tag filter logic
	// Reverse the order of projects for display
	const reversedProjects = [...projects].reverse();

	return (
		<main className="max-w-5xl mx-auto px-4 py-10">
			<div className="flex items-center justify-between mb-4">
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
			</div>
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
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{reversedProjects.map((project) => (
						<motion.article
							key={project.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 flex flex-col md:flex-row gap-4 items-start shadow"
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
								{/* Tags */}
								{project.tags && (
									<div className="mt-2 flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium"
											>
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
