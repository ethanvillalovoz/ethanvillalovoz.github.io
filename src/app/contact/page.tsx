"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const contacts = [
	{
		label: "Email",
		value: "Email",
		href: "mailto:ethan.villalovoz@gmail.com",
		icon: "📧",
	},
	{
		label: "LinkedIn",
		value: "LinkedIn",
		href: "https://www.linkedin.com/in/evillalovoz27/",
		icon: "🔗",
	},
	{
		label: "Twitter",
		value: "Twitter",
		href: "https://x.com/etvillalovoz",
		icon: "🐦",
	},
	{
		label: "GitHub",
		value: "GitHub",
		href: "https://github.com/ethanvillalovoz",
		icon: "💻",
	},
	{
		label: "Google Scholar",
		value: "Google Scholar",
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
			<header className="flex items-center justify-between mb-8">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
				>
					Contact
				</motion.h1>
			</header>
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
				<h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
					Contact Information
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{contacts.map((c) => (
						<div key={c.label} className="relative flex items-center gap-3">
							<a
								href={c.href}
								className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary-dark transition text-lg flex-1"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="text-2xl">{c.icon}</span>
								<span className="truncate">{c.value}</span>
								{c.label === "Email" && <CopyEmailButton email={c.value} />}
							</a>
						</div>
					))}
				</div>
			</section>

			{/* Speaker Headshot and Bio */}
			<section className="mb-10">
				<div className="flex items-center justify-between mb-2">
					<h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
						Speaker Bio
					</h2>
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

// CopyEmailButton component
function CopyEmailButton({ email }: { email: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async (e: React.MouseEvent) => {
		e.preventDefault(); // Prevent link navigation
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch {
			// fallback or error handling
		}
	};

	return (
		<span className="relative ml-2">
			<button
				onClick={handleCopy}
				className="p-1 rounded-full hover:bg-primary-light/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
				type="button"
				aria-label="Copy email address"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="text-white opacity-80"
				>
					<rect
						x="9"
						y="9"
						width="13"
						height="13"
						rx="2"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
					/>
					<rect
						x="3"
						y="3"
						width="13"
						height="13"
						rx="2"
						strokeWidth="2"
						stroke="currentColor"
						fill="none"
					/>
				</svg>
			</button>
			{copied && (
				<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs rounded px-2 py-1 shadow z-10 animate-fade-in-out whitespace-nowrap">
					Copied!
				</span>
			)}
		</span>
	);
}
