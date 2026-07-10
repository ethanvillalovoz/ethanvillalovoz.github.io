import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const failures = [];

const requiredPaths = [
	"src/app/page.tsx",
	"src/app/(secondary)/writing/page.tsx",
	"src/app/(secondary)/writing/tests-turn-prompting-into-search/page.tsx",
	"src/app/(secondary)/work/page.tsx",
	"src/app/(secondary)/research/page.tsx",
	"src/components/HomePageClient.tsx",
	"src/data/work.ts",
	"src/data/writing.ts",
	"src/data/research.ts",
	"public/scenariolens/index.html",
	"public/metricdrive/index.html",
	"public/data/capstone/index.html",
	"public/data/EthanVillalovoz-Resume.pdf",
	"public/data/EthanVillalovoz-CV.pdf",
	"public/images/theme/sun.svg",
	"public/images/theme/moon.svg",
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

	for (const url of requiredUrls) {
		if (!sitemap.includes(`<loc>${url}</loc>`)) failures.push(`Sitemap is missing ${url}`);
	}

	for (const route of excludedUrls) {
		if (sitemap.includes(route)) failures.push(`Sitemap still includes legacy route: ${route}`);
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
