const siteUrl = 'https://ethanvillalovoz.com';

const imageEntries = {
  '/': [
    ['/images/EthanVillalovozPic-optimized.jpg', 'Ethan Villalovoz', 'Portrait of Ethan Villalovoz'],
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
    '/writing',
    '/writing/*',
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
