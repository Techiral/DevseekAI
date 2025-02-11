/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL?.replace(/\/$/, "") || "https://devseek-ai.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000, // Splits large sitemaps automatically
  changefreq: "daily", // Default update frequency
  priority: 0.7, // Default priority for pages

  exclude: [
    "/twitter-image*",
    "/opengraph-image*",
    "/icon*",
    "/apple-icon.png",
    "/thankyou",
  ],

  additionalPaths: async (config) => [
    {
      loc: `${config.siteUrl}/signin`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      loc: `${config.siteUrl}/tos`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: `${config.siteUrl}/privacy-policy`,
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.3,
    },
  ],

  robotsTxtOptions: {
    additionalSitemaps: [
      "https://devseek-ai.vercel.app/sitemap-0.xml",
    ],
  },

  transform: async (config, url) => {
    return {
      loc: url.startsWith("http") ? url : `${config.siteUrl}${url}`,
      lastmod: new Date().toISOString(),
      changefreq: url.includes("/blog/") ? "weekly" : "daily",
      priority: url === config.siteUrl ? 1.0 : url.includes("/blog/") ? 0.8 : 0.7,
    };
  },
};