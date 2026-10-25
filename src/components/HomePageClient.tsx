"use client";

import { FiMapPin } from "react-icons/fi";
import { FaFileLines, FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGooglescholar, SiX, SiYoutube } from "react-icons/si";
import OrganizationLink from "@/components/OrganizationLink";
import PublicationResources from "@/components/PublicationResources";
import PublicationAuthors from "@/components/PublicationAuthors";
import TeachingSection from "@/components/TeachingSection";
import TextLink from "@/components/TextLink";
import ThemeToggle from "@/components/ThemeToggle";
import AnimatedLabel from "@/components/AnimatedLabel";
import Portrait from "@/components/Portrait";
import CopyEmail from "@/components/CopyEmail";
import ResearchMedia from "@/components/research/ResearchMedia";
import { researchPublications, type ResearchPublication } from "@/data/research";

const technologies = {
	csharp: { label: "C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
	dotnet: { label: ".NET", href: "https://dotnet.microsoft.com/" },
	azure: { label: "Azure", href: "https://azure.microsoft.com/" },
	graphql: { label: "GraphQL", href: "https://graphql.org/" },
	python: { label: "Python", href: "https://www.python.org/" },
	numpy: { label: "NumPy", href: "https://numpy.org/" },
	matplotlib: { label: "Matplotlib", href: "https://matplotlib.org/" },
	cpp: { label: "C++", href: "https://isocpp.org/" },
	sql: { label: "SQL", href: "https://www.iso.org/standard/76584.html" },
	html: { label: "HTML", href: "https://html.spec.whatwg.org/" },
	tkinter: { label: "Tkinter", href: "https://docs.python.org/3/library/tkinter.html" },
};

type Technology = keyof typeof technologies;

type Experience = {
	title: string;
	href: string;
	iconSrc: string;
	role: string;
	date: string;
	description: string;
	technologies: Technology[];
};

const experiences: Experience[] = [
	{
		title: "Microsoft",
		href: "https://www.microsoft.com/",
		iconSrc: "/images/organizations/microsoft.ico",
		role: "Software Engineer Intern",
		date: "May 2026 – Jul 2026",
		description: "Built and evaluated an AI-agent prototype for financial close.",
		technologies: ["csharp", "dotnet", "azure", "graphql", "python"],
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
		description: "Implemented Bayesian reward learning using human feedback in simulation.",
		technologies: ["python", "numpy", "matplotlib"],
	},
	{
		title: "Google",
		href: "https://about.google/",
		iconSrc: "/images/organizations/google.png",
		role: "STEP Intern",
		date: "May 2023 – Aug 2023",
		description: "Built data pipelines and dashboards for internal database queue metrics.",
		technologies: ["cpp", "sql", "html"],
	},
	{
		title: "Oregon State University",
		href: "https://oregonstate.edu/",
		iconSrc: "/images/organizations/oregon-state-crest.svg",
		role: "NSF REU Fellow",
		date: "Jun 2022 – Aug 2022",
		description: "Built tools to configure robot formations for human–robot interaction studies.",
		technologies: ["python", "tkinter"],
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


function ProfileLink({ label, href, icon: Icon }: (typeof profileLinks)[number]) {
	return (
		<a key={label} href={href} target="_blank" rel="noopener noreferrer" className="portfolio-link" aria-label={label} title={label === "X" ? "X" : undefined}>
			{label === "X" ? (
				<span className="portfolio-link-text"><Icon className="portfolio-profile-mark portfolio-profile-mark-only" aria-hidden="true" /></span>
			) : (
				<><Icon className="portfolio-profile-mark" data-profile={label} aria-hidden="true" /><AnimatedLabel arrow={false}>{label}</AnimatedLabel></>
			)}
		</a>
	);
}

function ExperienceRow({
	title,
	href,
	iconSrc,
	role,
	date,
	description,
	technologies: technologyKeys,
}: Experience) {
	const stints = [{ role, date }];
	return (
		<article className="portfolio-experience-group">
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
			<div className="portfolio-experience-details">
				<p className="portfolio-experience-description">{description}</p>
				<div className="portfolio-experience-technologies">
					<ul aria-label={`${title} technologies`}>
						{technologyKeys.map((key) => {
							const { label, href } = technologies[key];
							return (
								<li key={key}>
									<a href={href} target="_blank" rel="noopener noreferrer" className="portfolio-link portfolio-technology-link" aria-label={label}>
										<span className="portfolio-link-text">{label}</span>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
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
		<article className="portfolio-work-item">
			<ResearchMedia publication={publication} index={index} />
			<div className="portfolio-work-copy">
				<h3 className="portfolio-work-title">
					<TextLink href={publication.href}>{publication.title}</TextLink>
				</h3>
				<PublicationAuthors
					authors={publication.authors}
					className="portfolio-work-authors"
				/>
				<p className="portfolio-work-venue">
					<a
						href={publication.venue === "IROS" ? `https://${publication.date}.ieee-iros.org/` : "https://arxiv.org/"}
						target="_blank"
						rel="noopener noreferrer"
						className="portfolio-link portfolio-venue-link"
					>
					<span className="portfolio-link-text">{publication.venue} {publication.date}</span>
					</a>
				</p>
				<PublicationResources resources={publication.resources} label={`${publication.shortTitle} resources`} shortTitle={publication.shortTitle} />
				<p className="portfolio-work-description">{publication.description}</p>
			</div>
		</article>
	);
}

export default function HomePageClient() {
	return (
		<main className="portfolio-site" id="top">
			<div className="portfolio-theme-corner">
				<ThemeToggle />
			</div>

			<div className="portfolio-container">
				<header className="portfolio-intro">
					<div className="portfolio-identity">
						<div className="portfolio-identity-copy">
							<h1 className="portfolio-h1"><span id="intro-heading" className="portfolio-top-target" tabIndex={-1}>Ethan Villalovoz</span></h1>
							<p className="portfolio-focus">Software engineering&nbsp;· Machine learning&nbsp;· Robotics</p>
							<p className="portfolio-location">
								<FiMapPin aria-hidden="true" />
								<span>Sacramento, California</span>
							</p>
						</div>
					</div>

					<nav className="portfolio-profile-links" aria-label="Ethan's profiles">
						{profileLinks.slice(0, -2).map((profile) => <ProfileLink key={profile.label} {...profile} />)}
						<span className="portfolio-profile-pair">
							{profileLinks.slice(-2).map((profile) => <ProfileLink key={profile.label} {...profile} />)}
						</span>
					</nav>

                    <Portrait />

					<div className="portfolio-intro-copy">
						<p className="portfolio-p">
							I&apos;m an M.S. student in Computer Science at{" "}
							<OrganizationLink
								href="https://www.gatech.edu/"
								iconSrc="/images/organizations/gatech.ico"
								eager
							>
								Georgia Tech
							</OrganizationLink>
							, specializing in Computational Perception &amp; Robotics. I&apos;m interested in how robots can understand people and the physical world.
						</p>

						<p className="portfolio-p portfolio-contact-copy">
							You can reach me at{" "}
							<CopyEmail />
						</p>
					</div>
				</header>

				<section className="portfolio-section" id="experience" aria-labelledby="experience-heading">
					<h2
						id="experience-heading"
						className="portfolio-section-label"
					>
						Experience
					</h2>
					<div className="portfolio-experience-list">
						{experiences.map((item) => (
							<ExperienceRow key={item.title} {...item} />
						))}
					</div>
				</section>

				<section
					id="publications"
					className="portfolio-section portfolio-publications-section"
					aria-labelledby="publications-heading"
				>
					<h2
						id="publications-heading"
						className="portfolio-section-label"
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

				<TeachingSection />

				<footer className="portfolio-footer" aria-label="Site footer">
					<p>© {new Date().getFullYear()} Ethan Villalovoz</p>
					<CopyEmail punctuation={false} />
					<a href="#top" className="portfolio-link" onClick={(event) => {
						event.preventDefault();
						const heading = document.getElementById("intro-heading");
						if (heading) {
							// Keyboard and assistive activation have no pointer click count.
							heading.dataset.focusOrigin = event.detail === 0 ? "keyboard" : "pointer";
							heading.focus({ preventScroll: true });
						}
						window.scrollTo({ top: 0, behavior: event.detail === 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
					}}>
						<span className="portfolio-link-text">Back to top</span>
					</a>
				</footer>
			</div>
		</main>
	);
}
