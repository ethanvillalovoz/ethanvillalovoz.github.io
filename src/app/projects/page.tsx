"use client";

import { motion } from "framer-motion";

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
			// {
			// 	label: "Demo",
			// 	url: "https://acme10-he-ragapp-demo.vercel.app/",
			// },
		],
		date: "2025",
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
      "Includes logging, learning curves, and training metrics (e.g., Pendulum-v1)"
	  ],
		extraLinks: [
			{
			label: "GitHub",
			url: "https://github.com/ethanvillalovoz/ddpg-paper-reimplementation"
      },
      {
        label: "Colab Notebook",
        url: "https://colab.research.google.com/github/ethanvillalovoz/ddpg-paper-reimplementation/blob/main/notebooks/DDPG_Analysis.ipynb"
      },
      {
        label: "Original Paper",
        url: "https://arxiv.org/abs/1509.02971"
      }
		],
		date: "2025",
		status: "Completed",
	},
	{
		title: "OLMo Fine-Tuning on Resume Data",
		description:
			"Demonstrates end-to-end fine-tuning of the open-source OLMo LLM on a structured prompt-response dataset derived from Kaggle resume data, including training, HuggingFace conversion, and evaluation.",
		image: "https://allenai.org/olmo/olmo-7b-animation.gif",
		tags: ["LLM", "Fine-Tuning", "PyTorch", "NLP", "Open Source"],
		features: [
      "Processed and cleaned resume data into prompt-response format",
      "Implemented custom PyTorch dataset for supervised LLM training",
      "Fine-tuned OLMo using AI2's training framework",
      "Converted and evaluated model in HuggingFace Transformers format"
	  ],
		extraLinks: [
			{
				label: "GitHub (OLMo fork)",
				url: "https://github.com/ethanvillalovoz/olmo-resume-finetune",
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
		date: "2025",
		status: "Completed",
	},
	{
		title: "DeepFace One-Shot Facial Recognition",
		description:
			"Real-time facial verification app based on a reimplementation of Koch et al.'s Siamese network for one-shot learning, optimized for Apple Silicon (M1–M4) using TensorFlow Metal and Kivy.",
		image: "",
		tags: ["Computer Vision", "TensorFlow", "One-Shot Learning", "Siamese Network"],
		features: [
		"Rebuilt Siamese network with L1 distance and sigmoid classifier for one-shot face matching",
		"Adapted facial verification to real-time use via webcam and LFW dataset",
		"Integrated OpenCV and Kivy for a cross-platform face verification GUI",
		"Optimized training and inference using TensorFlow Metal on M1/M2/M4 Mac hardware",
		"Achieved perfect training accuracy and smooth live inference on Apple Silicon"
		],
		extraLinks: [
			{
			label: "GitHub Repo",
			url: "https://github.com/ethanvillalovoz/deepface-oneshot-paper-reimplementation",
			},
			{
				label: "Original Paper (Koch et al., 2015)",
				url: "https://www.cs.cmu.edu/~rsalakhu/papers/oneshot1.pdf",
			},
			{
				label: "LFW Dataset",
				url: "https://www.kaggle.com/datasets/jessicali9530/lfw-dataset",
			}
		],
		date: "2025",
		status: "Completed",
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
