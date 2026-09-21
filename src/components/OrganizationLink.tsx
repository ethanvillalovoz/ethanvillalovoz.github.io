import Image from "next/image";
import type { ReactNode } from "react";

export default function OrganizationLink({
	href,
	iconSrc,
	children,
}: {
	href: string;
	iconSrc: string;
	children: ReactNode;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="portfolio-organization-link"
		>
			<Image
				src={iconSrc}
				alt=""
				aria-hidden="true"
				width={16}
				height={16}
				unoptimized
				className="portfolio-organization-mark"
			/>
			<span className="portfolio-link-text portfolio-organization-name">{children}</span>
		</a>
	);
}
