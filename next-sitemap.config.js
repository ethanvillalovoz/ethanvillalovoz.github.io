/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ethanvillalovoz.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  autoLastmod: false,
  exclude: ['/projects', '/publications', '/teaching', '/gaussian-splatting-physics'],
  additionalPaths: async (config) => [
    await config.transform(config, '/rag/'),
    await config.transform(config, '/scenariolens/'),
    await config.transform(config, '/metricdrive/'),
  ],
};
