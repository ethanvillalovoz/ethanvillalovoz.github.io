import type { ReactNode } from "react";

export default function TextLink({ href, children }: { href: string; children: ReactNode }) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className="portfolio-link">
			<span className="portfolio-link-text">{children}</span>
		</a>
	);
}
