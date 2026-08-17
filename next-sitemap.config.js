const siteUrl = 'https://ethanvillalovoz.com';

const imageEntries = {
  '/': [
    ['/images/EthanVillalovozPic-optimized.jpg', 'Ethan Villalovoz', 'Portrait of Ethan Villalovoz'],
  ],
  '/writing/tests-turn-prompting-into-search/': [
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-method.png', 'BODE-GEN method', 'Bayesian prompt optimization loop for test-driven code generation'],
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-results.png', 'BODE-GEN results', 'Correctness results across code-generation models and prompting baselines'],
    ['/data/research/2025_WSU_Bayesian_Prompt_Optimization/bodegen-prompt-comparison.png', 'BODE-GEN prompt comparison', 'Original and optimized code-generation prompts'],
  ],
  '/research/': [
    ['/images/projects/bodegen-method-thumbnail.webp', 'BODE-GEN method'],
    ['/images/projects/social-triangles-threat-thumbnail.webp', 'Social Triangles threat results', 'Threatening-to-harmless ratings across four multi-robot formations'],
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
  exclude: [
    '/work',
    '/projects',
    '/publications',
    '/teaching',
    '/gaussian-splatting-physics',
    '/scenariolens',
    '/metricdrive',
  ],
  transform: async (_config, path) => ({
    loc: path,
    images: (imageEntries[normalizePath(path)] ?? []).map(([imagePath, title, caption]) => ({
      loc: new URL(imagePath, siteUrl),
      title,
      caption,
    })),
  }),
};
