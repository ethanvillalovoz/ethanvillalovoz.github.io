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
	"src/app/(secondary)/work/page.tsx",
	"src/app/(secondary)/research/page.tsx",
	"src/components/HomePageClient.tsx",
	"src/data/work.ts",
	"src/data/writing.ts",
	"src/data/research.ts",
	"src/data/site.ts",
	"public/scenariolens/index.html",
	"public/metricdrive/index.html",
	"public/data/capstone/index.html",
	"public/data/EthanVillalovoz-Resume.pdf",
	"public/data/EthanVillalovoz-CV.pdf",
	"public/images/theme/sun.svg",
	"public/images/theme/moon.svg",
	"public/images/identity/favicon-96.png",
	"public/images/identity/favicon-on-dark-96.png",
	"public/metricdrive/assets/metricdrive-explorer.png",
	"public/visuals/homepage.jpg",
	"public/data/capstone/static/images/figures/rag-pipeline.webp",
	"public/data/capstone/static/images/figures/rag-query-input.webp",
	"public/data/capstone/static/images/figures/rag-retrieval-processing.webp",
	"public/data/capstone/static/images/figures/rag-generated-answer.webp",
	"public/data/capstone/static/images/figures/rag-system-architecture.webp",
	"public/data/capstone/static/images/figures/rag-feature-overview.webp",
];

const forbiddenPaths = [
	"public/data/cgai_dream_worlds",
	"public/fonts/NHaasGroteskTXPro-55Rg.ttf",
	"public/fonts/NHaasGroteskTXPro-65Md.ttf",
	"src/app/projects",
	"src/app/publications",
	"src/app/teaching",
	"src/data/projects.ts",
	"src/data/publications.ts",
	"src/data/teaching.ts",
	"tailwind.config.ts",
	"postcss.config.mjs",
	"public/visuals/homepage.png",
	"public/data/capstone/static/images/figures/fig_1.png",
	"public/data/capstone/static/images/figures/figure_2_1.png",
	"public/data/capstone/static/images/figures/figure_2_2.png",
	"public/data/capstone/static/images/figures/figure_2_3.png",
	"public/data/capstone/static/images/figures/figure_2_4.png",
	"public/data/capstone/static/images/figures/figure_2_5.png",
	"public/data/capstone/static/images/figures/figure_2_6.png",
	"public/data/capstone/static/images/figures/figure_3.png",
	"public/data/capstone/static/images/figures/figure_4.png",
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

const stripUrlSuffix = (value) => value.split("#", 1)[0].split("?", 1)[0];
const isRemoteOrRoute = (value) =>
	/^(?:https?:|mailto:|tel:|data:|javascript:|#|\/\/)/.test(value) ||
	(value.startsWith("/") && !path.extname(stripUrlSuffix(value)));

const micrositeFiles = [
	"public/scenariolens/index.html",
	"public/metricdrive/index.html",
	"public/data/capstone/index.html",
];

for (const relativeHtmlPath of micrositeFiles) {
	const absoluteHtmlPath = path.join(root, relativeHtmlPath);
	if (!(await exists(relativeHtmlPath))) continue;

	const html = await readFile(absoluteHtmlPath, "utf8");
	const requiredMetadata = [
		'<meta name="description"',
		'<meta name="author"',
		'<meta name="robots"',
		'<meta property="og:locale"',
		'<meta name="twitter:creator"',
		'<link rel="canonical"',
		'<script type="application/ld+json">',
	];

	for (const marker of requiredMetadata) {
		if (!html.includes(marker)) {
			failures.push(`${relativeHtmlPath} is missing metadata marker: ${marker}`);
		}
	}

	const structuredDataBlocks = [
		...html.matchAll(/<script type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/g),
	];
	for (const [, structuredData] of structuredDataBlocks) {
		try {
			JSON.parse(structuredData);
		} catch {
			failures.push(`${relativeHtmlPath} contains invalid JSON-LD`);
		}
	}

	const references = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map(
		(match) => match[1],
	);

	for (const reference of references) {
		if (isRemoteOrRoute(reference)) continue;

		const cleanReference = stripUrlSuffix(reference);
		const assetPath = cleanReference.startsWith("/")
			? path.join(root, "public", cleanReference)
			: path.resolve(path.dirname(absoluteHtmlPath), cleanReference);

		try {
			await access(assetPath);
		} catch {
			failures.push(`${relativeHtmlPath} references missing asset: ${reference}`);
		}
	}
}

const ragHtmlPath = "public/data/capstone/index.html";
if (await exists(ragHtmlPath)) {
	const ragHtml = await readFile(path.join(root, ragHtmlPath), "utf8");
	const figureTags = [
		...ragHtml.matchAll(/<img\b[^>]*src=["'][^"']*\/figures\/[^"']+["'][^>]*>/g),
	].map((match) => match[0]);

	if (figureTags.length === 0) failures.push(`${ragHtmlPath} has no project figures`);

	for (const tag of figureTags) {
		for (const attribute of ["width", "height", "loading", "decoding"]) {
			if (!new RegExp(`\\b${attribute}=["'][^"']+["']`).test(tag)) {
				failures.push(`${ragHtmlPath} figure is missing ${attribute}: ${tag}`);
			}
		}
		if (!/\bloading=["']lazy["']/.test(tag)) {
			failures.push(`${ragHtmlPath} figure is not lazy-loaded: ${tag}`);
		}
	}

	for (const staleOrigin of [
		"fonts.googleapis.com",
		"cdnjs.cloudflare.com/ajax/libs/font-awesome",
		"cdn.jsdelivr.net/gh/jpswalsh/academicons",
	]) {
		if (ragHtml.includes(staleOrigin)) {
			failures.push(`${ragHtmlPath} still loads unused third-party asset: ${staleOrigin}`);
		}
	}
}

const workDataPath = path.join(root, "src/data/work.ts");
const writingDataPath = path.join(root, "src/data/writing.ts");
const imageDataPaths = [workDataPath, writingDataPath];

for (const dataPath of imageDataPaths) {
	const relativeDataPath = path.relative(root, dataPath);
	if (!(await exists(relativeDataPath))) continue;

	const data = await readFile(dataPath, "utf8");
	const imagePaths = [...data.matchAll(/image:\s*["']([^"']+)["']/g)].map(
		(match) => match[1],
	);

	for (const imagePath of imagePaths) {
		if (!(await exists(path.join("public", imagePath)))) {
			failures.push(`${relativeDataPath} references missing image: ${imagePath}`);
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
		"https://ethanvillalovoz.com/work/",
		"https://ethanvillalovoz.com/research/",
		"https://ethanvillalovoz.com/rag/",
		"https://ethanvillalovoz.com/scenariolens/",
		"https://ethanvillalovoz.com/metricdrive/",
	];
	const excludedUrls = ["/projects/", "/publications/", "/teaching/", "/gaussian-splatting-physics/"];
	const requiredImages = [
		"https://ethanvillalovoz.com/images/EthanVillalovozPic-optimized.jpg",
		"https://ethanvillalovoz.com/scenariolens/assets/scenariolens-explorer.png",
		"https://ethanvillalovoz.com/metricdrive/assets/metricdrive-explorer.png",
		"https://ethanvillalovoz.com/data/research/2025_WSU_Bayesian_Prompt_Optimization/ICSE_BO_figure.png",
		"https://ethanvillalovoz.com/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/STAL_Multi_Robot_Formations.png",
		"https://ethanvillalovoz.com/data/capstone/static/images/figures/rag-pipeline.webp",
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
