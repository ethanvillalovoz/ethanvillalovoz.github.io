/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ethanvillalovoz.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // ✅ important fix
  outDir: 'out', // ✅ required for static export
};
