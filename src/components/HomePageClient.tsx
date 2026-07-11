"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { FiMapPin } from "react-icons/fi";
import ThemeToggle from "@/components/ThemeToggle";

const previousExperience = [
	{
		title: "CMU Robotics Institute",
		href: "https://www.ri.cmu.edu/",
		iconSrc: "/images/organizations/cmu.png",
		role: "Summer Scholar",
		date: "2024",
	},
	{
		title: "Google",
		href: "https://about.google/",
		iconSrc: "/images/organizations/google.png",
		role: "STEP Intern",
		date: "2023",
	},
	{
		title: "Oregon State",
		href: "https://oregonstate.edu/",
		iconSrc: "/images/organizations/oregon-state.png",
		role: "NSF REU Fellow",
		date: "2022",
	},
];

const profileLinks = [
	{ label: "Resume", href: "/data/EthanVillalovoz-Resume.pdf" },
	{ label: "CV", href: "/data/EthanVillalovoz-CV.pdf" },
	{ label: "GitHub", href: "https://github.com/ethanvillalovoz" },
	{
		label: "Scholar",
		href: "https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/evillalovoz27/",
	},
	{ label: "X", href: "https://x.com/ethanvillalovoz" },
	{ label: "YouTube", href: "https://www.youtube.com/@ethanvillalovoz" },
];

const contactEmail = "ethan.villalovoz@gmail.com";

const selectedWork = [
	{
		title: "ScenarioLens",
		href: "/scenariolens/",
		date: "2026",
		description:
			"An autonomy-evaluation tool for ranking and inspecting long-tail driving scenarios with interpretable risk and baseline-failure metrics.",
	},
	{
		title: "BODE-GEN",
		href: "https://arxiv.org/abs/2512.15076",
		date: "arXiv 2025",
		description:
			"Bayesian prompt optimization for test-driven code generation, evaluated across 164 HumanEval+ tasks and three code models.",
	},
	{
		title: "Social Triangles",
		href: "https://ieeexplore.ieee.org/abstract/document/10342372",
		date: "IROS 2023",
		description:
			"How multi-robot formation geometry shapes human navigation and approach behavior.",
	},
];

function TextLink({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="portfolio-link"
		>
			{children}
		</a>
	);
}

function OrganizationLink({
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
			<span className="portfolio-link portfolio-organization-name">{children}</span>
		</a>
	);
}

function ExperienceRow({
	title,
	href,
	iconSrc,
	role,
	date,
	index,
}: {
	title: string;
	href: string;
	iconSrc: string;
	role: string;
	date: string;
	index: number;
}) {
	return (
		<article
			className="portfolio-experience-row portfolio-fade"
			style={{ animationDelay: `${320 + index * 70}ms` }}
		>
			<h3 className="portfolio-row-title">
				<OrganizationLink href={href} iconSrc={iconSrc}>
					{title}
				</OrganizationLink>
			</h3>
			<p className="portfolio-row-role">{role}</p>
			<p className="portfolio-row-date">{date}</p>
		</article>
	);
}

function SelectedWorkRow({
	title,
	href,
	date,
	description,
	index,
}: {
	title: string;
	href: string;
	date: string;
	description: string;
	index: number;
}) {
	return (
		<article
			className="portfolio-work-item portfolio-fade"
			style={{ animationDelay: `${660 + index * 90}ms` }}
		>
			<div className="portfolio-work-heading">
				<h3 className="portfolio-work-title">
					<TextLink href={href}>{title}</TextLink>{" "}
					<span className="portfolio-work-date">({date})</span>
				</h3>
			</div>
			<p className="portfolio-work-description">{description}</p>
		</article>
	);
}

export default function HomePageClient() {
	const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

	useEffect(() => {
		if (copyState === "idle") return;

		const timeout = window.setTimeout(() => setCopyState("idle"), 2000);
		return () => window.clearTimeout(timeout);
	}, [copyState]);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(contactEmail);
			setCopyState("copied");
		} catch {
			setCopyState("failed");
		}
	};

	return (
		<main className="portfolio-site">
			<div className="portfolio-theme-corner portfolio-fade portfolio-fade-one">
				<ThemeToggle />
			</div>

			<div className="portfolio-container portfolio-fade portfolio-fade-one">
				<header className="portfolio-intro">
					<div className="portfolio-identity">
						<div className="portfolio-identity-copy">
							<h1 className="portfolio-h1">Ethan Villalovoz</h1>
							<p className="portfolio-location">
								<FiMapPin aria-hidden="true" />
								<span>Sacramento, California, United States</span>
							</p>
						</div>

						<Image
							src="/images/EthanVillalovozPic-optimized.jpg"
							alt="Portrait of Ethan Villalovoz"
							width={88}
							height={88}
							quality={90}
							priority
							className="portfolio-profile-image"
						/>
					</div>

					<div className="portfolio-fade portfolio-fade-two">
						<p className="portfolio-p">
							I work on robot learning at{" "}
							<OrganizationLink
								href="https://www.gatech.edu/"
								iconSrc="/images/organizations/gatech.ico"
							>
								Georgia Tech
							</OrganizationLink>{" "}
							and multi-agent systems at{" "}
							<OrganizationLink
								href="https://www.microsoft.com/"
								iconSrc="/images/organizations/microsoft.ico"
							>
								Microsoft
							</OrganizationLink>
							. I&apos;m interested in how robots learn from imperfect human feedback, reason under uncertainty, and align their behavior with human intent.
						</p>

						<p className="portfolio-p portfolio-contact-copy">
							You can reach me at{" "}
							<span className="portfolio-copy-email">
								<button
									type="button"
									className="portfolio-link portfolio-copy-button"
									onClick={copyEmail}
									aria-label={`Copy ${contactEmail} to clipboard`}
									title="Copy email address"
								>
									{contactEmail}
								</button>
								.
								<span
									className="portfolio-copy-status"
									role="status"
									aria-live="polite"
									aria-atomic="true"
								>
									{copyState === "copied" ? "Copied" : copyState === "failed" ? "Copy failed" : ""}
								</span>
							</span>
						</p>

						<nav className="portfolio-profile-links" aria-label="Ethan's profiles and contact links">
							{profileLinks.map((link) => (
								<span key={link.label} className="portfolio-profile-link-item">
									<TextLink href={link.href}>{link.label}</TextLink>
								</span>
							))}
						</nav>
					</div>
				</header>

				<section className="portfolio-section" aria-labelledby="previously-heading">
					<h2 id="previously-heading" className="portfolio-section-label portfolio-fade portfolio-fade-three">
						Previously
					</h2>
					<div className="portfolio-experience-list">
						{previousExperience.map((item, index) => (
							<ExperienceRow key={item.title} {...item} index={index} />
						))}
					</div>
				</section>

				<section className="portfolio-section" aria-labelledby="selected-work-heading">
					<h2
						id="selected-work-heading"
						className="portfolio-section-label portfolio-fade"
						style={{ animationDelay: "580ms" }}
					>
						Selected work
					</h2>
					<div className="portfolio-work-list">
						{selectedWork.map((item, index) => (
							<SelectedWorkRow key={item.title} {...item} index={index} />
						))}
					</div>

					<div
						className="portfolio-more-content portfolio-fade"
						style={{ animationDelay: "980ms" }}
					>
						<a href="/work/" className="portfolio-link">
							More work
						</a>
					</div>
				</section>
			</div>
		</main>
	);
}
