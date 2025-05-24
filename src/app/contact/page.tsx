"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const contacts = [
	{
		label: "Email",
		value: "ethan.villalovoz@gmail.com",
		href: "mailto:ethan.villalovoz@gmail.com",
		icon: "📧",
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/ethanvillalovoz",
		href: "https://www.linkedin.com/in/ethanvillalovoz/",
		icon: "🔗",
	},
	{
		label: "Twitter",
		value: "@ethanvillalovoz",
		href: "https://twitter.com/ethanvillalovoz",
		icon: "🐦",
	},
	{
		label: "GitHub",
		value: "github.com/ethanvillalovoz",
		href: "https://github.com/ethanvillalovoz",
		icon: "💻",
	},
	{
		label: "Google Scholar",
		value: "scholar.google.com/citations?user=CavKFp4AAAAJ",
		href: "https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
		icon: "🎓",
	},
];

export default function ContactPage() {
	const [bio, setBio] = useState("");

	useEffect(() => {
		fetch("/data/EthanVillalovoz-bio.txt")
			.then((res) => res.text())
			.then((text) => setBio(text));
	}, []);

	return (
		<main className="max-w-5xl mx-auto px-4 py-10">
			<div className="flex items-center justify-between mb-8">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
				>
					Contact
				</motion.h1>
			</div>
			<motion.p
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
				className="text-blue-900 dark:text-primary-light mb-6 text-lg font-medium"
			>
				Please feel free to reach out about research, collaboration, or any
				advice I can help with!
			</motion.p>

			{/* Contact Methods */}
			<section className="mb-10">
				<h2 className="text-xl font-bold mb-4 text-primary">
					Contact Information
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{contacts.map((c) => (
						<a
							key={c.label}
							href={c.href}
							className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary-dark transition text-lg"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="text-2xl">{c.icon}</span>
							<span className="truncate">{c.value}</span>
						</a>
					))}
				</div>
			</section>

			{/* Speaker Headshot and Bio */}
			<section className="mb-10">
				<div className="flex items-center justify-between mb-2">
					<h2 className="text-xl font-bold text-primary">Speaker Bio</h2>
					<a
						href="/data/EthanVillalovoz-bio.txt"
						download
						className="px-3 py-1 rounded bg-primary text-white font-semibold shadow hover:bg-primary-dark transition"
					>
						Download Bio
					</a>
				</div>
				<div className="flex flex-col md:flex-row gap-6 items-start">
					<img
						src="/images/EthanVillalovozPic.jpeg"
						alt="Ethan Villalovoz headshot"
						className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow mb-4 md:mb-0"
					/>
					<pre className="whitespace-pre-wrap bg-neutral-50 dark:bg-neutral-900/30 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 text-base flex-1">
						{bio}
					</pre>
				</div>
			</section>
		</main>
	);
}
