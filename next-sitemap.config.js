const siteUrl = 'https://ethanvillalovoz.com';

const imageEntries = {
  '/': [
    ['/images/EthanVillalovozPic-optimized.jpg', 'Ethan Villalovoz', 'Portrait of Ethan Villalovoz'],
    ['/images/projects/bodegen-method-thumbnail.webp', 'BODE-GEN method'],
    ['/images/projects/social-triangles-wedge-study.png', 'Social Triangles robot study', 'Three robots approaching a participant in the wedge formation'],
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
    '/research',
    '/research/*',
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
