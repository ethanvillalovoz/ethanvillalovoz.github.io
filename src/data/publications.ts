export interface Author {
	name: string;
	url?: string;
	isMe?: boolean;
	equalContribution?: boolean;
	equalAdvising?: boolean;
}

export interface Publication {
	title: string;
	url?: string;
	authors: Author[];
	conference: string;
	award?: string;
	paper?: string;
	bibtex?: string;
	image: string;
	description: string;
	tags: string[];
	website?: string;
	code?: string;
	video?: string;
	highlighted?: boolean;
}

export const preprints: Publication[] = [
	{
		title: "An Exploratory Study of Bayesian Prompt Optimization for Test-Driven Code Generation with Large Language Models",
		url: "https://arxiv.org/abs/2512.15076",
		authors: [
			{ name: "S. Tomar", url: "https://shlok-crypto.github.io/" },
			{ name: "A. Deshwal", url: "https://aryandeshwal.github.io/" },
			{ name: "E. Villalovoz", isMe: true },
			{ name: "M. Fazzini", url: "https://www-users.cse.umn.edu/~mfazzini/" },
			{ name: "H. Cai", url: "https://chapering.github.io/" },
			{ name: "J.R. Doppa", url: "https://eecs.wsu.edu/~jana/" },
		],
		conference: "arXiv:2512.15076, 2025",
		paper: "/data/research/2025_WSU_Bayesian_Prompt_Optimization/paper.pdf",
		image: "/data/research/2025_WSU_Bayesian_Prompt_Optimization/ICSE_BO_figure.png",
		description:
			"Studies BODE-GEN, a Bayesian optimization approach to automated prompt search for test-driven LLM code generation. Evaluates functional correctness across HumanEval+ tasks and multiple code LLMs against strong prompting baselines.",
		tags: ["LLM Code Generation", "Bayesian Optimization", "Prompt Search", "HumanEval+"],
	},
];

export const papers2023: Publication[] = [
	{
		title: "Social Triangles and Aggressive Lines: Multi-Robot Formations Impact Navigation and Approach",
		url: "https://ieeexplore.ieee.org/abstract/document/10342372",
		authors: [
			{ name: "A. Bacula", url: "https://sites.google.com/plu.edu/alexandra-bacula" },
			{ name: "E. Villalovoz", isMe: true },
			{ name: "D. Flynn", url: "https://deannaflynn.wixsite.com/deanna-flynn" },
			{ name: "A. Mehta", url: "https://uclalemur.com/" },
			{ name: "H. Knight", url: "https://www.charismarobotics.com/" },
		],
		conference: "International Conference on Intelligent Robots and Systems (IROS), 2023",
		paper: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.pdf",
		bibtex: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.bib",
		image: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/STAL_Multi_Robot_Formations.png",
		description:
			"Studies how multi-robot formation geometry shapes human navigation and approach behavior. Compares social triangles and aggressive lines to understand how expressive robot formations influence human-robot interaction.",
		tags: ["Human-Robot Interaction", "Multi-Robot Systems", "Social Navigation"],
	},
];
