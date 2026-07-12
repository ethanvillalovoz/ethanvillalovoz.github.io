import { promptSearchEssay } from "@/data/writing";

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
	imageVariant?: "prompt-stack";
	openInNewTab?: boolean;
	unoptimized?: boolean;
}

export const workItems: WorkItem[] = [
	{
		title: promptSearchEssay.title,
		href: promptSearchEssay.href,
		date: promptSearchEssay.date,
		kind: "Writing",
		description: promptSearchEssay.summary,
		image:
			"/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-prompt-comparison.png",
		imageAlt: "Original code-generation prompt before BODE-GEN optimization",
		imageVariant: "prompt-stack",
		openInNewTab: false,
	},
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
		image:
			"/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-results.png",
		imageAlt:
			"BODE-GEN correctness results compared with initial prompts, chain-of-thought, and OPRO",
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
		title: "IntelliCrawl",
		href: "https://github.com/ethanvillalovoz/intellicrawl",
		date: "Jul 2025",
		kind: "Project",
		description:
			"A source-backed research agent that discovers, profiles, and compares developer tools while preserving field-level evidence and explicit unknowns.",
		image: "/images/projects/intellicrawl-preview.webp",
		imageAlt: "Animated IntelliCrawl pipeline moving from source discovery to evidence-backed comparison",
		imageFit: "contain",
		unoptimized: true,
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
		title: "Knowledge Graph RAG Assistant",
		href: "/rag/",
		date: "May 2025",
		kind: "Project",
		description:
			"For this team-built knowledge-graph RAG assistant, I generated and indexed 5GB+ of Wikipedia embeddings and refined FAISS retrieval toward a 10,000+ article knowledge base.",
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
