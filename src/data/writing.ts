export interface WritingPost {
	title: string;
	href: string;
	date: string;
	dateTime: string;
	summary: string;
	image: string;
	imageAlt: string;
}

export const promptSearchEssay: WritingPost = {
	title: "Tests Turn Prompting into Search",
	href: "/writing/tests-turn-prompting-into-search/",
	date: "Jul 2026",
	dateTime: "2026-07-10",
	summary:
		"What I learned building the evaluation pipeline behind BODE-GEN, where executable tests turn code prompting into an optimization problem.",
	image:
		"/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-method.png",
	imageAlt: "BODE-GEN test-driven Bayesian prompt optimization pipeline",
};

export const writingPosts: WritingPost[] = [promptSearchEssay];
