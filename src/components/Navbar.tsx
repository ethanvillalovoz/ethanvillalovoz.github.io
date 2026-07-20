"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
	const pathname = usePathname();
	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "Writing", href: "/writing/" },
		{ label: "Work", href: "/work/" },
		{ label: "Research", href: "/research/" },
	];

	return (
		<header className="secondary-header work-page-fade">
			<div className="secondary-header-inner">
				<Link href="/" className="secondary-brand portfolio-link">
					Ethan Villalovoz
				</Link>

				<div className="secondary-header-actions">
					<nav className="secondary-nav" aria-label="Primary navigation">
						{navItems.map((item) => {
							const isCurrent =
								item.href === "/"
									? pathname === "/"
									: pathname.startsWith(item.href);

							return (
								<Link
									key={item.href}
									href={item.href}
									className="secondary-nav-link portfolio-link"
									aria-current={isCurrent ? "page" : undefined}
								>
									{item.label}
								</Link>
							);
						})}
						<a
							href="https://github.com/ethanvillalovoz"
							target="_blank"
							rel="noopener noreferrer"
							className="secondary-nav-link portfolio-link"
						>
							GitHub
						</a>
					</nav>

					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
