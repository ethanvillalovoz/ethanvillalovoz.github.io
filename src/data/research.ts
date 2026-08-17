import { promptSearchEssay } from "@/data/writing";

export interface ResearchAuthor {
	name: string;
	schemaName: string;
	href?: string;
	isEthan?: boolean;
}

export interface ResearchResource {
	label: string;
	href: string;
}

export interface ResearchPublication {
	shortTitle: string;
	title: string;
	href: string;
	authors: ResearchAuthor[];
	venue: string;
	date: string;
	datePublished: string;
	identifier: string;
	description: string;
	image: string;
	imageAlt: string;
	resources: ResearchResource[];
}

export interface TeachingExperience {
	course: string;
	role: string;
	institution: string;
	term: string;
}

export const researchPublications: ResearchPublication[] = [
	{
		shortTitle: "BODE-GEN",
		title:
			"An Exploratory Study of Bayesian Prompt Optimization for Test-Driven Code Generation with Large Language Models",
		href: "https://arxiv.org/abs/2512.15076",
		authors: [
			{ name: "Shlok Tomar", schemaName: "Shlok Tomar", href: "https://shlok-crypto.github.io/" },
			{ name: "Aryan Deshwal", schemaName: "Aryan Deshwal", href: "https://aryandeshwal.github.io/" },
			{
				name: "Ethan Villalovoz",
				schemaName: "Ethan Villalovoz",
				href: "https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
				isEthan: true,
			},
			{ name: "Mattia Fazzini", schemaName: "Mattia Fazzini", href: "https://www-users.cse.umn.edu/~mfazzini/" },
			{ name: "Haipeng Cai", schemaName: "Haipeng Cai", href: "https://chapering.github.io/" },
			{ name: "Janardhan Rao Doppa", schemaName: "Janardhan Rao Doppa", href: "https://eecs.wsu.edu/~jana/" },
		],
		venue: "arXiv",
		date: "2025",
		datePublished: "2025-12-17",
		identifier: "https://doi.org/10.48550/arXiv.2512.15076",
		description:
			"Uses Bayesian optimization to improve test-driven LLM code generation across HumanEval+ and multiple code models.",
		image: "/images/projects/bodegen-method-thumbnail.webp",
		imageAlt: "BODE-GEN Bayesian prompt optimization method diagram",
		resources: [
			{ label: "Paper", href: "https://arxiv.org/abs/2512.15076" },
			{ label: "Blog", href: promptSearchEssay.href },
		],
	},
	{
		shortTitle: "Social Triangles",
		title:
			"Social Triangles and Aggressive Lines: Multi-Robot Formations Impact Navigation and Approach",
		href: "https://ieeexplore.ieee.org/abstract/document/10342372",
		authors: [
			{
				name: "Alexandra Bacula",
				schemaName: "Alexandra Bacula",
				href: "https://sites.google.com/plu.edu/alexandra-bacula",
			},
			{
				name: "Ethan Villalovoz",
				schemaName: "Ethan Villalovoz",
				href: "https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
				isEthan: true,
			},
			{ name: "Deanna Flynn", schemaName: "Deanna Flynn", href: "https://deannaflynn.wixsite.com/deanna-flynn" },
			{ name: "Ankur Mehta", schemaName: "Ankur Mehta", href: "https://uclalemur.com/" },
			{ name: "Heather Knight", schemaName: "Heather Knight", href: "https://www.charismarobotics.com/" },
		],
		venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
		date: "2023",
		datePublished: "2023",
		identifier: "IEEE 10342372",
		description:
			"Shows that triangular robot formations are perceived more positively and navigate more robustly than line formations.",
		image: "/images/projects/social-triangles-threat-thumbnail.webp",
		imageAlt:
			"Threatening-to-harmless ratings for V-shape, wedge, vertical-line, and horizontal-line robot formations",
		resources: [
			{
				label: "Paper",
				href: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.pdf",
			},
		],
	},
];

export const teachingExperiences: TeachingExperience[] = [
	{
		course: "CPT S 315: Introduction to Data Mining",
		role: "Undergraduate Teaching Assistant",
		institution: "Washington State University",
		term: "Spring 2025",
	},
	{
		course: "CPT S 350: Design and Analysis of Algorithms",
		role: "Undergraduate Teaching Assistant",
		institution: "Washington State University",
		term: "Fall 2024",
	},
	{
		course: "CPT S 355: Programming Language Design",
		role: "Undergraduate Teaching Assistant",
		institution: "Washington State University",
		term: "Fall 2023",
	},
	{
		course: "CPT S 121: Program Design and Development C/C++",
		role: "Undergraduate Teaching Assistant",
		institution: "Washington State University",
		term: "Fall 2022",
	},
];
