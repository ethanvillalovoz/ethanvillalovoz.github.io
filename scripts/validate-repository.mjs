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
	"src/app/(secondary)/rag/page.tsx",
	"src/components/HomePageClient.tsx",
	"src/data/work.ts",
	"src/data/writing.ts",
	"src/data/research.ts",
	"scripts/sync-scenariolens.mjs",
	"src/data/site.ts",
	"public/scenariolens/index.html",
	"public/scenariolens/run.json",
	"public/metricdrive/index.html",
	"public/data/capstone/report.pdf",
	"public/data/capstone/figures/system-architecture.png",
	"public/data/capstone/figures/original-prototype.webp",
	"public/data/EthanVillalovoz-Resume.pdf",
	"public/data/EthanVillalovoz-CV.pdf",
	"public/images/theme/sun.svg",
	"public/images/theme/moon.svg",
	"public/images/identity/favicon-96.png",
	"public/images/identity/favicon-on-dark-96.png",
	"public/images/projects/self-driving-poster.webp",
	"public/images/projects/self-driving-demo.mp4",
	"public/images/projects/intellicrawl-poster.webp",
	"public/images/projects/intellicrawl-demo.mp4",
	"public/images/projects/sentisync-poster.webp",
	"public/images/projects/sentisync-demo.mp4",
	"public/images/projects/rag-poster.webp",
	"public/images/projects/rag-demo.mp4",
	"public/metricdrive/assets/metricdrive-explorer.png",
	"public/visuals/homepage.jpg",
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
	"public/data/capstone/index.html",
	"public/data/capstone/static",
	"public/images/projects/intellicrawl-thumb.jpg",
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

const scenarioLensRunPath = "public/scenariolens/run.json";
if (await exists(scenarioLensRunPath)) {
	try {
		const run = JSON.parse(await readFile(path.join(root, scenarioLensRunPath), "utf8"));
		if (run.format !== "scenariolens.explorer_run.v1") {
			failures.push(`${scenarioLensRunPath} has an unexpected format`);
		}
		if (run.ready !== true || run.summary?.scenario_count !== 1193) {
			failures.push(`${scenarioLensRunPath} is not the completed 1,193-scenario public run`);
		}
		if (!Array.isArray(run.reports) || run.reports.length < 7) {
			failures.push(`${scenarioLensRunPath} is missing the v1 evidence report set`);
		}
		if (!run.reports?.some((report) => report.report_id === "selector_holdout_993")) {
			failures.push(`${scenarioLensRunPath} is missing the frozen selector holdout`);
		}
		for (const report of run.reports ?? []) {
			if (!String(report.path).startsWith("https://github.com/ethanvillalovoz/scenariolens/blob/")) {
				failures.push(`${scenarioLensRunPath} contains a non-public report link: ${report.path}`);
			}
		}
	} catch {
		failures.push(`${scenarioLensRunPath} is not valid JSON`);
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
		"https://ethanvillalovoz.com/images/projects/self-driving-poster.webp",
		"https://ethanvillalovoz.com/images/projects/intellicrawl-poster.webp",
		"https://ethanvillalovoz.com/images/projects/sentisync-poster.webp",
		"https://ethanvillalovoz.com/images/projects/rag-poster.webp",
		"https://ethanvillalovoz.com/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-method.png",
		"https://ethanvillalovoz.com/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/social-triangles-study-conditions.jpg",
		"https://ethanvillalovoz.com/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/social-triangles-threat-results.jpg",
		"https://ethanvillalovoz.com/data/capstone/figures/system-architecture.png",
		"https://ethanvillalovoz.com/data/capstone/figures/original-prototype.webp",
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
