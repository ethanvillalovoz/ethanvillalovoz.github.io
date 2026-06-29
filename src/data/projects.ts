export interface ProjectLink {
	label: string;
	url: string;
}

export interface Project {
	title: string;
	description: string;
	image: string;
	tags: string[];
	extraLinks: ProjectLink[];
	date: string;
	status: string;
}

export const projects: Project[] = [
	{
		title: "DDPG: Deep Deterministic Policy Gradient Reimplementation",
		description:
			"A research-oriented TensorFlow 2.x reimplementation of Deep Deterministic Policy Gradient for continuous-control Gym environments, structured for reproducible training, evaluation, and experimentation.",
		image: "/images/projects/ddpg.png",
		tags: ["Reinforcement Learning", "DDPG", "TensorFlow", "OpenAI Gym"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/ddpg-reimplementation",
			},
		],
		date: "July 2025",
		status: "Completed",
	},
	{
		title: "CodePrep.AI: AI-Powered Coding Interview Prep with LLMs",
		description:
			"A full-stack interview-prep platform that generates coding practice questions with Meta-Llama-3-8B-Instruct and supports challenge history, quota tracking, progress feedback, and real-time explanations.",
		image: "/images/projects/codeprep.png",
		tags: ["LLMs", "React", "FastAPI", "Hugging Face"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/codeprep-ai",
			},
		],
		date: "July 2025",
		status: "Completed",
	},
	{
		title: "FaceTrack: Smart Face Recognition Attendance System",
		description:
			"A full-stack attendance system that uses face recognition to automate check-ins, with a React interface, FastAPI backend, SQLite persistence, real-time webcam capture, and batch image uploads.",
		image: "/images/projects/facetrack-thumb.jpg",
		tags: ["Computer Vision", "Face Recognition", "React", "FastAPI"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/facetrack",
			},
		],
		date: "July 2025",
		status: "Completed",
	},
	{
		title: "LaTeX Resume Template",
		description:
			"An ATS-friendly LaTeX resume and academic CV template for technical students and developers, with minimalist formatting, reusable macros, example PDFs, and GitHub Actions validation.",
		image: "/images/projects/latex-thumb.jpg",
		tags: ["LaTeX", "Resume", "Academic CV", "CI/CD"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/latex-resume-template",
			},
		],
		date: "July 2025",
		status: "Completed",
	},
	{
		title: "IntelliCrawl: Autonomous AI Research Agent for Developer Tools",
		description:
			"An LLM-powered research agent for comparing developer tools, using LangGraph, LangChain, and Firecrawl to orchestrate multi-step web crawling, synthesis, and structured analysis.",
		image: "/images/projects/intellicrawl-thumb.jpg",
		tags: ["AI Agents", "LangGraph", "LangChain", "Firecrawl"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/intellicrawl",
			},
		],
		date: "July 2025",
		status: "Completed",
	},
	{
		title: "SentiSync: Real-Time YouTube Sentiment Analysis with MLOps",
		description:
			"A Chrome extension and Flask API for YouTube comment sentiment analysis, combining LightGBM/TF-IDF inference, charts, word clouds, trend views, and an MLflow/DVC/Docker/AWS workflow.",
		image: "/images/projects/sentisync-thumb.jpg",
		tags: ["Sentiment Analysis", "Flask", "MLflow", "Docker"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/sentisync",
			},
		],
		date: "July 2025",
		status: "Completed",
	},
	{
		title: "ClearBill.AI: Explaining Medical Bills with AI and RAG",
		description:
			"A RAG chatbot that helps users understand medical bills by retrieving relevant context from Astra DB and generating clear explanations with LangChain and Hugging Face Llama-3.1-8B-Instruct.",
		image: "/images/projects/clearbill.png",
		tags: ["RAG", "LLMs", "Next.js", "Vector Databases"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/clearbill-ai",
			},
		],
		date: "July 2025",
		status: "Completed",
	},
	{
		title: "Self-Driving Car: Behavioral Cloning in the Udacity Simulator",
		description:
			"An end-to-end behavioral cloning system that trains an NVIDIA-style CNN to predict steering from front-camera images and drive the Udacity simulator through real-time Flask + Socket.IO inference.",
		image: "/images/projects/self_driving-thumb.jpg",
		tags: ["Computer Vision", "Deep Learning", "TensorFlow", "Autonomous Driving"],
		extraLinks: [
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/self-driving-car-simulation",
			},
		],
		date: "September 2025",
		status: "Completed",
	},
	{
		title: "Knowledge Graph RAG Assistant",
		description:
			"A team-built senior design project for HackerEarth that combines a React/TypeScript chat interface, FastAPI retrieval endpoints, FAISS vector search, DBpedia/SPARQL knowledge-graph context, and OpenAI response generation.",
		image: "/images/projects/rag.jpg",
		tags: ["RAG", "Knowledge Graphs", "FastAPI", "FAISS"],
		extraLinks: [
			{
				label: "Project Page",
				url: "/rag/",
			},
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/ACME10-HE-RAGApp",
			},
		],
		date: "May 2025",
		status: "Completed",
	},
	{
		title: "ScenarioLens: Long-Tail Autonomy Scenario Explorer",
		description:
			"A Waymo-aligned autonomy portfolio project for ingesting motion scenarios, computing interpretable interaction and risk metrics, ranking long-tail cases, and presenting them in a searchable static explorer.",
		image: "/scenariolens/assets/scenariolens-explorer.png",
		tags: ["Autonomous Driving", "Waymo Motion", "Scenario Ranking", "Python"],
		extraLinks: [
			{
				label: "Live Demo",
				url: "/scenariolens/",
			},
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/scenariolens",
			},
		],
		date: "June 2026",
		status: "Active",
	},
	{
		title: "MetricDrive: Metric-Aligned Planning Lab",
		description:
			"A Waymo-aligned autonomy research project that turns synthetic long-tail driving scenarios into metric-ranked trajectories, preference pairs, learned reward choices, VLM-style planning rows, and a tiny RL-alignment analogue.",
		image: "/metricdrive/assets/metricdrive-explorer.svg",
		tags: ["Autonomous Driving", "Reward Modeling", "VLM Planning", "Python"],
		extraLinks: [
			{
				label: "Live Demo",
				url: "/metricdrive/",
			},
			{
				label: "Code",
				url: "https://github.com/ethanvillalovoz/metricdrive",
			},
		],
		date: "June 2026",
		status: "Active",
	},
];

export const projectsNewestFirst = [...projects].reverse();
