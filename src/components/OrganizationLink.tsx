import Image from "next/image";
import type { ReactNode } from "react";

export default function OrganizationLink({
	href,
	iconSrc,
	children,
	eager = false,
}: {
	href: string;
	iconSrc: string;
	children: ReactNode;
	eager?: boolean;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="portfolio-organization-link"
		>
			{iconSrc === "/images/organizations/washington-state.svg" ? (
				<span className="portfolio-organization-mark portfolio-organization-mark-wsu" aria-hidden="true" />
			) : <Image
				src={iconSrc}
				alt=""
				aria-hidden="true"
				width={16}
				height={16}
				unoptimized
				loading={eager ? "eager" : "lazy"}
				className="portfolio-organization-mark"
			/>}
			<span className="portfolio-organization-name">
				<span className="portfolio-link-text">{children}</span>
			</span>
		</a>
	);
}
