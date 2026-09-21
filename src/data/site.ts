export const site = {
	name: "Ethan Villalovoz",
	url: "https://ethanvillalovoz.com",
	description:
		"Ethan Villalovoz is a CS master's student at Georgia Tech interested in robots that understand people and the physical world, make decisions under uncertainty, and adapt through interaction.",
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
// Apple treats this sub-150px image as a compact icon. A 180px image creates a large card.
// Keep the Apple touch icon separately at 180px and the X summary image at 512px.
export const siteShareImage = {
	url: "/images/identity/icon-circle-v4-96.png",
	width: 96,
	height: 96,
	type: "image/png",
	alt: "White lowercase e on a black circle for Ethan Villalovoz",
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
