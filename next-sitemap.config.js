const fetch = require("node-fetch");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL?.replace(/\/$/, "") || "https://devseek-ai.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,

  exclude: [
    "/twitter-image*", 
    "/opengraph-image*", 
    "/icon*", 
    "/apple-icon.png", 
    "/thankyou"
  ],

  additionalPaths: async (config) => {
    try {
      // ✅ Fetch all blogs dynamically
      const res = await fetch(`${config.siteUrl}/api/blogs`); // Adjust if needed
      const blogs = await res.json();

      // ✅ Map fetched blog URLs into the sitemap
      const blogPaths = blogs.map((blog) => ({
        loc: `${config.siteUrl}/blog/${blog.slug}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.8,
      }));

      return [
        ...blogPaths, // ✅ Add dynamic blog URLs
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
      ];
    } catch (error) {
      console.error("Error fetching blogs for sitemap:", error);
      return []; // Return an empty array if fetch fails to prevent errors
    }
  },

  robotsTxtOptions: {
    additionalSitemaps: [
      "https://devseek-ai.vercel.app/sitemap-0.xml"
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
