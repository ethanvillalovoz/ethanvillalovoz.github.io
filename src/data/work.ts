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
