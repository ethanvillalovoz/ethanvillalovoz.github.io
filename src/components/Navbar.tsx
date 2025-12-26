"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Research", href: "/research" },
	{ name: "Projects", href: "/projects" },
	{ name: "Teaching", href: "/teaching" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	const isActive = (path: string) => pathname === path || pathname === `${path}/`;

	return (
		<nav
			className="w-full bg-background/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 sticky top-0 z-50"
			role="navigation"
			aria-label="Main navigation"
		>
			<div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
				{/* Logo & Desktop Links */}
				<div className="flex items-center gap-8">
					<Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
						<span className="sr-only">Home</span>
						<Image
							src="/images/website_icon.png"
							alt="Ethan Villalovoz Logo"
							width={32}
							height={32}
							priority
							className="object-contain dark:invert"
						/>
					</Link>

					{/* Desktop Nav Links */}
					<div className="hidden md:flex items-center space-x-6">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								aria-current={isActive(link.href) ? "page" : undefined}
								className={`text-sm font-medium transition-colors hover:text-primary dark:hover:text-primary
								${isActive(link.href) ? "text-primary font-semibold" : "text-neutral-500 dark:text-neutral-400"}`}
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>

				{/* Right Side: Desktop Toggle & Mobile Hamburger */}
				<div className="flex items-center gap-4">
					{/* Location Display (Desktop) */}
					<div className="hidden md:flex items-center gap-2 text-neutral-500 dark:text-neutral-400 select-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
							<circle cx="12" cy="10" r="3" />
						</svg>
						<span className="text-sm font-medium">
							Sacramento, California, United States
						</span>
					</div>

					{/* Hamburger Button (Mobile) */}
					<button
						className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-primary ml-auto"
						aria-label={menuOpen ? "Close menu" : "Open menu"}
						aria-expanded={menuOpen}
						aria-controls="mobile-menu"
						onClick={() => setMenuOpen((open) => !open)}
					>
						<span className={`block w-6 h-0.5 rounded transition-all duration-200 mb-1 ${menuOpen ? "rotate-45 translate-y-1.5" : ""} bg-foreground`}></span>
						<span className={`block w-6 h-0.5 rounded transition-all duration-200 mb-1 ${menuOpen ? "opacity-0" : ""} bg-foreground`}></span>
						<span className={`block w-6 h-0.5 rounded transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""} bg-foreground`}></span>
					</button>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			{menuOpen && (
				<div
					id="mobile-menu"
					className="md:hidden bg-background px-6 pb-6 pt-2 border-b border-neutral-200 dark:border-neutral-800 animate-fade-in"
				>
					<div className="flex flex-col gap-y-4">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								aria-current={isActive(link.href) ? "page" : undefined}
								className={`text-lg font-medium transition-colors hover:text-primary dark:hover:text-primary
									${isActive(link.href) ? "text-primary" : "text-neutral-500 dark:text-neutral-400"}`}
								onClick={() => setMenuOpen(false)}
							>
								{link.name}
							</Link>
						))}
						{/* Location Display (Mobile) */}
						<div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 select-none pt-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
								<circle cx="12" cy="10" r="3" />
							</svg>
							<span className="text-lg font-medium">
								Sacramento, California, United States
							</span>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
