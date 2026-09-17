"use client";

import { useEffect, useState, type ReactNode } from "react";

export default function ProfileIconLink({
	href,
	label,
	children,
	className = "",
}: {
	href: string;
	label: string;
	children: ReactNode;
	className?: string;
}) {
	const [hovered, setHovered] = useState(false);
	const [focused, setFocused] = useState(false);
	const [dismissed, setDismissed] = useState(false);

	useEffect(() => {
		if (!hovered && !focused) return;
		function dismissOnEscape(event: KeyboardEvent) {
			if (event.key === "Escape") setDismissed(true);
		}
		document.addEventListener("keydown", dismissOnEscape);
		return () => document.removeEventListener("keydown", dismissOnEscape);
	}, [hovered, focused]);

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`portfolio-link portfolio-profile-icon ${className}`.trim()}
			aria-label={label}
			data-tooltip-dismissed={dismissed}
			onPointerEnter={(event) => {
				if (event.pointerType === "mouse") {
					setHovered(true);
					setDismissed(false);
				}
			}}
			onPointerLeave={() => setHovered(false)}
			onFocus={() => {
				setFocused(true);
				setDismissed(false);
			}}
			onBlur={() => setFocused(false)}
		>
			{children}
			<span className="portfolio-icon-tooltip" aria-hidden="true">{label}</span>
		</a>
	);
}
