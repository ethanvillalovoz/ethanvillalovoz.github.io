"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Research", href: "/research" },
	{ name: "Projects", href: "/projects" },
	// { name: "Blog", href: "/blog" },
	{ name: "Teaching", href: "/teaching" }, // Uncomment when ready
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="w-full bg-gradient-to-r from-primary via-primary-light to-primary-dark dark:from-primary-dark dark:via-primary dark:to-primary-dark/80 backdrop-blur border-b border-primary-dark dark:border-primary-dark sticky top-0 z-50 transition-colors shadow-soft">
			<div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
				{/* Logo */}
				<div className="flex items-center gap-2">
					<Image
						src="/images/ai_robot_icon.jpeg"
						alt="AI and Robotics Logo"
						width={40}
						height={40}
						priority
					/>
				</div>

				{/* Desktop Nav */}
				<div className="hidden md:flex items-center space-x-6">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="rounded-2xl px-4 py-2 text-blue-900 dark:text-primary-light bg-white/60 dark:bg-blue-900/40 shadow-soft hover:bg-gradient-to-r hover:from-primary hover:to-primary-light hover:text-white dark:hover:from-primary-dark dark:hover:to-primary font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60"
						>
							{link.name}
						</Link>
					))}
					<ThemeToggle />
				</div>

				{/* Hamburger Button (Mobile) */}
				<button
					className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary"
					aria-label="Open menu"
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((open) => !open)}
				>
					<span className="block w-6 h-0.5 bg-blue-900 dark:bg-primary-light mb-1"></span>
					<span className="block w-6 h-0.5 bg-blue-900 dark:bg-primary-light mb-1"></span>
					<span className="block w-6 h-0.5 bg-blue-900 dark:bg-primary-light"></span>
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			{menuOpen && (
				<div className="md:hidden bg-white dark:bg-blue-900/90 px-4 pb-4 pt-2 shadow-lg">
					<div className="flex flex-col gap-y-2">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="rounded-2xl px-4 py-2 text-blue-900 dark:text-primary-light bg-white/80 dark:bg-blue-900/40 shadow-soft hover:bg-gradient-to-r hover:from-primary hover:to-primary-light hover:text-white dark:hover:from-primary-dark dark:hover:to-primary font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60"
								onClick={() => setMenuOpen(false)}
							>
								{link.name}
							</Link>
						))}
						<ThemeToggle />
					</div>
				</div>
			)}
		</nav>
	);
}
