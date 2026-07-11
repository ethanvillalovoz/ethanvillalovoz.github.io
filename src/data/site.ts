export const site = {
	name: "Ethan Villalovoz",
	url: "https://ethanvillalovoz.com",
	description:
		"Ethan Villalovoz works on robot learning at Georgia Tech and multi-agent systems at Microsoft, with research spanning robotics, AI agents, and human feedback.",
	image: "/images/EthanVillalovozPic-optimized.jpg",
	personId: "https://ethanvillalovoz.com/#ethan-villalovoz",
	socialProfiles: [
		"https://scholar.google.com/citations?user=CavKFp4AAAAJ&hl=en",
		"https://github.com/ethanvillalovoz",
		"https://www.linkedin.com/in/evillalovoz27/",
		"https://x.com/ethanvillalovoz",
		"https://www.youtube.com/@ethanvillalovoz",
	],
} as const;

export const personReference = {
	"@type": "Person",
	"@id": site.personId,
	name: site.name,
	url: `${site.url}/`,
} as const;

export function absoluteUrl(path: string) {
	return new URL(path, `${site.url}/`).toString();
}
