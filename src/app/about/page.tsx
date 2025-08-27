"use client";

import { motion } from "framer-motion";
import { FaFileAlt, FaFilePdf } from "react-icons/fa";

// Add icons for each timeline entry (customize as you like)
const timeline = [
	{
		year: "2026–Present",
		title: "M.S. in Computer Science, Specialization in Computational Perception and Robotics",
		org: "Georgia Institute of Technology, College of Computing",
		location: "Atlanta, Georgia USA",
		logo: "/images/timeline/GT_icon.png",
		icon: "🐝",
		description:
			"Pursuing M.S. in Computer Science with a focus on AI, robotics, and perception.",
		// activities: [
			
		// ],
	},
	{
		year: "Summer 2025",
		title: "Production Engineering Fellow",
		org: "Meta",
		location: "Remote USA",
		logo: "/images/timeline/facebook_logo.jpeg",
		icon: "🛠️",
		description:
			"Deployed a full-stack Flask app with Docker on DigitalOcean, integrating MySQL and Nginx, automating CI/CD to cut release time by 80%, and adding Prometheus/Grafana monitoring for reliable performance.",
	},
	{
		year: "Summer 2024",
		title: "Robotics Institute Summer Scholar",
		org: "Carnegie Mellon University",
		location: "Pittsburgh, Pennsylvania USA",
		logo: "/images/timeline/Carnegie_Mellon_icon.png",
		icon: "🤖",
		description:
			"Developed hierarchical reward learning systems leveraging Bayesian inference and human feedback to align autonomous systems with human preferences and improve adaptability in dynamic settings.",
	},
	{
		year: "Summer 2023",
		title: "Software Engineering Intern (STEP)",
		org: "Google",
		location: "Sunnyvale, California USA",
		logo: "/images/timeline/Google_icon.png",
		icon: "💻",
		description:
			"Optimized internal database processes with C++ and SQL, reducing runtime by 66% and enhancing data visualization through real-time dashboards and dynamic graphs.",
	},
	{
		year: "Summer 2022",
		title: "REU Fellow",
		org: "Oregon State University",
		location: "Corvallis, Oregon USA",
		logo: "/images/timeline/Oregon_State_icon.jpeg",
		icon: "🤝",
		description:
			"Developed geometric features for multi-robot expressive motion, integrating performing arts techniques to enhance robot character and intelligence.",
	},
	{
		year: "2021–2025",
		title: "B.S. in Computer Science, Minor in Mathematics",
		org: "Washington State University, Honors College",
		location: "Pullman, Washington USA",
		logo: "/images/timeline/Washington_State_icon.png",
		icon: "🎓",
		description:
			"Graduated with honors, focusing on AI, machine learning, and mathematics.",
		activities: [
			"Honors College",
			"NIH MARC Fellow",
			"ESTEEMED MIRA Scholar",
			"VCEA College Ambassador",
		],
	},
];

export default function AboutPage() {
	return (
		<main className="max-w-5xl mx-auto px-4 py-10">
			<header className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-4 mb-8">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
				>
					About
				</motion.h1>
				<div className="flex gap-2">
					<a
						href="/data/EthanVillalovoz-Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-3 py-1.5 text-sm sm:text-base sm:px-4 sm:py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark transition"
					>
						<FaFileAlt className="mr-1.5 sm:mr-2 text-sm sm:text-base" />
						Resume
					</a>
					<a
						href="/data/EthanVillalovoz-CV.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-3 py-1.5 text-sm sm:text-base sm:px-4 sm:py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
					>
						<FaFilePdf className="mr-1.5 sm:mr-2 text-sm sm:text-base" />
						CV
					</a>
				</div>
			</header>

			<div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-6">
				<img
					src="/images/EthanVillalovozGradPic.jpeg"
					alt="Ethan Villalovoz profile photo"
					className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow"
				/>
				<div className="flex-1">
					<div className="mb-2 text-primary font-semibold text-base md:text-lg">
						Currently: Job Seeking | Incoming MSCS @ Georgia Tech (Spring 2026)
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

			{/* About Me / Motivation Section */}
			<section className="mb-10">
				<h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
					My Story & Motivation
				</h2>
				<p className="text-neutral-800 dark:text-neutral-200 mb-2 text-lg">
					From an early age, I was fascinated by how technology can amplify human potential and solve real-world problems. My journey in computer science began with a curiosity for robotics and artificial intelligence, and has grown into a passion for building systems that are not only intelligent, but also safe, interpretable, and beneficial to society.
				</p>
				<p className="text-neutral-800 dark:text-neutral-200 mb-2 text-lg">
					Whether it’s developing expressive multi-robot behaviors, aligning AI with human values, or optimizing large-scale systems, I’m driven by the challenge of making technology more collaborative and trustworthy. I believe that the future of AI depends on our ability to bridge the gap between technical innovation and human needs.
				</p>
			</section>

			{/* Philosophy Section */}
			<section className="mb-10">
				<h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
					My Approach
				</h2>
				<p className="text-neutral-800 dark:text-neutral-200 text-lg">
					I approach research and engineering with curiosity, empathy, and a commitment to open collaboration. I value clear communication, rigorous experimentation, and always strive to make my work accessible and impactful for both technical and non-technical audiences.
				</p>
			</section>

			{/* Timeline */}
			<section className="mb-10">
				<h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
					Timeline
				</h2>
				<div className="relative border-l-2 border-primary pl-8">
					{timeline.map((item, idx) => (
						<div
							key={idx}
							className="mb-12 flex items-start relative"
						>
							{/* Timeline dot with icon */}
							<span className="absolute -left-6 top-2 w-8 h-8 flex items-center justify-center bg-primary rounded-full border-4 border-white dark:border-neutral-900 shadow text-xl text-white">
								{item.icon}
							</span>
							{/* Logo */}
							<img
								src={item.logo}
								alt={item.org + " logo"}
								className="w-24 h-24 object-contain rounded-full border border-neutral-200 dark:border-neutral-700 bg-white mr-4 ml-2"
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
										{item.activities && (
											<ul className="list-disc list-inside ml-4 mt-1">
												{item.activities.map(
													(activity: string, idx: number) => (
														<li key={idx}>{activity}</li>
													)
												)}
											</ul>
										)}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Fun Facts */}
			<section id="fun-facts">
				<h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
					Fun Facts
				</h2>
				<ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-2">
					<li>
						I’m currently binge-watching{" "}
						<i>Community</i> (and yes, Troy and Abed are my favorites, but I
						still need to finish watching <i>Suits</i> Seasons 8 and 9 lol).
					</li>
					<li>
						I’m teaching myself guitar (it feels like I am cutting my fingernails
						every two days).
					</li>
					<li>I play both indoor and beach volleyball to stay active.</li>
				</ul>
			</section>
		</main>
	);
}
