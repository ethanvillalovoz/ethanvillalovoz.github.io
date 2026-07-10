import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
	return (
		<header className="secondary-header work-page-fade">
			<div className="secondary-header-inner">
				<Link href="/" className="secondary-brand maddie-link">
					Ethan Villalovoz
				</Link>

				<div className="secondary-header-actions">
					<nav className="secondary-nav" aria-label="Primary navigation">
						<Link href="/" className="secondary-nav-link maddie-link">
							Home
						</Link>
						<Link href="/work/" className="secondary-nav-link maddie-link" aria-current="page">
							Work
						</Link>
						<a
							href="https://github.com/ethanvillalovoz"
							target="_blank"
							rel="noopener noreferrer"
							className="secondary-nav-link maddie-link"
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
