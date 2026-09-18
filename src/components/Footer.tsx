import type { IconType } from "react-icons";
import { FaFileLines, FaLinkedin } from "react-icons/fa6";
import { SiGooglescholar, SiX } from "react-icons/si";
import ProfileIconLink from "@/components/ProfileIconLink";

const footerLinks = [
	{ label: "CV", href: "/data/EthanVillalovoz-CV.pdf" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/ethanvillalovoz/" },
	{
		label: "Scholar",
		href: "https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
	},
	{ label: "X", href: "https://x.com/ethanvillalovoz" },
];

const footerIcons: Partial<Record<string, IconType>> = {
	CV: FaFileLines,
	LinkedIn: FaLinkedin,
	Scholar: SiGooglescholar,
	X: SiX,
};

export default function Footer() {
	return (
		<footer className="secondary-footer work-page-fade">
			<div className="secondary-footer-inner">
				<p>&copy; {new Date().getFullYear()} Ethan Villalovoz</p>
				<nav className="secondary-footer-links" aria-label="Additional links">
					{footerLinks.map((link) => {
						const Icon = footerIcons[link.label];
						if (Icon) {
							return (
								<ProfileIconLink key={link.label} href={link.href} label={link.label} className="secondary-footer-link">
									<Icon aria-hidden="true" />
								</ProfileIconLink>
							);
						}
						return (
							<a
								key={link.label}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="secondary-footer-link portfolio-link"
							>
								{link.label}
							</a>
						);
					})}
				</nav>
			</div>
		</footer>
	);
}
