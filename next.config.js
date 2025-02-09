const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
      "ideogram.ai",
      "randomuser.me",
      "formslab.vercel.app",
      "th.bing.com"
    ],
  },
};

module.exports = nextConfig;
