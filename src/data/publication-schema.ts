import { researchPublications } from "@/data/research";
import { absoluteUrl, personReference, site } from "@/data/site";

export const publicationsJsonLd = {
	"@context": "https://schema.org",
	"@type": "CollectionPage",
	"@id": `${site.url}/#publications`,
	url: `${site.url}/#publications`,
	name: `Publications | ${site.name}`,
	description: "Publications by Ethan Villalovoz across robotics and machine learning for code.",
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
