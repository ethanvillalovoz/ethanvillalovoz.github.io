export const site = {
	name: "Ethan Villalovoz",
	url: "https://ethanvillalovoz.com",
	description:
		"Ethan Villalovoz works on robot learning at Georgia Tech and most recently built enterprise AI agent systems at Microsoft, with research spanning robotics, AI agents, and human feedback.",
	image: "/images/EthanVillalovozPic-optimized.jpg",
	personId: "https://ethanvillalovoz.com/#ethan-villalovoz",
	socialProfiles: [
		"https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
		"https://github.com/ethanvillalovoz",
		"https://www.linkedin.com/in/ethanvillalovoz/",
		"https://x.com/ethanvillalovoz",
		"https://www.youtube.com/@ethanvillalovoz",
	],
} as const;

// Explicitly identify the site when shared; do not let previews select a paper figure.
// Keep the existing small square mark rather than introducing a large preview banner.
export const siteShareImage = {
	url: "/images/identity/share-icon-purple-180.png",
	width: 180,
	height: 180,
	type: "image/png",
	alt: "White lowercase e on a purple mesh gradient for Ethan Villalovoz",
};

export const personReference = {
	"@type": "Person",
	"@id": site.personId,
	name: site.name,
	url: `${site.url}/`,
} as const;

export function absoluteUrl(path: string) {
	return new URL(path, `${site.url}/`).toString();
}
