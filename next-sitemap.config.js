/** @type {import('next-sitemap').IConfig} */
const fetch = require("node-fetch"); // Import fetch for API call

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
    try {
      const res = await fetch("https://devseek-ai.vercel.app/api/blogs"); // Replace with your actual API endpoint
      const blogs = await res.json();

      const blogPaths = blogs.map((blog) => ({
        loc: `${config.siteUrl}/blog/${blog.slug}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.8,
      }));

      return [
        ...blogPaths,
        { loc: `${config.siteUrl}/signin`, lastmod: new Date().toISOString(), changefreq: "monthly", priority: 0.9 },
        { loc: `${config.siteUrl}/tos`, lastmod: new Date().toISOString(), changefreq: "yearly", priority: 0.3 },
        { loc: `${config.siteUrl}/privacy-policy`, lastmod: new Date().toISOString(), changefreq: "yearly", priority: 0.3 },
      ];
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
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
      changefreq: url.includes("/blog/") ? "weekly" : "daily",
      priority: url === config.siteUrl ? 1.0 : url.includes("/blog/") ? 0.8 : 0.7,
    };
  },
};
