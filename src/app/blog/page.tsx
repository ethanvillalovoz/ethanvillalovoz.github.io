"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
    {
        slug: "shakespeare-style-transfer",
        title: "What a Tiny Dataset Taught Me About NLP Style Transfer",
        date: "2025-06-10",
        summary: "How I used a T5 transformer to turn modern English into Shakespearean—and why the dataset mattered more than the model.",
    },
	{
		slug: "first-post",
		title: "My First Blog Post",
		date: "2025-06-08",
		summary: "A quick intro to my new blog and what I hope to share.",
	},
];

export default function BlogPage() {
	return (
		<main className="max-w-5xl mx-auto px-4 py-10">
			<header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
				>
					Blog & Journal
				</motion.h1>
				{/* Example: External link, like a Notion or Medium blog */}
				{/* <a
                    href="https://your-blog-platform.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark transition"
                >
                    View on Medium
                </a> */}
			</header>
			<motion.p
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
				className="text-blue-900 dark:text-primary-light mb-6 text-lg font-medium"
			>
				Sharing my journey, research, and lessons learned in AI, robotics, and
				beyond.
			</motion.p>
			<section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
                    Blog Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 shadow flex flex-col gap-2 cursor-pointer transition-transform duration-200 hover:scale-[1.025] hover:shadow-xl"
                            >
                                {/* Optional: Add an image here if you want */}
                                {/* <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded-lg mb-2" /> */}
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <span className="text-xl font-bold text-primary hover:underline">
                                        {post.title}
                                    </span>
                                    <span className="text-xs text-neutral-500 font-semibold ml-2">
                                        {post.date}
                                    </span>
                                </div>
                                <p className="text-neutral-700 dark:text-neutral-300 text-sm mb-2">
                                    {post.summary}
                                </p>
                                {/* Optional: Add tags here if you want */}
                                {/* {post.tags && (
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )} */}
                            </motion.article>
                        </Link>
                    ))}
                </div>
            </section>
		</main>
	);
}
