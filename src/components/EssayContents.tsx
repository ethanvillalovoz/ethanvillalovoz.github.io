"use client";

import { useEffect, useState } from "react";

export interface EssayContentItem {
	id: string;
	label: string;
}

interface EssayContentsProps {
	items: readonly EssayContentItem[];
}

export default function EssayContents({ items }: EssayContentsProps) {
	const [activeId, setActiveId] = useState(items[0]?.id ?? "");

	useEffect(() => {
		const sections = items.flatMap(({ id }) => {
			const element = document.getElementById(id);
			return element ? [{ id, element }] : [];
		});

		if (sections.length === 0) {
			return;
		}

		let animationFrame = 0;
		const updateActiveSection = () => {
			const activationLine = Math.min(window.innerHeight * 0.3, 240);
			const atPageEnd =
				Math.ceil(window.scrollY + window.innerHeight) >=
				document.documentElement.scrollHeight - 2;
			let nextId = sections[0].id;

			if (atPageEnd) {
				nextId = sections[sections.length - 1].id;
			} else {
				for (const section of sections) {
					if (section.element.getBoundingClientRect().top > activationLine) {
						break;
					}
					nextId = section.id;
				}
			}

			setActiveId((currentId) => (currentId === nextId ? currentId : nextId));
		};

		const scheduleUpdate = () => {
			if (animationFrame !== 0) {
				return;
			}
			animationFrame = window.requestAnimationFrame(() => {
				animationFrame = 0;
				updateActiveSection();
			});
		};

		updateActiveSection();
		window.addEventListener("scroll", scheduleUpdate, { passive: true });
		window.addEventListener("resize", scheduleUpdate);

		return () => {
			window.removeEventListener("scroll", scheduleUpdate);
			window.removeEventListener("resize", scheduleUpdate);
			if (animationFrame !== 0) {
				window.cancelAnimationFrame(animationFrame);
			}
		};
	}, [items]);

	return (
		<aside className="essay-contents" aria-label="Article contents">
			<p>Contents</p>
			<nav>
				<ol>
					{items.map(({ id, label }) => {
						const isActive = activeId === id;
						return (
							<li key={id}>
								<a
									href={`#${id}`}
									className="portfolio-link essay-contents-link"
									aria-current={isActive ? "location" : undefined}
									onClick={() => setActiveId(id)}
								>
									{label}
								</a>
							</li>
						);
					})}
				</ol>
			</nav>
		</aside>
	);
}
