"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { SiMedium } from "react-icons/si"; // Import Medium icon

// Tag to emoji/icon mapping for visual emphasis (matching your projects page)
const tagIcons: Record<string, string> = {
	Personal: "👤",
	Introduction: "👋",
	ML: "🤖",
	Robotics: "🤖",
	Research: "🔬",
	Academic: "🎓",
	Tutorials: "📝",
	Career: "💼",
	AI: "🧠",
	Reflection: "💭",
};

const posts = [
	{
		slug: "flask-app-to-live-site",
		title: "🚀 From Flask App to Live Site",
		date: "2025-08-01",
		summary:
			"My journey through the Meta x MLH Production Engineering Fellowship, building a production-grade web application from scratch.",
		tags: ["Career", "Tutorials"],
	},
	{
		slug: "welcome",
		title: "Welcome to My Blog",
		date: "2025-07-30",
		summary: "A quick intro to my new blog and what I hope to share.",
		tags: ["Personal", "Introduction"],
	},
	// Uncomment these when you're ready to add more posts
	// {
	// 	slug: "coming-soon-1",
	// 	title: "Machine Learning in Robotics",
	// 	date: "Coming soon",
	// 	summary: "Exploring the intersection of reinforcement learning and physical systems.",
	// 	tags: ["ML", "Robotics", "Research"],
	// },
	// {
	// 	slug: "coming-soon-2",
	// 	title: "From WSU to Georgia Tech",
	// 	date: "Coming soon",
	// 	summary: "Reflections on my academic journey and lessons learned along the way.",
	// 	tags: ["Academic", "Personal"],
	// },
];

export default function BlogPage() {
	return (
		<main className="max-w-5xl mx-auto px-4 py-10">
			<header className="flex items-center justify-between mb-4">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent mb-2 sm:mb-0"
				>
					Blog & Journal
				</motion.h1>
				<a
					href="https://medium.com/@ethan.villalovoz"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center px-4 py-2 rounded bg-black text-white font-semibold shadow hover:bg-gray-800 transition"
				>
					<SiMedium className="mr-2" />
					Medium
				</a>
			</header>
            <motion.p
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
				className="text-blue-900 dark:text-primary-light mb-6 text-lg font-medium"
			>
				Sharing my journey, research, and lessons learned in AI, robotics, and beyond.
			</motion.p>
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
					Latest Posts
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
					{posts.map((post) => (
						<motion.article
							key={post.slug}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 shadow transition-transform duration-200 hover:scale-[1.025] hover:shadow-xl border border-transparent dark:border-neutral-700/20"
						>
							<Link
								href={post.date === "Coming soon" ? "#" : `/blog/${post.slug}`}
								className="no-underline"
							>
								<h3 className="text-xl font-bold text-primary mb-1">
									{post.title}
								</h3>
							</Link>

							<div className="flex items-center gap-1 text-xs text-neutral-500 font-medium mb-3">
								<FaCalendarAlt className="w-3 h-3" />
								<span>{post.date}</span>
							</div>

							<p className="text-neutral-700 dark:text-neutral-300 text-sm mb-4">
								{post.summary}
							</p>

							{/* Tags with icons */}
							{post.tags && (
								<div className="flex flex-wrap gap-2 mb-4">
									{post.tags.map((tag) => (
										<span
											key={tag}
											className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
										>
											<span>{tagIcons[tag] || "🔖"}</span>
											{tag}
										</span>
									))}
								</div>
							)}

							{/* Read more link */}
							{post.date !== "Coming soon" ? (
								<Link
									href={`/blog/${post.slug}`}
									className="inline-flex items-center text-primary font-medium text-sm no-underline hover:underline"
								>
									Read more{" "}
									<FaArrowRight className="ml-1 w-3 h-3" />
								</Link>
							) : (
								<span className="text-neutral-500 text-sm italic">
									Coming soon
								</span>
							)}
						</motion.article>
					))}
				</div>

				{/* Stay Updated Section */}
				<motion.section
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="bg-pink-50/50 dark:bg-pink-900/10 p-6 md:p-8 rounded-xl shadow-sm border border-pink-200/30 dark:border-pink-700/20 mt-12"
				>
					<h3 className="text-xl font-bold text-primary mb-2">Stay Updated</h3>
					<p className="text-neutral-600 dark:text-neutral-300 mb-4">
						I&apos;m just getting started with this blog. More posts about AI, robotics
						research, and my grad school journey coming soon!
					</p>

					<Link
						href="/contact"
						className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary-dark transition-colors"
					>
						Contact Me
					</Link>
				</motion.section>
			</section>
		</main>
	);
}
