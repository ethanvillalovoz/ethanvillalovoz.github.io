"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, 
  // FaYoutube, FaTwitter 
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

// Example timeline data structure
const workTimeline = [
	{
		date: "Summer 2026",
		company: "Microsoft",
		logo: "/images/timeline/microsoft_logo.jpeg", // Place your logo in /public/logos/
		title: "Software Engineer Intern",
		bullets: [
			"Commerce and Ecosystems.",
		],
	},
	{
		date: "Jun 2025 - Sep 2025",
		company: "Meta & Major League Hacking",
		logo: "/images/timeline/meta_MLH_fellowship_logo.png", // Place your logo in /public/logos/
		title: "Production Engineering Fellow",
		bullets: [
			"Built and deployed a production-grade full-stack Flask application with Docker, CI/CD automation, and monitoring infrastructure, improving deployment efficiency, scalability, and reliability in real-world production environments.",
		],
	},
  {
		date: "Jun 2024 - Aug 2024",
		company: "Carnegie Mellon University",
		logo: "/images/timeline/Carnegie_Mellon_icon.png", // Place your logo in /public/logos/
		title: "Robotics Institute Summer Scholar",
		bullets: [
			"Developed a hierarchical reward learning framework with Bayesian inference and interactive clarification dialogues, enhancing robot adaptability and task accuracy in human-robot collaboration research.",
		],
	},
  {
		date: "May 2023 - Aug 2023",
		company: "Google",
		logo: "/images/timeline/Google_icon.png", // Place your logo in /public/logos/
		title: "Software Engineering Intern (STEP)",
		bullets: [
			"Developed scalable C++ and SQL analytics pipelines and interactive dashboards that optimized internal data workflows, reduced runtime by 66%, and enhanced real-time decision-making across engineering teams.",
		],
	},
  {
		date: "Jun 2022 - Aug 2022",
		company: "Oregon State University",
		logo: "/images/timeline/Oregon_State_icon.jpeg", // Place your logo in /public/logos/
		title: "REU Fellow",
		bullets: [
			"Designed and implemented geometric motion primitives and interactive deployment tools enabling expressive multi-robot behaviors for human-robot interaction research.",
		],
	},
	// ...add more work experiences
];
const educationTimeline = [
	{
		date: "2026 - 2027 (expected)",
		company: "Georgia Institute of Technology, College of Computing",
		logo: "/images/timeline/GT_icon.png", // Add your logo to /public/logos/
		title: "M.S. in Computer Science, Specialization in Computational Perception and Robotics",
		bullets: [
			"Pursuing M.S. in Computer Science with a focus on AI, robotics, and perception.",
			"Activities: AI Safety Initiative",
		],
	},
	{
		date: "2021 - 2025",
		company: "Washington State University, Honors College",
		logo: "/images/timeline/Washington_State_icon.png", // Add your logo to /public/logos/
		title: "B.S. in Computer Science, Minor in Mathematics (GPA: 3.94/4.00)",
		bullets: [
			"Graduated with honors, focusing on AI, machine learning, and mathematics.",
			"Activities: Honors College, NIH ESTEEMED Fellow, VCEA College Ambassador, NIH MARC Fellow",
		],
	},
	// ...add more education
];
// const featuredResearch = [
//   {
//     title: "Social Triangles and Aggressive Lines: Multi-Robot Formations Impact Navigation and Approach",
//     venue: "IROS 2023",
//     desc: "Investigates how different multi-robot formations affect navigation and approach behaviors in social environments.",
//     link: "/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.pdf",
//     image: "/images/research/stal_cover.jpg", // Add your image path
//     tags: ["Robotics", "Multi-Robot", "HRI"],
//   },
//   // ...add more research
// ];
// const featuredProjects = [
//   {
//     title: "TT4D",
//     desc: "Generate winning combinations, view past results, and analyze lottery trends all in one place.",
//     tags: ["Docker", "FastAPI", "NextJS", "PostgreSQL", "Python"],
//     image: "/images/projects/tt4d_screenshot.png", // Add your image path
//     links: [
//       { label: "Website", url: "https://tt4d.com", icon: "🌐" },
//       { label: "Source", url: "https://github.com/ethanvillalovoz/tt4d", icon: "💻" },
//     ],
//   },
//   // ...add more projects
// ];

export default function Home() {
	const [timelineTab, setTimelineTab] = useState<"work" | "education">("work");
	const [showAllNews, setShowAllNews] = useState(false);

	const newsItems = [
		// {
		//   date: "07/2025",
		//   content: (
		//     <>
		//       Launched a new <a href="/blog" className="text-primary underline">blog section</a> where I&apos;ll be sharing my journey in AI, robotics research, and grad school experiences!
		//     </>
		//   ),
		// },
		{
			date: "07/2025",
			content: (
				<>
					Admitted to the{" "}
					<a href="https://www.cc.gatech.edu/" className="text-primary underline">
						Georgia Tech MSCS
					</a>{" "}
					program! I’ll be starting in <strong>Spring 2026</strong>, specializing in Computational Perception and Robotics.
				</>
			),
		},
		{
			date: "06/2025",
			content: (
				<>
					Gave an alumni talk for the{" "}
					<a href="https://marc.wsu.edu/" className="text-primary underline">
						WSU MARC
					</a>{" "}
					&{" "}
					<a href="https://mira.wsu.edu/" className="text-primary underline">
						MIRA
					</a>{" "}
					program on my research journey and grad school advice.
				</>
			),
		},
		{
			date: "06/2025",
			content: (
				<>
					I joined Meta & Major League Hacking as a{" "}
					<a href="https://fellowship.mlh.io/programs/production-engineering-sre" className="text-primary underline">
						Production Engineering Fellow
					</a>
					!
				</>
			),
		},
		{
			date: "05/2025",
			content: <>Graduated from Washington State University with a B.S. in Computer Science and a minor in Mathematics. Go Cougs!</>,
		},
		{
			date: "06/2024",
			content: (
				<>
					This summer, I will be conducting research at Carnegie Mellon University as part of the{" "}
					<a href="https://riss.ri.cmu.edu/" className="text-primary underline">
						CMU RISS
					</a>{" "}
					program.
				</>
			),
		},
		{
			date: "09/2023",
			content: (
				<>
					I will be participating in Google Research&apos;s{" "}
					<a href="https://research.google/programs-and-events/csrmp/" className="text-primary underline">
						CS Research Mentorship Program
					</a>{" "}
					during the Fall semester.
				</>
			),
			hidden: true,
		},
		{
			date: "07/2023",
			content: (
				<>
					I am thrilled and sincerely grateful to have been awarded the{" "}
					<a href="https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship" className="text-primary underline">
						Generation Google Scholarship
					</a>
					.
				</>
			),
			hidden: true,
		},
		// Hidden news items
		{
			date: "07/2023",
			content: (
				<>
					My contributions to the work I completed at Oregon State University have been accepted for presentation at <b>IROS 2023</b>!
				</>
			),
			hidden: true,
		},
		{
			date: "05/2023",
			content: (
				<>
					I will be interning as a{" "}
					<a href="https://buildyourfuture.withgoogle.com/programs/step" className="text-primary underline">
						Software Engineering Intern (STEP)
					</a>{" "}
					at Google.
				</>
			),
			hidden: true,
		},
		{
			date: "05/2023",
			content: (
				<>
					I became a MARC Scholar through the{" "}
					<a href="https://marc.wsu.edu/" className="text-primary underline">
						NIH Fellowship
					</a>
					.
				</>
			),
			hidden: true,
		},
		{
			date: "06/2022",
			content: (
				<>
					I will be conducting research at Oregon State University as part of the{" "}
					<a href="https://engineering.oregonstate.edu/CoRIS/reu-robots-real-world" className="text-primary underline">
						REU: Robots in the Real World
					</a>{" "}
					program.
				</>
			),
			hidden: true,
		},
		{
			date: "07/2021",
			content: (
				<>
					I became an ESTEEMED Scholar through the{" "}
					<a href="https://mira.wsu.edu/" className="text-primary underline">
						NIH Fellowship
					</a>
					.
				</>
			),
			hidden: true,
		},
	];
	const visibleNews = newsItems.filter((item) => !item.hidden);
	const hiddenNews = newsItems.filter((item) => item.hidden);

	return (
		<main className="max-w-4xl mx-auto px-4 py-10 relative overflow-hidden">
			{/* SVG Background */}
			{/* <svg
				className="absolute inset-0 w-full h-full pointer-events-none z-0"
				style={{ opacity: 0.1 }}
				viewBox="0 0 800 600"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			> */}
				{/* Neural network/circuit pattern */}
				{/* <circle cx="100" cy="100" r="40" stroke="#3b82f6" strokeWidth="2" />
				<circle cx="300" cy="200" r="30" stroke="#f59e42" strokeWidth="2" />
				<circle cx="600" cy="120" r="50" stroke="#10b981" strokeWidth="2" />
				<circle cx="700" cy="400" r="35" stroke="#6366f1" strokeWidth="2" />
				<circle cx="200" cy="500" r="25" stroke="#f43f5e" strokeWidth="2" /> */}
				{/* Connecting lines */}
				{/* <line x1="100" y1="100" x2="300" y2="200" stroke="#3b82f6" strokeWidth="2" />
				<line x1="300" y1="200" x2="600" y2="120" stroke="#f59e42" strokeWidth="2" />
				<line x1="600" y1="120" x2="700" y2="400" stroke="#10b981" strokeWidth="2" />
				<line x1="700" y1="400" x2="200" y2="500" stroke="#6366f1" strokeWidth="2" />
				<line x1="200" y1="500" x2="100" y2="100" stroke="#f43f5e" strokeWidth="2" />
			</svg> */}
			<div className="relative z-10">
				{/* Intro Section */}
				<div className="flex flex-col md:flex-row items-center md:items-start gap-8">
					<div className="flex-1">
						<motion.h1
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, ease: "easeOut" }}
							className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
						>
							Hi, I&apos;m Ethan Villalovoz
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
							className="text-xl md:text-2xl font-medium text-gray-700 dark:text-primary-light mb-6"
						>
							AI/ML Researcher & Engineer
						</motion.p>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
							className="text-lg text-gray-600 dark:text-gray-300 mb-8"
						>
							Welcome! Explore my research, projects, and journey here!
						</motion.p>
						{/* <p className="mb-4">
							I am a recent graduate in Computer Science from Washington State University with a minor in Mathematics.
							My research spans robotics, machine learning, and
              AI safety, with a focus on reinforcement learning, human-AI collaboration, and
              large language models.
						</p> */}
						{/* <p className="mb-4">
              I’ve conducted research at Carnegie Mellon University (HARP Lab) on hierarchical
              reward learning, Oregon State University (CHARISMA Lab) on multi-robot navigation,
              and Washington State University (Doppa Lab). I also completed a software engineering
              internship at Google (STEP Intern), where I built scalable data processing and visualization
              systems to support internal analytics.
            </p> */}
						<p className="mb-4">
							I am a Master&apos;s student in Computer Science at Georgia Tech, specializing in Computational Perception and Robotics. This summer, I&apos;ll be joining Microsoft as a Software Engineer Intern.
							{/* Previously, I completed my B.S. in Computer Science at Washington State University. */}
						</p>
						{/* <p className="mb-4">
							I am currently seeking full-time/internship opportunities in AI/ML research and engineering while continuing to explore the intersection of foundation models and embodied intelligence.
						</p> */}
						<p className="mb-4">Please feel free to reach out about research, collaboration, or any advice I can help with!</p>
						<div className="flex flex-wrap items-center gap-3 mb-8">
							<a
								href="/data/EthanVillalovoz-Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark transition"
							>
								Resume
							</a>
							<a
								href="/data/EthanVillalovoz-CV.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-4 py-2 rounded bg-primary/10 text-primary font-semibold shadow hover:bg-primary/20 transition"
							>
								CV
							</a>
							<a
								href="https://www.linkedin.com/in/evillalovoz27/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:text-primary-dark text-2xl"
								aria-label="LinkedIn"
							>
								<FaLinkedin />
							</a>
							<a
								href="https://github.com/ethanvillalovoz"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:text-primary-dark text-2xl"
								aria-label="GitHub"
							>
								<FaGithub />
							</a>
							{/* <a
								href="https://www.youtube.com/@YourChannel"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:text-primary-dark text-2xl"
								aria-label="YouTube"
							>
								<FaYoutube />
							</a> */}
							{/* <a
								href="https://twitter.com/YourTwitter"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:text-primary-dark text-2xl"
								aria-label="Twitter"
							>
								<FaTwitter />
							</a> */}
							<a
								href="https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en"
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary hover:text-primary-dark text-2xl"
								aria-label="Google Scholar"
							>
								<SiGooglescholar />
							</a>
              <a
								href="mailto:ethan.villalovoz@gmail.com"
								className="text-primary hover:text-primary-dark text-2xl"
								aria-label="Email"
							>
								<FaEnvelope />
							</a>
						</div>
					</div>
					<div>
						<Image
							src="/images/EthanVillalovozPic.jpeg"
							alt="Ethan Villalovoz"
							width={220}
							height={220}
							className="rounded-full object-cover"
						/>
					</div>
				</div>

				{/* Timeline Section */}
				<section className="mt-16">
					<div className="flex gap-2 mb-4">
						<button
							className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${
								timelineTab === "work"
									? "border-primary text-primary"
									: "border-transparent text-gray-500 dark:text-gray-400"
							}`}
							onClick={() => setTimelineTab("work")}
						>
							Work
						</button>
						<button
							className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-colors ${
								timelineTab === "education"
									? "border-primary text-primary"
									: "border-transparent text-gray-500 dark:text-gray-400"
							}`}
							onClick={() => setTimelineTab("education")}
						>
							Education
						</button>
					</div>
					<div className="bg-neutral-100 dark:bg-neutral-900 rounded-lg p-6 shadow mb-8">
						{(timelineTab === "work" ? workTimeline : educationTimeline).map((item, idx) => (
							<div
								key={idx}
								className="flex items-start gap-5 mb-8 last:mb-0 bg-white dark:bg-neutral-800 rounded-lg p-5 shadow"
							>
								{/* Company Logo */}
								<div className="flex-shrink-0">
									<img
										src={item.logo}
										alt={item.company + ' logo'}
										className="w-12 h-12 rounded-full object-contain border border-gray-200 dark:border-neutral-700 bg-white"
									/>
								</div>
								{/* Content */}
								<div>
									<div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.date}</div>
									<div className="font-bold text-lg">{item.company}</div>
									<div className="text-sm text-primary mb-2">{item.title}</div>
									<ul className="list-disc pl-5 space-y-1">
										{item.bullets.map((point, i) => (
											<li key={i} className="text-gray-700 dark:text-gray-200">{point}</li>
										))}
									</ul>
									{item.company === "Washington State University, Honors College" && (
                    <a
                      href="https://github.com/mollyiverson/ACME10-HE-RAGApp"
                      className="inline-block mt-3 px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Senior Design Project
                    </a>
                  )}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Featured Research */}
				{/* <section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
						Featured Research
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{featuredResearch.map((r, idx) => (
							<div key={idx} className="bg-white dark:bg-neutral-900 rounded-lg p-0 shadow flex flex-col overflow-hidden">
								{r.image && (
									<img src={r.image} alt={r.title} className="w-full h-40 object-cover border-b" />
								)}
								<div className="p-5 flex flex-col flex-1">
									<div className="font-semibold text-lg mb-1">{r.title}</div>
									<div className="text-sm text-primary mb-1">{r.venue}</div>
									<div className="mb-2 flex flex-wrap gap-2">
										{r.tags && r.tags.map(tag => (
											<span key={tag} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">{tag}</span>
										))}
									</div>
									<div className="mb-3 flex-1">{r.desc}</div>
									<a
										href={r.link}
										className="inline-block mt-auto px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark transition"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Paper
									</a>
								</div>
							</div>
						))}
					</div>
				</section> */}

				{/* Featured Projects */}
				{/* <section className="mb-12">
					<h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
						Featured Projects
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{featuredProjects.map((p, idx) => (
							<div key={idx} className="bg-white dark:bg-neutral-900 rounded-lg p-0 shadow flex flex-col overflow-hidden">
								{p.image && (
									<img src={p.image} alt={p.title} className="w-full h-40 object-cover border-b" />
								)}
								<div className="p-5 flex flex-col flex-1">
									<div className="font-semibold text-lg mb-1">{p.title}</div>
									<div className="mb-2 flex flex-wrap gap-2">
										{p.tags.map(tag => (
											<span key={tag} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">{tag}</span>
										))}
									</div>
									<div className="mb-3 flex-1">{p.desc}</div>
									<div className="flex gap-2 mt-auto">
										{p.links && p.links.map(link => (
											<a
												key={link.label}
												href={link.url}
												className="inline-flex items-center px-3 py-1 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark transition text-sm"
												target="_blank"
												rel="noopener noreferrer"
											>
												{link.icon} {link.label}
											</a>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</section> */}

				{/* News Section */}
				<section className="mb-12" aria-labelledby="news-heading">
					<h2
						id="news-heading"
						className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1"
					>
						News
					</h2>
					<ul className="list-disc pl-5 space-y-2">
						{visibleNews.map((item, idx) => (
							<li key={idx}>
								<b>{item.date}:</b> {item.content}
							</li>
						))}
						{!showAllNews && hiddenNews.length > 0 && (
							<li>
								<button
									className="text-primary underline font-medium transition-colors duration-150 hover:text-primary-dark hover:underline hover:opacity-80"
									onClick={() => setShowAllNews(true)}
								>
									▼ Show More
								</button>
							</li>
						)}
						{showAllNews &&
							hiddenNews.map((item, idx) => (
								<li key={visibleNews.length + idx}>
									<b>{item.date}:</b> {item.content}
								</li>
							))}
						{showAllNews && (
							<li>
								<button
									className="text-primary underline font-medium transition-colors duration-150 hover:text-primary-dark hover:underline hover:opacity-80"
									onClick={() => setShowAllNews(false)}
								>
									▲ Show Less
								</button>
							</li>
						)}
					</ul>
				</section>
			</div>
		</main>
	);
}
