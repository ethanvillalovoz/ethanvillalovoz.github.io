/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ethanvillalovoz.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // ✅ important fix
  outDir: 'out', // ✅ required for static export
  additionalPaths: async (config) => [
    await config.transform(config, '/rag/'),
    await config.transform(config, '/gaussian-splatting-physics/'),
  ],
};
