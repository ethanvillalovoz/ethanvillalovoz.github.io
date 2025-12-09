"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const leftLinks = [
	{ name: "Home", href: "/" },
	{ name: "Research", href: "/research" },
];
const rightLinks = [
	{ name: "Projects", href: "/projects" },
	{ name: "Teaching", href: "/teaching" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<nav
			className="w-full bg-gradient-to-r from-primary via-primary-light to-primary-dark dark:from-primary-dark dark:via-primary dark:to-primary-dark/80 backdrop-blur border-b border-primary-dark dark:border-primary-dark sticky top-0 z-50 transition-colors shadow-soft"
			role="navigation"
			aria-label="Main navigation"
		>
			<div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
				{/* Hamburger Button (Mobile) */}
				<button
					className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary"
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					aria-expanded={menuOpen}
					aria-controls="mobile-menu"
					onClick={() => setMenuOpen((open) => !open)}
				>
					<span className={`block w-6 h-0.5 rounded transition-all duration-200 mb-1 ${menuOpen ? "rotate-45 translate-y-1.5" : ""} bg-blue-900 dark:bg-primary-light`}></span>
					<span className={`block w-6 h-0.5 rounded transition-all duration-200 mb-1 ${menuOpen ? "opacity-0" : ""} bg-blue-900 dark:bg-primary-light`}></span>
					<span className={`block w-6 h-0.5 rounded transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""} bg-blue-900 dark:bg-primary-light`}></span>
				</button>

				{/* Desktop Nav */}
				<div className="hidden md:flex flex-1 items-center justify-between">
					<div className="flex-1 flex items-center space-x-6 justify-end">
						{leftLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								aria-current={pathname === link.href ? "page" : undefined}
								className={`rounded-2xl px-4 py-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60 shadow-soft bg-white/60 dark:bg-blue-900/40 hover:bg-gradient-to-r hover:from-primary hover:to-primary-light hover:text-white dark:hover:from-primary-dark dark:hover:to-primary
									${pathname === link.href ? "ring-2 ring-primary bg-gradient-to-r from-primary to-primary-light text-white dark:from-primary-dark dark:to-primary" : "text-blue-900 dark:text-primary-light"}`}
							>
								{link.name}
							</Link>
						))}
					</div>
					{/* Logo Centered */}
					<div className="flex-shrink-0 flex items-center justify-center px-6">
						<Link href="/">
							<span className="sr-only">Home</span>
							<Image
								src="/images/ai_robot_icon.jpeg"
								alt="AI and Robotics Logo"
								width={40}
								height={40}
								priority
								className="rounded-full border-2 border-primary shadow"
							/>
						</Link>
					</div>
					<div className="flex-1 flex items-center space-x-6 justify-start">
						{rightLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								aria-current={pathname === link.href ? "page" : undefined}
								className={`rounded-2xl px-4 py-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60 shadow-soft bg-white/60 dark:bg-blue-900/40 hover:bg-gradient-to-r hover:from-primary hover:to-primary-light hover:text-white dark:hover:from-primary-dark dark:hover:to-primary
									${pathname === link.href ? "ring-2 ring-primary bg-gradient-to-r from-primary to-primary-light text-white dark:from-primary-dark dark:to-primary" : "text-blue-900 dark:text-primary-light"}`}
							>
								{link.name}
							</Link>
						))}
						<ThemeToggle />
					</div>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			{menuOpen && (
				<div
					id="mobile-menu"
					className="md:hidden bg-white dark:bg-blue-900/90 px-4 pb-4 pt-2 shadow-lg border-b border-primary-dark dark:border-primary-dark animate-fade-in"
				>
					<div className="flex flex-col gap-y-2">
						{[...leftLinks, ...rightLinks].map((link) => (
							<Link
								key={link.name}
								href={link.href}
								aria-current={pathname === link.href ? "page" : undefined}
								className={`rounded-2xl px-4 py-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/60 shadow-soft bg-white/80 dark:bg-blue-900/40 hover:bg-gradient-to-r hover:from-primary hover:to-primary-light hover:text-white dark:hover:from-primary-dark dark:hover:to-primary
									${pathname === link.href ? "ring-2 ring-primary bg-gradient-to-r from-primary to-primary-light text-white dark:from-primary-dark dark:to-primary" : "text-blue-900 dark:text-primary-light"}`}
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
