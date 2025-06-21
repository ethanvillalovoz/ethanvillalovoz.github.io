/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ethanvillalovoz.vercel.app', // or your custom domain
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  outDir: "out", // <- REQUIRED when using `next export`
};
