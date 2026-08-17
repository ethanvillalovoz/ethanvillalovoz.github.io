import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const failures = [];

const requiredPaths = [
	".nvmrc",
	"src/app/page.tsx",
	"src/app/(secondary)/writing/page.tsx",
	"src/app/(secondary)/writing/tests-turn-prompting-into-search/page.tsx",
	"src/app/(secondary)/research/page.tsx",
	"src/components/HomePageClient.tsx",
	"src/data/writing.ts",
	"src/data/research.ts",
	"src/data/site.ts",
	"public/data/EthanVillalovoz-Resume.pdf",
	"public/data/EthanVillalovoz-CV.pdf",
	"public/images/theme/sun.svg",
	"public/images/theme/moon.svg",
	"public/images/identity/favicon-96.png",
	"public/images/identity/favicon-on-dark-96.png",
	"public/visuals/homepage-preview.jpg",
];

const forbiddenPaths = [
	"public/data/cgai_dream_worlds",
	"public/fonts/NHaasGroteskTXPro-55Rg.ttf",
	"public/fonts/NHaasGroteskTXPro-65Md.ttf",
	"src/app/projects",
	"src/app/publications",
	"src/app/teaching",
	"src/app/(secondary)/rag",
	"src/app/(secondary)/work",
	"src/data/projects.ts",
	"src/data/work.ts",
	"src/data/publications.ts",
	"src/data/teaching.ts",
	"tailwind.config.ts",
	"postcss.config.mjs",
	"public/visuals/homepage.jpg",
	"public/visuals/homepage.png",
	"public/data/capstone/index.html",
	"public/data/capstone/static",
	"public/data/capstone",
	"public/images/projects/intellicrawl-thumb.jpg",
	"public/scenariolens",
	"public/metricdrive",
	"scripts/sync-scenariolens.mjs",
	"public/images/projects/self-driving-demo.mp4",
	"public/images/projects/self-driving-poster.webp",
	"public/images/projects/intellicrawl-demo.mp4",
	"public/images/projects/intellicrawl-poster.webp",
	"public/images/projects/sentisync-demo.mp4",
	"public/images/projects/sentisync-poster.webp",
	"public/images/projects/rag-demo.mp4",
	"public/images/projects/rag-poster.webp",
	"public/images/projects/bodegen-results-thumbnail.webp",
	"public/images/projects/social-triangles-thumbnail.webp",
	"public/data/research/2025_WSU_Bayesian_Prompt_Optimization/paper.pdf",
	"public/data/research/2025_WSU_Bayesian_Prompt_Optimization/ICSE_BO_figure.pdf",
	"public/data/research/2025_WSU_Bayesian_Prompt_Optimization/bode-gen.bib",
	"public/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/social-triangles-study-conditions.jpg",
	"public/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/social-triangles-threat-results.jpg",
	"public/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.bib",
];

const exists = async (relativePath) => {
	try {
		await access(path.join(root, relativePath));
		return true;
	} catch {
		return false;
	}
};

for (const requiredPath of requiredPaths) {
	if (!(await exists(requiredPath))) failures.push(`Missing required path: ${requiredPath}`);
}

for (const forbiddenPath of forbiddenPaths) {
	if (await exists(forbiddenPath)) failures.push(`Stale path still present: ${forbiddenPath}`);
}

const writingDataPath = path.join(root, "src/data/writing.ts");
const imageDataPaths = [writingDataPath];

for (const dataPath of imageDataPaths) {
	const relativeDataPath = path.relative(root, dataPath);
	if (!(await exists(relativeDataPath))) continue;

	const data = await readFile(dataPath, "utf8");
	const imagePaths = [...data.matchAll(/image:\s*["']([^"']+)["']/g)].map(
		(match) => match[1],
	);
	const videoPaths = [...data.matchAll(/video:\s*["']([^"']+)["']/g)].map(
		(match) => match[1],
	);

	for (const mediaPath of [...imagePaths, ...videoPaths]) {
		if (!(await exists(path.join("public", mediaPath)))) {
			failures.push(`${relativeDataPath} references missing media: ${mediaPath}`);
		}
	}
}

const textRoots = ["src", "docs", "README.md", "CONTRIBUTING.md", "next.config.ts"];
const forbiddenMarkers = [
	["NHaasGrotesk", "Bundled Neue Haas font reference"],
	["maddie-", "Prototype-era CSS prefix"],
	["G-PYVRSFMDRL", "Foreign analytics identifier"],
	["Nerfies: Deformable Neural Radiance Fields", "Stale NeRFies page title"],
];

const textFiles = [];
const collectTextFiles = async (relativePath) => {
	const absolutePath = path.join(root, relativePath);
	if (!(await exists(relativePath))) return;

	const entries = await readdir(absolutePath, { withFileTypes: true }).catch(() => null);
	if (!entries) {
		textFiles.push(relativePath);
		return;
	}

	for (const entry of entries) {
		const childPath = path.join(relativePath, entry.name);
		if (entry.isDirectory()) await collectTextFiles(childPath);
		else if (/\.(?:css|html|js|json|md|mjs|ts|tsx)$/.test(entry.name)) textFiles.push(childPath);
	}
};

for (const textRoot of textRoots) await collectTextFiles(textRoot);

for (const textFile of textFiles) {
	const contents = await readFile(path.join(root, textFile), "utf8");
	for (const [marker, label] of forbiddenMarkers) {
		if (contents.includes(marker)) failures.push(`${label} found in ${textFile}`);
	}
}

const sitemapPath = "public/sitemap.xml";
if (await exists(sitemapPath)) {
	const sitemap = await readFile(path.join(root, sitemapPath), "utf8");
	const requiredUrls = [
		"https://ethanvillalovoz.com/",
		"https://ethanvillalovoz.com/writing/",
		"https://ethanvillalovoz.com/writing/tests-turn-prompting-into-search/",
		"https://ethanvillalovoz.com/research/",
	];
	const excludedUrls = [
		"/work/",
		"/projects/",
		"/publications/",
		"/teaching/",
		"/rag/",
		"/gaussian-splatting-physics/",
		"/scenariolens/",
		"/metricdrive/",
	];
	const requiredImages = [
		"https://ethanvillalovoz.com/images/EthanVillalovozPic-optimized.jpg",
		"https://ethanvillalovoz.com/images/projects/bodegen-method-thumbnail.webp",
		"https://ethanvillalovoz.com/images/projects/social-triangles-threat-thumbnail.webp",
	];

	for (const url of requiredUrls) {
		if (!sitemap.includes(`<loc>${url}</loc>`)) failures.push(`Sitemap is missing ${url}`);
	}

	for (const route of excludedUrls) {
		const legacyUrl = `https://ethanvillalovoz.com${route}`;
		if (sitemap.includes(`<loc>${legacyUrl}</loc>`)) {
			failures.push(`Sitemap still includes legacy route: ${route}`);
		}
	}

	for (const imageUrl of requiredImages) {
		if (!sitemap.includes(`<image:loc>${imageUrl}</image:loc>`)) {
			failures.push(`Sitemap is missing image: ${imageUrl}`);
		}
	}

	for (const ignoredSignal of ["<changefreq>", "<priority>"]) {
		if (sitemap.includes(ignoredSignal)) {
			failures.push(`Sitemap includes ignored crawl hint: ${ignoredSignal}`);
		}
	}
} else {
	failures.push(`Missing required path: ${sitemapPath}`);
}

if (failures.length > 0) {
	console.error("Repository validation failed:\n");
	for (const failure of failures) console.error(`- ${failure}`);
	process.exitCode = 1;
} else {
	console.log("Repository validation passed.");
}
