import type { Metadata } from "next";
import Image from "next/image";
import PublicationAuthors from "@/components/PublicationAuthors";
import { absoluteUrl, personReference, site } from "@/data/site";
import {
	researchPublications,
	teachingExperiences,
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
		title: `Research | ${site.name}`,
		description: researchDescription,
		url: `${site.url}/research/`,
		siteName: site.name,
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

const researchCollectionJsonLd = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	"@id": `${site.url}/research/#collection`,
	url: `${site.url}/research/`,
	name: `Research | ${site.name}`,
	description: researchDescription,
	author: personReference,
	mainEntity: {
		"@type": "ItemList",
		numberOfItems: researchPublications.length,
		itemListElement: researchPublications.map((publication, index) => ({
			"@type": "ListItem",
			position: index + 1,
			url: publication.href,
			item: {
				"@type": "ScholarlyArticle",
				headline: publication.title,
				name: publication.shortTitle,
				url: publication.href,
				description: publication.description,
				datePublished: publication.datePublished,
				identifier: publication.identifier,
				image: absoluteUrl(publication.image),
				author: publication.authors.map((author) =>
					author.isEthan
						? personReference
						: {
								"@type": "Person",
								name: author.schemaName,
								...(author.href ? { url: author.href } : {}),
							},
				),
			},
		})),
	},
};

function PublicationRow({
	publication,
	index,
}: {
	publication: ResearchPublication;
	index: number;
}) {
	return (
		<li className="research-publication work-page-fade">
			<a
				href={publication.href}
				target="_blank"
				rel="noopener noreferrer"
				className="research-publication-media"
				aria-label={`View ${publication.title}`}
			>
				<Image
					src={publication.image}
					alt={publication.imageAlt}
					width={800}
					height={500}
					quality={90}
					sizes="(min-width: 760px) 280px, 100vw"
					loading={index < 2 ? "eager" : "lazy"}
					className="research-publication-image"
				/>
			</a>

			<div className="research-publication-copy">
				<h3 className="research-publication-title">
					<a
						href={publication.href}
						target="_blank"
						rel="noopener noreferrer"
						className="portfolio-link"
					>
						{publication.title}
					</a>
				</h3>
				<PublicationAuthors
					authors={publication.authors}
					className="research-authors"
				/>
				<p className="research-publication-meta">
					{publication.venue}, {publication.date}
				</p>
				<nav className="research-resource-links" aria-label={`${publication.shortTitle} resources`}>
					{publication.resources.map((resource, resourceIndex) => (
						<span key={resource.label} className="research-resource-item">
							<a
								href={resource.href}
								target="_blank"
								rel="noopener noreferrer"
								className="portfolio-link research-resource-link"
							>
								{resource.label}
							</a>
							{resourceIndex < publication.resources.length - 1 ? (
								<span className="research-resource-separator" aria-hidden="true">
									{" / "}
								</span>
							) : null}
						</span>
					))}
				</nav>
				<p className="research-publication-description">{publication.description}</p>
			</div>
		</li>
	);
}

export default function ResearchPage() {
	return (
		<>
			<script
				type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(researchCollectionJsonLd) }}
				/>
				<main className="research-main">
					<div className="research-container">
						<header className="work-intro work-page-fade">
							<h1>Research</h1>
						</header>

						<section aria-labelledby="publications-heading">
							<h2 id="publications-heading" className="secondary-section-label">
								Publications
							</h2>
							<ol className="research-publications">
								{researchPublications.map((publication, index) => (
									<PublicationRow
										key={publication.title}
										publication={publication}
										index={index}
									/>
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
									</li>
								))}
							</ol>
						</section>
					</div>
				</main>
		</>
	);
}
