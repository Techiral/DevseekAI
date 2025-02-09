module.exports = {
  siteUrl: process.env.SITE_URL?.replace(/\/$/, "") || "https://devseek-ai.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000, // Ensures large sitemaps split correctly
  changefreq: "daily", // Default update frequency
  priority: 0.7, // Default priority for pages

  // ✅ Optimized exclude patterns (uses glob syntax instead of regex-like)
  exclude: ["/twitter-image*", "/opengraph-image*", "/icon*"],

  // ✅ Ensures additionalPaths does not break if siteUrl is somehow undefined
  additionalPaths: async (config) => {
    return Promise.resolve([
      {
        loc: `${config.siteUrl}/signin`,
        lastmod: new Date().toISOString(), // Dynamic timestamp for freshness
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: `${config.siteUrl}/tos`,
        lastmod: new Date().toISOString(), // Dynamic timestamp
        changefreq: "yearly",
        priority: 0.3, // Lowered since ToS rarely changes
      },
      {
        loc: `${config.siteUrl}/privacy-policy`,
        lastmod: new Date().toISOString(), // Dynamic timestamp
        changefreq: "yearly",
        priority: 0.3, // Lowered since Privacy Policy rarely changes
      },
    ]);
  },

  // ✅ Improved transform function to ensure dynamic timestamps & correct priority
  transform: async (config, url) => {
    return {
      loc: url.startsWith("http") ? url : `${config.siteUrl}${url}`, // Ensures full URL format
      lastmod: new Date().toISOString(), // Dynamic timestamp for each page
      changefreq: url.includes("/blog/") ? "weekly" : "daily",
      priority: url === config.siteUrl ? 1.0 : url.includes("/blog/") ? 0.8 : 0.7,
    };
  },
};
