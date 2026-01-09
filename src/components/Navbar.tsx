"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaApple } from "react-icons/fa6";

const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "Publications", href: "/publications" },
	// { name: "Projects", href: "/projects" },
	{ name: "Teaching", href: "/teaching" },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (path: string) => pathname === path || pathname === `${path}/`;

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled || menuOpen ? "glass" : "bg-transparent"
			}`}
		>
			<div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-3 group z-50">
					<Image
						src="/images/website_icon.png"
						alt="Ethan Villalovoz Logo"
						width={28}
						height={28}
						className="object-contain dark:invert opacity-90 group-hover:opacity-100 transition-opacity"
					/>
					<span className="font-semibold text-lg tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
						Ethan Villalovoz
					</span>
				</Link>

				{/* Desktop Nav Links */}
				<div className="hidden md:flex items-center space-x-6">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`text-[13px] font-medium transition-colors duration-200 ${
								isActive(link.href)
									? "text-foreground font-semibold"
									: "text-neutral-500 hover:text-foreground dark:text-neutral-400 dark:hover:text-foreground"
							}`}
						>
							{link.name}
						</Link>
					))}
					<a
						href="/macos"
						className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-foreground text-background text-[13px] font-medium hover:opacity-90 transition-opacity"
					>
						<FaApple className="mb-0.5" />
						macOS
					</a>
				</div>

				{/* Mobile Hamburger Button */}
				<button
					className="md:hidden relative w-10 h-10 flex justify-center items-center focus:outline-none z-50"
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span
						className={`absolute h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ease-out ${
							menuOpen ? "rotate-45" : "-translate-y-1.5"
						}`}
					/>
					<span
						className={`absolute h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ease-out ${
							menuOpen ? "opacity-0" : "opacity-100"
						}`}
					/>
					<span
						className={`absolute h-0.5 w-5 bg-foreground rounded-full transition-all duration-300 ease-out ${
							menuOpen ? "-rotate-45" : "translate-y-1.5"
						}`}
					/>
				</button>
			</div>

			{/* Mobile Dropdown Menu */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50"
					>
						<div className="px-6 pb-8 pt-4 flex flex-col gap-4 items-center">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className={`text-lg font-medium transition-colors ${
										isActive(link.href)
											? "text-foreground"
											: "text-neutral-500 dark:text-neutral-400"
									}`}
									onClick={() => setMenuOpen(false)}
								>
									{link.name}
								</Link>
							))}
							<a
								href="/macos"
								className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity mt-2"
								onClick={() => setMenuOpen(false)}
							>
								<FaApple className="mb-0.5" />
								macOS
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
