export type WorkKind = "Project" | "Research" | "Writing";

export interface WorkItem {
	title: string;
	href: string;
	date: string;
	kind: WorkKind;
	description: string;
	image: string;
	imageAlt: string;
	imageFit?: "cover" | "contain";
}

export const workItems: WorkItem[] = [
	{
		title: "ScenarioLens",
		href: "/scenariolens/",
		date: "Jun 2026",
		kind: "Project",
		description:
			"An autonomy-evaluation tool for ranking and inspecting long-tail driving scenarios with interpretable risk and baseline-failure metrics.",
		image: "/scenariolens/assets/scenariolens-explorer.png",
		imageAlt: "ScenarioLens interface ranking long-tail autonomous-driving scenarios",
	},
	{
		title: "MetricDrive",
		href: "/metricdrive/",
		date: "Jun 2026",
		kind: "Research",
		description:
			"A research preview for studying metric-aligned trajectory choices, preference pairs, hard negatives, and VLM-style planning rows.",
		image: "/metricdrive/assets/metricdrive-explorer.svg",
		imageAlt: "MetricDrive interface comparing autonomous-driving trajectory choices",
		imageFit: "contain",
	},
	{
		title: "BODE-GEN",
		href: "https://arxiv.org/abs/2512.15076",
		date: "Dec 2025",
		kind: "Research",
		description:
			"Bayesian prompt optimization for test-driven code generation, evaluated across HumanEval+ tasks and multiple code models.",
		image: "/data/research/2025_WSU_Bayesian_Prompt_Optimization/ICSE_BO_figure.png",
		imageAlt: "BODE-GEN Bayesian prompt optimization method diagram",
		imageFit: "contain",
	},
	{
		title: "Self-Driving Car",
		href: "https://github.com/ethanvillalovoz/self-driving-car-simulation",
		date: "Sep 2025",
		kind: "Project",
		description:
			"An end-to-end behavioral-cloning system that predicts steering from camera images and drives in the Udacity simulator.",
		image: "/images/projects/self_driving-thumb.jpg",
		imageAlt: "Self-driving car simulator displaying a road from the vehicle camera",
	},
	{
		title: "DDPG Reimplementation",
		href: "https://github.com/ethanvillalovoz/ddpg-reimplementation",
		date: "Jul 2025",
		kind: "Project",
		description:
			"A TensorFlow 2 reimplementation of Deep Deterministic Policy Gradient for reproducible continuous-control experiments.",
		image: "/images/projects/ddpg.png",
		imageAlt: "Training results from the DDPG reinforcement-learning implementation",
		imageFit: "contain",
	},
	{
		title: "IntelliCrawl",
		href: "https://github.com/ethanvillalovoz/intellicrawl",
		date: "Jul 2025",
		kind: "Project",
		description:
			"An autonomous research agent that orchestrates web crawling, synthesis, and structured comparisons of developer tools.",
		image: "/images/projects/intellicrawl-thumb.jpg",
		imageAlt: "IntelliCrawl autonomous research agent interface",
	},
	{
		title: "SentiSync",
		href: "https://github.com/ethanvillalovoz/sentisync",
		date: "Jul 2025",
		kind: "Project",
		description:
			"A YouTube sentiment-analysis extension backed by an MLflow, DVC, Docker, and AWS machine-learning workflow.",
		image: "/images/projects/sentisync-thumb.jpg",
		imageAlt: "SentiSync dashboard showing sentiment analysis for YouTube comments",
	},
	{
		title: "CodePrep.AI",
		href: "https://github.com/ethanvillalovoz/codeprep-ai",
		date: "Jul 2025",
		kind: "Project",
		description:
			"A full-stack coding practice platform that generates challenges and real-time explanations with an open language model.",
		image: "/images/projects/codeprep.png",
		imageAlt: "CodePrep.AI coding interview practice interface",
	},
	{
		title: "LaTeX Resume Template",
		href: "https://github.com/ethanvillalovoz/latex-resume-template",
		date: "Jul 2025",
		kind: "Project",
		description:
			"An ATS-friendly resume and academic CV template with reusable LaTeX macros and automated build validation.",
		image: "/images/projects/latex-thumb.jpg",
		imageAlt: "Preview of the LaTeX resume and academic CV template",
		imageFit: "contain",
	},
	{
		title: "Knowledge Graph RAG Assistant",
		href: "/rag/",
		date: "May 2025",
		kind: "Project",
		description:
			"A retrieval assistant combining vector search and DBpedia knowledge-graph context in a full-stack conversational interface.",
		image: "/images/projects/rag.jpg",
		imageAlt: "Knowledge Graph RAG Assistant chat interface",
	},
	{
		title: "Social Triangles",
		href: "https://ieeexplore.ieee.org/abstract/document/10342372",
		date: "Oct 2023",
		kind: "Research",
		description:
			"An IROS study of how multi-robot formation geometry shapes human navigation and approach behavior.",
		image:
			"/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/STAL_Multi_Robot_Formations.png",
		imageAlt: "Diagram of social-triangle and aggressive-line multi-robot formations",
		imageFit: "contain",
	},
];
