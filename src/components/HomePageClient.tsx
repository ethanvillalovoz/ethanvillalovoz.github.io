"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { FaFileLines, FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGooglescholar, SiX, SiYoutube } from "react-icons/si";
import OrganizationLink from "@/components/OrganizationLink";
import PublicationResources from "@/components/PublicationResources";
import PublicationAuthors from "@/components/PublicationAuthors";
import TeachingSection from "@/components/TeachingSection";
import TextLink from "@/components/TextLink";
import ThemeToggle from "@/components/ThemeToggle";
import { researchPublications, type ResearchPublication } from "@/data/research";

const experiences = [
	{
		title: "Microsoft",
		href: "https://www.microsoft.com/",
		iconSrc: "/images/organizations/microsoft.ico",
		role: "Software Engineer Intern",
		date: "May 2026 – Jul 2026",
	},
	// Temporarily hidden from Experience; uncomment this entry to restore it.
	/* {
		title: "Washington State University",
		href: "https://wsu.edu/",
		iconSrc: "/images/organizations/washington-state.svg",
		role: "Undergraduate Research Assistant",
		date: "Jan 2024 – May 2025",
	}, */
	{
		title: "CMU Robotics Institute",
		href: "https://www.ri.cmu.edu/",
		iconSrc: "/images/organizations/cmu-ri.svg",
		role: "Summer Scholar",
		date: "Jun 2024 – Aug 2024",
	},
	{
		title: "Google",
		href: "https://about.google/",
		iconSrc: "/images/organizations/google.png",
		role: "STEP Intern",
		date: "May 2023 – Aug 2023",
	},
	{
		title: "Oregon State University",
		href: "https://oregonstate.edu/",
		iconSrc: "/images/organizations/oregon-state-crest.svg",
		role: "NSF REU Fellow",
		date: "Jun 2022 – Aug 2022",
	},
];

const profileLinks = [
	{ label: "CV", icon: FaFileLines, href: "/data/EthanVillalovoz-CV.pdf" },
	{ label: "GitHub", icon: SiGithub, href: "https://github.com/ethanvillalovoz" },
	{
		label: "Scholar",
		icon: SiGooglescholar,
		href: "https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
	},
	{
		label: "LinkedIn",
		icon: FaLinkedin,
		href: "https://www.linkedin.com/in/ethanvillalovoz/",
	},
	{ label: "X", icon: SiX, href: "https://x.com/ethanvillalovoz" },
	{ label: "YouTube", icon: SiYoutube, href: "https://www.youtube.com/@ethanvillalovoz" },
];

const contactEmail = "ethan.villalovoz@gmail.com";

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
	const stints = [{ role, date }];
	return (
		<article
			className="portfolio-experience-group portfolio-fade"
			style={{ animationDelay: `${380 + index * 45}ms` }}
		>
			<h3 className="portfolio-row-title">
				<OrganizationLink href={href} iconSrc={iconSrc}>
					{title}
				</OrganizationLink>
			</h3>
			<div className="portfolio-experience-stints">
				{stints.map((stint) => (
					<div className="portfolio-experience-row" key={stint.date}>
						<p className="portfolio-row-role">{stint.role}</p>
						<p className="portfolio-row-date">{stint.date}</p>
					</div>
				))}
			</div>
		</article>
	);
}

function PublicationRow({
	publication,
	index,
}: {
	publication: ResearchPublication;
	index: number;
}) {
	return (
		<article
			className="portfolio-work-item portfolio-fade"
			style={{ animationDelay: `${160 + index * 45}ms` }}
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
					sizes="(max-width: 599px) calc(100vw - 48px), (max-width: 759px) 196px, 250px"
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
					{publication.venue} {publication.date}
				</p>
				<PublicationResources resources={publication.resources} label={`${publication.shortTitle} resources`} />
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
		<main className="portfolio-site" id="top" tabIndex={-1}>
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
							<nav className="portfolio-profile-links" aria-label="Ethan's profiles">
								{profileLinks.map(({ label, href, icon: Icon }) => (
									<a key={label} href={href} target="_blank" rel="noopener noreferrer" className="portfolio-link" aria-label={label} title={label === "X" ? "X" : undefined}>
										{label === "X" ? (
											<span className="portfolio-link-text"><Icon className="portfolio-profile-mark portfolio-profile-mark-only" aria-hidden="true" /></span>
										) : (
											<><Icon className="portfolio-profile-mark" data-profile={label} aria-hidden="true" /><span className="portfolio-link-text">{label}</span></>
										)}
									</a>
								))}
							</nav>

						</div>
					</div>

					<Image
						src="/images/EthanVillalovozPic-optimized.jpg"
						alt="Portrait of Ethan Villalovoz"
						width={104}
						height={104}
						sizes="(max-width: 599px) 80px, 104px"
						quality={90}
						priority
						className="portfolio-profile-image"
					/>

					<div className="portfolio-intro-copy portfolio-fade portfolio-fade-two">
						<p className="portfolio-p">
							I&apos;m an M.S. student in Computer Science at{" "}
							<OrganizationLink
								href="https://www.gatech.edu/"
								iconSrc="/images/organizations/gatech.ico"
							>
								Georgia Tech
							</OrganizationLink>
							. I&apos;m interested in how robots can understand people and the physical world, make decisions under uncertainty, and adapt through interaction. Previously, I built and evaluated enterprise AI agent systems at{" "}
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
									<span className="portfolio-link-text">{contactEmail}</span>
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

					</div>
				</header>

				<section
					id="publications"
					className="portfolio-section portfolio-publications-section"
					aria-labelledby="publications-heading"
				>
					<h2
						id="publications-heading"
						className="portfolio-section-label portfolio-fade"
						style={{ animationDelay: "120ms" }}
					>
						Publications
					</h2>
					<div className="portfolio-work-list">
						{researchPublications.map((publication, index) => (
							<PublicationRow
								key={publication.title}
								publication={publication}
								index={index}
							/>
						))}
					</div>
				</section>

				<section className="portfolio-section" id="experience" aria-labelledby="experience-heading">
					<h2
						id="experience-heading"
						className="portfolio-section-label portfolio-fade"
						style={{ animationDelay: "340ms" }}
					>
						Experience
					</h2>
					<div className="portfolio-experience-list">
						{experiences.map((item, index) => (
							<ExperienceRow key={item.title} {...item} index={index} />
						))}
					</div>
				</section>

				<TeachingSection />

				<footer className="portfolio-footer" aria-label="Site footer">
					<p>© {new Date().getFullYear()} Ethan Villalovoz</p>
					<a href="#top" className="portfolio-link" onClick={(event) => {
						event.preventDefault();
						document.getElementById("top")?.focus({ preventScroll: true });
						window.scrollTo({ top: 0, behavior: "auto" });
					}}>
						<span className="portfolio-link-text">Back to top</span>
					</a>
				</footer>
			</div>
		</main>
	);
}
