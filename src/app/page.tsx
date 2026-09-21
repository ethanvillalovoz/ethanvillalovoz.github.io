import type { Metadata } from "next";
import { publicationsJsonLd } from "@/data/publication-schema";
import HomePageClient from "@/components/HomePageClient";
import { absoluteUrl, personReference, site } from "@/data/site";

export const metadata: Metadata = {
	alternates: {
		canonical: "/",
	},
};

export default function HomePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "ProfilePage",
						"@id": `${site.url}/#profile-page`,
						url: `${site.url}/`,
						name: site.name,
						description: site.description,
						mainEntity: {
							...personReference,
							givenName: "Ethan",
							familyName: "Villalovoz",
							url: `${site.url}/`,
							description: site.description,
							image: {
								"@type": "ImageObject",
								contentUrl: absoluteUrl(site.image),
								width: 900,
								height: 900,
							},
							jobTitle: "M.S. student in Computer Science",
							affiliation: {
								"@type": "CollegeOrUniversity",
								name: "Georgia Institute of Technology",
								url: "https://www.gatech.edu/",
							},
							alumniOf: {
								"@type": "CollegeOrUniversity",
								name: "Washington State University",
								url: "https://wsu.edu/",
							},
							homeLocation: {
								"@type": "Place",
								name: "Sacramento, California, United States",
							},
							knowsAbout: [
								"Robot learning",
								"Human-robot interaction",
								"Multi-agent systems",
								"AI agents",
								"Machine learning evaluation",
								"Bayesian optimization",
							],
							sameAs: site.socialProfiles,
						},
					}),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsJsonLd) }}
			/>
			<HomePageClient />
		</>
	);
}
