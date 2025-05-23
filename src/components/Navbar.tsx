"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Research", href: "/research" },
	{ name: "Projects", href: "/projects" },
	// { name: "Teaching", href: "/teaching" }, // Uncomment when ready
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

export default function Navbar() {
	return (
		<nav className="w-full bg-gradient-to-r from-primary via-primary-light to-primary-dark dark:from-primary-dark dark:via-primary dark:to-primary-light/80 backdrop-blur border-b border-blue-200 dark:border-blue-900 sticky top-0 z-50 transition-colors shadow-soft">
			<div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
				<div className="text-xl font-extrabold tracking-tight text-blue-900 dark:text-primary-light">
					<Link href="/">My Portfolio</Link>
				</div>
				<div className="flex items-center space-x-6">
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
			</div>
		</nav>
	);
}
