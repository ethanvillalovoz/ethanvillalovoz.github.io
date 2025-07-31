"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaYoutube,
  FaDownload
} from "react-icons/fa";
import { SiGooglescholar, SiGmail } from "react-icons/si";

const contacts = [
	{
		label: "Email",
		value: "ethan.villalovoz@gmail.com",
		href: "mailto:ethan.villalovoz@gmail.com",
		icon: <SiGmail className="text-2xl" />,
		color: "bg-red-600 hover:bg-red-700"
	},
	{
		label: "LinkedIn",
		value: "LinkedIn",
		href: "https://www.linkedin.com/in/evillalovoz27/",
		icon: <FaLinkedin className="text-2xl" />,
		color: "bg-blue-600 hover:bg-blue-700"
	},
	{
		label: "Twitter",
		value: "Twitter",
		href: "https://x.com/etvillalovoz",
		icon: <FaTwitter className="text-2xl" />,
		color: "bg-blue-400 hover:bg-blue-500"
	},
	{
		label: "GitHub",
		value: "GitHub",
		href: "https://github.com/ethanvillalovoz",
		icon: <FaGithub className="text-2xl" />,
		color: "bg-gray-800 hover:bg-gray-900"
	},
	{
		label: "YouTube",
		value: "YouTube",
		href: "https://www.youtube.com/channel/UCgn7lZDWYZz0i7W_gv6xmaQ",
		icon: <FaYoutube className="text-2xl" />,
		color: "bg-red-700 hover:bg-red-800"
	},
	{
		label: "Google Scholar",
		value: "Google Scholar",
		href: "https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
		icon: <SiGooglescholar className="text-2xl" />,
		color: "bg-green-600 hover:bg-green-700"
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
				<h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
					Contact Information
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{contacts.map((c) => (
						<motion.div 
							key={c.label}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, ease: "easeOut" }}
							className="relative"
						>
							<a
								href={c.href}
								className={`flex items-center gap-3 px-5 py-3.5 rounded-lg ${c.color} text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-lg w-full`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="flex items-center justify-center w-8 h-8">{c.icon}</span>
								<span className="truncate">{c.label === "Email" ? c.value : c.label}</span>
								{c.label === "Email" && <CopyEmailButton email={c.value} />}
							</a>
						</motion.div>
					))}
				</div>
			</section>
			
			{/* Speaker Headshot and Bio */}
			<section className="mb-10">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent border-b-4 border-primary/30 inline-block pb-1">
						Speaker Bio
					</h2>
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href="/data/EthanVillalovoz-bio.txt"
						download
						className="px-4 py-2 rounded-md bg-primary text-white font-semibold shadow-md hover:bg-primary-dark transition-colors flex items-center gap-2"
					>
						<FaDownload className="text-sm" />
						Download Bio
					</motion.a>
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
