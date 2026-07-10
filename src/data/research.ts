export interface ResearchAuthor {
	name: string;
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
	description: string;
	contribution: string;
	image: string;
	imageAlt: string;
	resources: ResearchResource[];
}

export interface TeachingExperience {
	course: string;
	role: string;
	institution: string;
	term: string;
	description: string;
}

export const researchPublications: ResearchPublication[] = [
	{
		shortTitle: "BODE-GEN",
		title:
			"An Exploratory Study of Bayesian Prompt Optimization for Test-Driven Code Generation with Large Language Models",
		href: "https://arxiv.org/abs/2512.15076",
		authors: [
			{ name: "S. Tomar", href: "https://shlok-crypto.github.io/" },
			{ name: "A. Deshwal", href: "https://aryandeshwal.github.io/" },
			{ name: "E. Villalovoz", isEthan: true },
			{ name: "M. Fazzini", href: "https://www-users.cse.umn.edu/~mfazzini/" },
			{ name: "H. Cai", href: "https://chapering.github.io/" },
			{ name: "J.R. Doppa", href: "https://eecs.wsu.edu/~jana/" },
		],
		venue: "arXiv:2512.15076",
		date: "2025",
		description:
			"Studies Bayesian optimization for automated prompt search in test-driven LLM code generation, evaluated across HumanEval+ tasks and multiple code models.",
		contribution:
			"I built the test-driven evaluation pipeline and ran reproducible experiments across 164 HumanEval+ tasks and three code models.",
		image:
			"/data/research/2025_WSU_Bayesian_Prompt_Optimization/ICSE_BO_figure.png",
		imageAlt: "BODE-GEN Bayesian prompt optimization method diagram",
		resources: [
			{ label: "arXiv", href: "https://arxiv.org/abs/2512.15076" },
			{
				label: "PDF",
				href: "/data/research/2025_WSU_Bayesian_Prompt_Optimization/paper.pdf",
			},
		],
	},
	{
		shortTitle: "Social Triangles",
		title:
			"Social Triangles and Aggressive Lines: Multi-Robot Formations Impact Navigation and Approach",
		href: "https://ieeexplore.ieee.org/abstract/document/10342372",
		authors: [
			{
				name: "A. Bacula",
				href: "https://sites.google.com/plu.edu/alexandra-bacula",
			},
			{ name: "E. Villalovoz", isEthan: true },
			{ name: "D. Flynn", href: "https://deannaflynn.wixsite.com/deanna-flynn" },
			{ name: "A. Mehta", href: "https://uclalemur.com/" },
			{ name: "H. Knight", href: "https://www.charismarobotics.com/" },
		],
		venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
		date: "2023",
		description:
			"Studies how multi-robot formation geometry shapes human navigation and approach behavior by comparing social triangles with aggressive lines.",
		contribution:
			"I developed geometric motion primitives and Python tooling for the Pioneer 3DX formations evaluated in the study.",
		image:
			"/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/STAL_Multi_Robot_Formations.png",
		imageAlt: "Social-triangle and aggressive-line multi-robot formations",
		resources: [
			{
				label: "IEEE",
				href: "https://ieeexplore.ieee.org/abstract/document/10342372",
			},
			{
				label: "PDF",
				href: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.pdf",
			},
			{
				label: "BibTeX",
				href: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.bib",
			},
		],
	},
];

export const teachingExperiences: TeachingExperience[] = [
	{
		course: "CPT_S 315: Introduction to Data Mining",
		role: "Undergraduate Teaching Assistant",
		institution: "Washington State University",
		term: "Spring 2025",
		description:
			"Supported 90 students through office hours, grading, exam feedback, and applied Python and data-mining support; delivered guest lectures for final-project preparation.",
	},
	{
		course: "CPT_S 350: Design and Analysis of Algorithms",
		role: "Undergraduate Teaching Assistant",
		institution: "Washington State University",
		term: "Fall 2024",
		description:
			"Supported 83 students across algorithm design, data structures, and computational complexity; oversaw the course's main Python project.",
	},
	{
		course: "CPT_S 355: Programming Language Design",
		role: "Undergraduate Teaching Assistant",
		institution: "Washington State University",
		term: "Fall 2023",
		description:
			"Guided 86 students through programming-language concepts and assignments in Haskell, Python, PostScript, and Java.",
	},
	{
		course: "CPT_S 121: Program Design and Development C/C++",
		role: "Undergraduate Teaching Assistant",
		institution: "Washington State University",
		term: "Fall 2022",
		description:
			"Led lab sessions and office hours for 17 students learning introductory programming and computer science in C/C++.",
	},
];
