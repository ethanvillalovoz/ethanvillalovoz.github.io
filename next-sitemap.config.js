const siteUrl = 'https://ethanvillalovoz.com';

const imageEntries = {
  '/': [
    ['/images/EthanVillalovozPic-optimized.jpg', 'Ethan Villalovoz', 'Portrait of Ethan Villalovoz'],
  ],
  '/writing/': [
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/ICSE_BO_figure.png', 'BODE-GEN method', 'Bayesian prompt optimization loop for test-driven code generation'],
  ],
  '/writing/tests-turn-prompting-into-search/': [
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/ICSE_BO_figure.png', 'BODE-GEN method', 'Bayesian prompt optimization loop for test-driven code generation'],
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-results.png', 'BODE-GEN results', 'Correctness results across code-generation models and prompting baselines'],
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-prompt-comparison.png', 'BODE-GEN prompt comparison', 'Original and optimized code-generation prompts'],
  ],
  '/work/': [
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-prompt-comparison.png', 'BODE-GEN prompt comparison'],
    ['/scenariolens/assets/scenariolens-explorer.png', 'ScenarioLens Explorer'],
    ['/metricdrive/assets/metricdrive-explorer.png', 'MetricDrive Explorer'],
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-results.png', 'BODE-GEN results'],
    ['/images/projects/self_driving-thumb.jpg', 'Self-driving car simulation'],
    ['/images/projects/intellicrawl-thumb.jpg', 'IntelliCrawl research agent'],
    ['/images/projects/sentisync-thumb.jpg', 'SentiSync sentiment-analysis workflow'],
    ['/images/projects/rag.jpg', 'Knowledge Graph RAG Assistant'],
    ['/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/STAL_Multi_Robot_Formations.png', 'Social Triangles multi-robot formations'],
  ],
  '/research/': [
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/ICSE_BO_figure.png', 'BODE-GEN method'],
    ['/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/STAL_Multi_Robot_Formations.png', 'Social Triangles multi-robot formations'],
  ],
  '/scenariolens/': [
    ['/scenariolens/assets/scenariolens-explorer.png', 'ScenarioLens Explorer', 'Autonomous-driving scenario evaluation and failure-analysis interface'],
  ],
  '/metricdrive/': [
    ['/metricdrive/assets/metricdrive-explorer.png', 'MetricDrive Explorer', 'Metric-aligned autonomous-driving trajectory research interface'],
  ],
  '/rag/': [
    ['/images/projects/rag.jpg', 'Knowledge Graph RAG Assistant'],
    ['/data/capstone/static/images/figures/rag-pipeline.webp', 'Knowledge Graph RAG pipeline'],
    ['/data/capstone/static/images/figures/rag-system-architecture.webp', 'Knowledge Graph RAG system architecture'],
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
