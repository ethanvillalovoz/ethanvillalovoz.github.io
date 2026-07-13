const siteUrl = 'https://ethanvillalovoz.com';

const imageEntries = {
  '/': [
    ['/images/EthanVillalovozPic-optimized.jpg', 'Ethan Villalovoz', 'Portrait of Ethan Villalovoz'],
  ],
  '/writing/': [
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-method.png', 'BODE-GEN method', 'Bayesian prompt optimization loop for test-driven code generation'],
  ],
  '/writing/tests-turn-prompting-into-search/': [
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-method.png', 'BODE-GEN method', 'Bayesian prompt optimization loop for test-driven code generation'],
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-results.png', 'BODE-GEN results', 'Correctness results across code-generation models and prompting baselines'],
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-prompt-comparison.png', 'BODE-GEN prompt comparison', 'Original and optimized code-generation prompts'],
  ],
  '/work/': [
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-prompt-comparison.png', 'BODE-GEN prompt comparison'],
    ['/scenariolens/assets/scenariolens-explorer.png', 'ScenarioLens Explorer'],
    ['/metricdrive/assets/metricdrive-explorer.png', 'MetricDrive Explorer'],
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-results.png', 'BODE-GEN results'],
    ['/images/projects/self-driving-poster.webp', 'Self-driving car offline replay'],
    ['/images/projects/intellicrawl-poster.webp', 'IntelliCrawl source-backed research terminal demo'],
    ['/images/projects/sentisync-poster.webp', 'SentiSync sentiment-analysis extension'],
    ['/images/projects/rag-poster.webp', 'Knowledge Graph RAG retrieval workspace'],
    ['/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/social-triangles-study-conditions.jpg', 'Social Triangles study conditions', 'Wedge and V-shape robot formations approaching participants'],
  ],
  '/research/': [
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-method.png', 'BODE-GEN method'],
    ['/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/social-triangles-threat-results.jpg', 'Social Triangles threat results', 'Threatening-to-harmless ratings across four multi-robot formations'],
  ],
  '/scenariolens/': [
    ['/scenariolens/assets/scenariolens-explorer.png', 'ScenarioLens Explorer', 'Autonomous-driving scenario evaluation and failure-analysis interface'],
  ],
  '/metricdrive/': [
    ['/metricdrive/assets/metricdrive-explorer.png', 'MetricDrive Explorer', 'Metric-aligned autonomous-driving trajectory research interface'],
  ],
  '/rag/': [
    ['/images/projects/rag-poster.webp', 'Knowledge Graph RAG retrieval workspace'],
    ['/data/capstone/figures/system-architecture.png', 'Knowledge Graph RAG system architecture'],
    ['/data/capstone/figures/original-prototype.webp', 'Original Knowledge Graph RAG prototype'],
  ],
};

const normalizePath = (path) => path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  trailingSlash: true,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  autoLastmod: false,
  exclude: ['/projects', '/publications', '/teaching', '/gaussian-splatting-physics'],
  transform: async (_config, path) => ({
    loc: path,
    images: (imageEntries[normalizePath(path)] ?? []).map(([imagePath, title, caption]) => ({
      loc: new URL(imagePath, siteUrl),
      title,
      caption,
    })),
  }),
  additionalPaths: async (config) => [
    await config.transform(config, '/rag/'),
    await config.transform(config, '/scenariolens/'),
    await config.transform(config, '/metricdrive/'),
  ],
};
