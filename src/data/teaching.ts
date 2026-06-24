export interface TeachingExperience {
	role: string;
	course: string;
	institution: string;
	term: string;
	description: string;
}

export const teachingExperiences: TeachingExperience[] = [
	{
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 315: Introduction to Data Mining",
		institution: "Washington State University",
		term: "Spring 2025",
		description:
			"Supported an upper-division computer science course on extracting useful patterns and structure from large data repositories.",
	},
	{
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 350: Design and Analysis of Algorithms",
		institution: "Washington State University",
		term: "Fall 2024",
		description:
			"Supported coursework on algorithm design, data structures, computational complexity, and the analysis of efficient problem-solving techniques.",
	},
	{
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 355: Programming Language Design",
		institution: "Washington State University",
		term: "Fall 2023",
		description:
			"Supported coursework on programming language design concepts, language paradigms, and comparative reasoning across high-level languages.",
	},
	{
		role: "Undergraduate Teaching Assistant",
		course: "CPT_S 121: Program Design and Development C/C++",
		institution: "Washington State University",
		term: "Fall 2022",
		description:
			"Supported introductory C/C++ programming instruction focused on problem formulation, structured design, and program development.",
	},
];
