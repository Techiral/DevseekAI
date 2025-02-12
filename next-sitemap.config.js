/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL?.replace(/\/$/, "") || "https://devseek-ai.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,

  exclude: [
    "/twitter-image*", 
    "/opengraph-image*", 
    "/icon*", 
    "/apple-icon.png", 
    "/thankyou"
  ],

  additionalPaths: async (config) => {
    return Promise.resolve([
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

      // ✅ Manually added blog URLs with highest priority
      {
        loc: `${config.siteUrl}/blog/will-ai-replace-developers-2025`,
        lastmod: new Date().toISOString(),
        changefreq: "hourly", // 🔥 Tells Google this updates frequently
        priority: 1.0, // 🔥 Highest priority for fastest indexing
      },
    ]);
  },

  robotsTxtOptions: {
    additionalSitemaps: [
      "https://devseek-ai.vercel.app/sitemap-0.xml"
    ],
  },

  transform: async (config, url) => {
    console.log("Sitemap URL:", url);

    return {
      loc: url.startsWith("http") ? url : `${config.siteUrl}${url}`,
      lastmod: new Date().toISOString(),
      changefreq: url.includes("/blog/") ? "hourly" : "daily", // 🔥 Hourly for blogs
      priority: url.includes("/blog/") ? 1.0 : 0.7,
    };
  },
};
