import type { Metadata } from "next";
import Image from "next/image";
import {
	researchPublications,
	teachingExperiences,
	type ResearchAuthor,
	type ResearchPublication,
} from "@/data/research";

const researchDescription =
	"Publications and teaching by Ethan Villalovoz across robot learning, human-robot interaction, and machine learning for code.";

export const metadata: Metadata = {
	title: "Research",
	description: researchDescription,
	alternates: {
		canonical: "/research/",
	},
	openGraph: {
		title: "Research | Ethan Villalovoz",
		description: researchDescription,
		url: "https://ethanvillalovoz.com/research/",
		siteName: "Ethan Villalovoz",
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: "Research | Ethan Villalovoz",
		description: researchDescription,
		creator: "@ethanvillalovoz",
	},
};

function AuthorList({ authors }: { authors: ResearchAuthor[] }) {
	return (
		<p className="research-authors">
			{authors.map((author, index) => (
				<span key={author.name}>
					{author.href ? (
						<a
							href={author.href}
							target="_blank"
							rel="noopener noreferrer"
							className="portfolio-link"
						>
							{author.name}
						</a>
					) : (
						<strong>{author.name}</strong>
					)}
					{index < authors.length - 1 ? ", " : ""}
				</span>
			))}
		</p>
	);
}

function PublicationRow({ publication }: { publication: ResearchPublication }) {
	return (
		<li className="research-publication work-page-fade">
			<div className="research-publication-media">
				<Image
					src={publication.image}
					alt={publication.imageAlt}
					width={800}
					height={500}
					sizes="(min-width: 760px) 280px, 100vw"
					className="research-publication-image"
				/>
			</div>

			<div className="research-publication-copy">
				<p className="research-publication-meta">
					{publication.venue}, {publication.date}
				</p>
				<h3 className="research-publication-title">
					<a
						href={publication.href}
						target="_blank"
						rel="noopener noreferrer"
						className="portfolio-link"
					>
						{publication.shortTitle}
					</a>
				</h3>
				<p className="research-publication-full-title">{publication.title}</p>
				<AuthorList authors={publication.authors} />
				<p className="research-publication-description">{publication.description}</p>
				<p className="research-publication-contribution">
					<strong>My contribution:</strong> {publication.contribution}
				</p>
				<nav className="research-resource-links" aria-label={`${publication.shortTitle} resources`}>
					{publication.resources.map((resource) => (
						<a
							key={resource.label}
							href={resource.href}
							target="_blank"
							rel="noopener noreferrer"
							className="portfolio-link"
						>
							{resource.label}
						</a>
					))}
				</nav>
			</div>
		</li>
	);
}

export default function ResearchPage() {
	return (
		<main className="research-main">
			<div className="research-container">
				<header className="work-intro work-page-fade">
					<h1>Research</h1>
					<p>Publications and teaching.</p>
				</header>

				<section aria-labelledby="publications-heading">
					<h2 id="publications-heading" className="secondary-section-label">
						Publications
					</h2>
					<ol className="research-publications">
						{researchPublications.map((publication) => (
							<PublicationRow key={publication.title} publication={publication} />
						))}
					</ol>
				</section>

				<section className="research-teaching" aria-labelledby="teaching-heading">
					<h2 id="teaching-heading" className="secondary-section-label">
						Teaching
					</h2>
					<ol className="teaching-list">
						{teachingExperiences.map((experience) => (
							<li key={`${experience.course}-${experience.term}`} className="teaching-row">
								<div>
									<h3>{experience.course}</h3>
									<p className="teaching-role">
										{experience.role}, {experience.institution}
									</p>
								</div>
								<p className="teaching-term">{experience.term}</p>
								<p className="teaching-description">{experience.description}</p>
							</li>
						))}
					</ol>
				</section>
			</div>
		</main>
	);
}
