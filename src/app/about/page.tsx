"use client";

import { motion } from "framer-motion";

const timeline = [
	{
		year: "Summer 2024",
		title: "Robotics Institute Summer Scholars",
		org: "Carnegie Mellon University",
		location: "Pittsburgh, Pennsylvania USA",
		logo: "/images/EthanVillalovozGradPic.jpeg",
		description: "",
	},
	{
		year: "Summer 2023",
		title: "STEP Intern",
		org: "Google",
		location: "Sunnyvale, California USA",
		logo: "/logos/google.png",
		description: "",
	},
	{
		year: "Summer 2022",
		title: "Robots in the Real World",
		org: "Oregon State University",
		location: "Corvallis, Oregon USA",
		logo: "/logos/osu.png",
		description: "",
	},
	{
		year: "2021–2025",
		title: "B.S. in Computer Science, Minor in Mathematics",
		org: "Washington State University, Honors College",
		location: "Pullman, Washington USA",
		logo: "/logos/wsu.png",
		description: "",
	},
];

export default function AboutPage() {
	return (
		<main className="max-w-5xl mx-auto px-4 py-10">
			<div className="flex items-center justify-between mb-8">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
				>
					About
				</motion.h1>
				<a
					href="/data/EthanVillalovoz-CV.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark transition"
				>
					Download CV
				</a>
			</div>

			<div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
				<img
					src="/images/EthanVillalovozGradPic.jpeg"
					alt="Ethan Villalovoz profile photo"
					className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow"
				/>
				<div className="flex-1">
					<div className="mb-2 text-primary font-semibold text-base md:text-lg">
						Currently: Job Seeking/Applying for Graduate Programs
					</div>
					<motion.p
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
						className="text-blue-900 dark:text-primary-light mb-6 text-lg font-medium"
					>
						Here you’ll find my background, timeline, CV, and{" "}
						<a
							href="#fun-facts"
							className="underline text-primary hover:text-primary-dark transition-colors"
						>
							a few fun facts.
						</a>
					</motion.p>
				</div>
			</div>

			{/* Timeline */}
			<section className="mb-10">
				<h2 className="text-xl font-bold mb-6 text-primary">Timeline</h2>
				<div className="relative border-l-2 border-primary pl-8">
					{timeline.map((item, idx) => (
						<div
							key={idx}
							className="mb-12 flex items-start relative"
						>
							{/* Timeline dot */}
							<span className="absolute -left-4 top-2 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-neutral-900 shadow"></span>
							{/* Logo */}
							<img
								src={item.logo}
								alt={item.org + " logo"}
								className="w-24 h-24 object-contain rounded-full border border-neutral-200 dark:border-neutral-700 bg-white mr-4"
							/>
							{/* Content */}
							<div>
								<div className="text-sm text-primary font-semibold">
									{item.year}
								</div>
								<div className="text-lg font-bold">{item.title}</div>
								<div className="text-neutral-700 dark:text-neutral-300 font-medium">
									{item.org}
								</div>
								<div className="text-neutral-500 dark:text-neutral-400 text-sm">
									{item.location}
								</div>
								{item.description && (
									<div className="text-neutral-700 dark:text-neutral-300 text-sm mt-1">
										{item.description}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Fun Facts */}
			<section id="fun-facts">
				<h2 className="text-xl font-bold mb-4 text-primary">Fun Facts</h2>
				<ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
					<li>I love hiking and landscape photography.</li>
					<li>I can solve a Rubik's Cube in under a minute.</li>
					<li>My favorite programming language is Python.</li>
				</ul>
			</section>
		</main>
	);
}
