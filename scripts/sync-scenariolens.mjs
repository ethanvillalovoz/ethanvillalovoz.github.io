import { copyFile, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const args = process.argv.slice(2);

const option = (name, fallback = null) => {
	const index = args.indexOf(name);
	if (index === -1) return fallback;
	const value = args[index + 1];
	if (!value || value.startsWith("--")) {
		throw new Error(`${name} requires a value`);
	}
	return value;
};

const sourceArgument = option("--source");
const repositoryRef = option("--ref", "main");

if (!sourceArgument) {
	throw new Error(
		"Usage: npm run sync:scenariolens -- --source /path/to/scenariolens/docs/demo [--ref <git-ref>]",
	);
}
if (!/^[A-Za-z0-9._/-]+$/.test(repositoryRef)) {
	throw new Error("--ref may contain only letters, numbers, dots, underscores, slashes, and hyphens");
}

const sourceRoot = path.resolve(sourceArgument);
const targetRoot = path.join(root, "public/scenariolens");
const blobBase = `https://github.com/ethanvillalovoz/scenariolens/blob/${repositoryRef}`;
const mirroredFiles = [
	"app.js",
	"styles.css",
	"scenarios.json",
	"selector_decisions.json",
	"evidence_index.json",
	"run.json",
];

const repositoryMarkdownUrl = (value, key, parent) => {
	if (typeof value !== "string" || !value.endsWith(".md") || value.startsWith("http")) {
		return value;
	}

	let repositoryPath = null;
	if (key === "link_path" && typeof parent?.path === "string") {
		repositoryPath = parent.path;
	} else if (value.startsWith("../")) {
		repositoryPath = path.posix.normalize(path.posix.join("docs/demo", value));
	} else if (value.startsWith("docs/") || value.startsWith(".github/")) {
		repositoryPath = value;
	}

	if (!repositoryPath || repositoryPath.startsWith("../")) return value;
	return `${blobBase}/${repositoryPath}`;
};

const rewritePayload = (value, key = null, parent = null) => {
	if (Array.isArray(value)) {
		return value.map((item) => rewritePayload(item, null, null));
	}
	if (value && typeof value === "object") {
		return Object.fromEntries(
			Object.entries(value).map(([childKey, childValue]) => [
				childKey,
				rewritePayload(childValue, childKey, value),
			]),
		);
	}
	return repositoryMarkdownUrl(value, key, parent);
};

const seoMetadata = `    <meta name="author" content="Ethan Villalovoz" />
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1" />
    <meta name="description" content="Inspect a reproducible 1,193-scenario autonomy evaluation run, ranked cases, lane-aware diagnostics, and a frozen 993-scenario selector holdout." />
    <meta property="og:title" content="ScenarioLens | Autonomous-Driving Scenario Evaluation" />
    <meta property="og:description" content="A run-backed explorer for long-tail motion scenarios, baseline failures, lane-continuation diagnostics, and frozen-policy holdout evidence." />
    <meta property="og:url" content="https://ethanvillalovoz.com/scenariolens/" />
    <meta property="og:site_name" content="Ethan Villalovoz" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://ethanvillalovoz.com/scenariolens/assets/scenariolens-explorer.png" />
    <meta property="og:image:width" content="1600" />
    <meta property="og:image:height" content="1000" />
    <meta property="og:image:alt" content="ScenarioLens interface showing a completed autonomy evaluation run and ranked driving scenarios" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="ScenarioLens | Autonomous-Driving Scenario Evaluation" />
    <meta name="twitter:description" content="Explore reproducible run evidence, ranked motion scenarios, and frozen-policy holdout results." />
    <meta name="twitter:image" content="https://ethanvillalovoz.com/scenariolens/assets/scenariolens-explorer.png" />
    <meta name="twitter:creator" content="@ethanvillalovoz" />
    <title>ScenarioLens | Autonomous-Driving Scenario Evaluation</title>
    <link rel="canonical" href="https://ethanvillalovoz.com/scenariolens/" />
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ScenarioLens",
        "url": "https://ethanvillalovoz.com/scenariolens/",
        "description": "A run-backed autonomy-evaluation framework for ranking long-tail motion scenarios and auditing prediction baselines.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "image": "https://ethanvillalovoz.com/scenariolens/assets/scenariolens-explorer.png",
        "codeRepository": "https://github.com/ethanvillalovoz/scenariolens",
        "author": {
          "@type": "Person",
          "@id": "https://ethanvillalovoz.com/#ethan-villalovoz",
          "name": "Ethan Villalovoz"
        }
      }
    </script>`;

await mkdir(targetRoot, { recursive: true });

for (const fileName of mirroredFiles) {
	const sourcePath = path.join(sourceRoot, fileName);
	const targetPath = path.join(targetRoot, fileName);
	if (fileName.endsWith(".json")) {
		const payload = JSON.parse(await readFile(sourcePath, "utf8"));
		await writeFile(targetPath, `${JSON.stringify(rewritePayload(payload), null, 2)}\n`);
	} else {
		await copyFile(sourcePath, targetPath);
	}
}

await rm(path.join(targetRoot, "assets"), { recursive: true, force: true });
await cp(path.join(sourceRoot, "assets"), path.join(targetRoot, "assets"), {
	recursive: true,
	force: true,
});

const sourceHtml = await readFile(path.join(sourceRoot, "index.html"), "utf8");
const titleMarker = '    <title>ScenarioLens Explorer</title>';
if (!sourceHtml.includes(titleMarker)) {
	throw new Error("ScenarioLens index.html is missing the expected title marker");
}
const mirroredHtml = sourceHtml
	.replace(titleMarker, seoMetadata)
	.replaceAll("../reports/", `${blobBase}/docs/reports/`);
await writeFile(path.join(targetRoot, "index.html"), mirroredHtml);

console.log(`Synced ScenarioLens from ${sourceRoot}`);
console.log(`Report links pinned to ${repositoryRef}`);
