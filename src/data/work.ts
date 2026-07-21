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
	video?: string;
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
	},
	{
		title: "BODE-GEN",
		href: "https://arxiv.org/abs/2512.15076",
		date: "Dec 2025",
		kind: "Research",
		description:
			"Bayesian prompt optimization for test-driven code generation, evaluated across HumanEval+ tasks and multiple code models.",
		image: "/images/projects/bodegen-results-thumbnail.webp",
		imageAlt:
			"BODE-GEN correctness results compared with initial prompts, chain-of-thought, and OPRO",
	},
	{
		title: "Self-Driving Car",
		href: "https://github.com/ethanvillalovoz/self-driving-car-simulation",
		date: "Sep 2025",
		kind: "Project",
		description:
			"An end-to-end behavioral-cloning system that predicts steering from camera images and drives in the Udacity simulator.",
		image: "/images/projects/self-driving-poster.webp",
		imageAlt:
			"Offline replay of recorded Udacity simulator frames, actual model input, and predicted steering",
		video: "/images/projects/self-driving-demo.mp4",
	},
	{
		title: "IntelliCrawl",
		href: "https://github.com/ethanvillalovoz/intellicrawl",
		date: "Jul 2025",
		kind: "Project",
		description:
			"A source-backed research agent that discovers, profiles, and compares developer tools while preserving field-level evidence and explicit unknowns.",
		image: "/images/projects/intellicrawl-poster.webp",
		imageAlt:
			"IntelliCrawl running a source-backed comparison inside macOS Terminal",
		video: "/images/projects/intellicrawl-demo.mp4",
	},
	{
		title: "CodePrep",
		href: "https://github.com/ethanvillalovoz/codeprep",
		date: "Jul 2025",
		kind: "Project",
		description:
			"An interview-practice workspace that reveals rationale after answer commitment and validates live four-option challenges before an atomic challenge-and-quota write.",
		image: "/images/projects/codeprep-decision-flow.svg",
		imageAlt:
			"CodePrep committed-answer interface beside deterministic demo and authenticated live execution rails",
		imageFit: "contain",
	},
	{
		title: "FaceTrack",
		href: "https://github.com/ethanvillalovoz/facetrack",
		date: "Jul 2025",
		kind: "Project",
		description:
			"A local-first face-matching reference that exposes identity decisions and maintains a deduplicated attendance ledger without sending images to a hosted service.",
		image: "/images/projects/facetrack-decision-trace.svg",
		imageAlt:
			"FaceTrack session workspace, auditable match decision trace, and deduplicated attendance outcome",
		imageFit: "contain",
	},
	{
		title: "SentiSync",
		href: "https://github.com/ethanvillalovoz/sentisync",
		date: "Jul 2025",
		kind: "Project",
		description:
			"A YouTube sentiment-analysis extension backed by an MLflow, DVC, Docker, and AWS machine-learning workflow.",
		image: "/images/projects/sentisync-poster.webp",
		imageAlt:
			"SentiSync extension analyzing a YouTube discussion and switching between overview and comments",
		video: "/images/projects/sentisync-demo.mp4",
	},
	{
		title: "DDPG Reimplementation",
		href: "https://github.com/ethanvillalovoz/ddpg-reimplementation",
		date: "Jun 2025",
		kind: "Project",
		description:
			"A correctness-first TensorFlow DDPG reference with explicit online and target updates, deterministic tests, guarded legacy sweeps, and reproducible artifacts.",
		image: "/images/projects/ddpg-update-circuit.svg",
		imageAlt:
			"DDPG update circuit showing actor, critic, replay, target networks, and soft-update paths",
		imageFit: "contain",
	},
	{
		title: "Knowledge Graph RAG Assistant",
		href: "https://knowledge-graph-rag.github.io/",
		openInNewTab: true,
		date: "May 2025",
		kind: "Project",
		description:
			"For this team-built knowledge-graph RAG assistant, I generated and indexed 5GB+ of Wikipedia embeddings and refined FAISS retrieval toward a 10,000+ article knowledge base.",
		image: "/images/projects/rag-poster.webp",
		imageAlt:
			"Knowledge Graph RAG Assistant answering a question while exposing evidence topology and source context",
		video: "/images/projects/rag-demo.mp4",
	},
	{
		title: "Social Triangles",
		href: "https://ieeexplore.ieee.org/abstract/document/10342372",
		date: "Oct 2023",
		kind: "Research",
		description:
			"An IROS study of how multi-robot formation geometry shapes human navigation and approach behavior.",
		image: "/images/projects/social-triangles-thumbnail.webp",
		imageAlt:
			"Wedge and V-shape robot formations approaching participants during the Social Triangles study",
	},
];
