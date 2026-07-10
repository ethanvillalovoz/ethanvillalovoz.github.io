const footerLinks = [
	{ label: "Resume", href: "/data/EthanVillalovoz-Resume.pdf" },
	{ label: "CV", href: "/data/EthanVillalovoz-CV.pdf" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/ethanvillalovoz/" },
	{
		label: "Scholar",
		href: "https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
	},
	{ label: "X", href: "https://x.com/ethanvillalovoz" },
];

export default function Footer() {
	return (
		<footer className="secondary-footer work-page-fade">
			<div className="secondary-footer-inner">
				<p>&copy; {new Date().getFullYear()} Ethan Villalovoz</p>
				<nav className="secondary-footer-links" aria-label="Additional links">
					{footerLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							className="secondary-footer-link maddie-link"
						>
							{link.label}
						</a>
					))}
				</nav>
			</div>
		</footer>
	);
}
