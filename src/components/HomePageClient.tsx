"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { FiMapPin } from "react-icons/fi";
import PublicationAuthors from "@/components/PublicationAuthors";
import ThemeToggle from "@/components/ThemeToggle";
import { researchPublications, type ResearchPublication } from "@/data/research";

const previousExperience = [
	{
		title: "Microsoft",
		href: "https://www.microsoft.com/",
		iconSrc: "/images/organizations/microsoft.ico",
		role: "Software Engineer Intern",
		date: "2026",
	},
	{
		title: "Washington State University",
		href: "https://wsu.edu/",
		iconSrc: "/images/organizations/washington-state.svg",
		role: "Undergraduate Research Assistant",
		date: "2024–2025",
	},
	{
		title: "CMU Robotics Institute",
		href: "https://www.ri.cmu.edu/",
		iconSrc: "/images/organizations/cmu-ri.svg",
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
		href: "https://www.linkedin.com/in/ethanvillalovoz/",
	},
	{ label: "X", href: "https://x.com/ethanvillalovoz" },
	{ label: "YouTube", href: "https://www.youtube.com/@ethanvillalovoz" },
];

const contactEmail = "ethan.villalovoz@gmail.com";

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
			style={{ animationDelay: `${160 + index * 45}ms` }}
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

function SelectedPublicationRow({
	publication,
	index,
}: {
	publication: ResearchPublication;
	index: number;
}) {
	return (
		<article
			className="portfolio-work-item portfolio-fade"
			style={{ animationDelay: `${340 + index * 45}ms` }}
		>
			<a
				href={publication.href}
				target="_blank"
				rel="noopener noreferrer"
				className="portfolio-work-media"
				aria-label={`View ${publication.title}`}
			>
				<Image
					src={publication.image}
					alt={publication.imageAlt}
					width={800}
					height={500}
					quality={90}
					loading={index === 0 ? "eager" : "lazy"}
					sizes="(max-width: 599px) calc(100vw - 48px), 196px"
					className="portfolio-work-image"
				/>
			</a>
			<div className="portfolio-work-copy">
				<h3 className="portfolio-work-title">
					<TextLink href={publication.href}>{publication.title}</TextLink>
				</h3>
				<PublicationAuthors
					authors={publication.authors}
					className="portfolio-work-authors"
				/>
				<p className="portfolio-work-venue">
					{publication.venue}, {publication.date}
				</p>
				<nav
					className="portfolio-work-resources"
					aria-label={`${publication.shortTitle} resources`}
				>
					{publication.resources.map((resource, resourceIndex) => (
						<span key={resource.label} className="portfolio-work-resource-item">
							<TextLink href={resource.href}>{resource.label}</TextLink>
							{resourceIndex < publication.resources.length - 1 ? (
								<span className="portfolio-work-resource-separator" aria-hidden="true">
									{" / "}
								</span>
							) : null}
						</span>
					))}
				</nav>
				<p className="portfolio-work-description">{publication.description}</p>
			</div>
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
							I&apos;m an M.S. student in Computer Science at{" "}
							<OrganizationLink
								href="https://www.gatech.edu/"
								iconSrc="/images/organizations/gatech.ico"
							>
								Georgia Tech
							</OrganizationLink>
							, where I work on robot learning. I&apos;m interested in how robots can understand the physical world and the people they interact with. Previously, I built and evaluated enterprise AI agent systems at{" "}
							<OrganizationLink
								href="https://www.microsoft.com/"
								iconSrc="/images/organizations/microsoft.ico"
							>
								Microsoft
							</OrganizationLink>
							.
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

				<section
					className="portfolio-section portfolio-publications-section"
					aria-labelledby="selected-work-heading"
				>
					<h2
						id="selected-work-heading"
						className="portfolio-section-label portfolio-fade"
						style={{ animationDelay: "300ms" }}
					>
						Selected publications
					</h2>
					<div className="portfolio-work-list">
						{researchPublications.map((publication, index) => (
							<SelectedPublicationRow
								key={publication.title}
								publication={publication}
								index={index}
							/>
						))}
					</div>

					<div
						className="portfolio-more-content portfolio-fade"
						style={{ animationDelay: "500ms" }}
					>
						<a href="/research/" className="portfolio-link">
							More work
						</a>
					</div>
				</section>
			</div>
		</main>
	);
}
