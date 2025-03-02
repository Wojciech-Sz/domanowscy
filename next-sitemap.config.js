/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL ||
    "https://white-hill-two.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404", "/500", "/not-found"],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/404", "/500", "/not-found"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/404", "/500", "/not-found"],
        "max-video-preview": "-1",
        "max-image-preview": "large",
        "max-snippet": "-1",
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different pages based on importance
    const priorities = {
      "/": 1.0, // Homepage
      "/galeria": 0.9, // Main gallery
      "/galeria/projekty": 0.8, // Projects listing
    };

    // Define changefreq for specific pages
    const changefreqs = {
      "/": "daily", // Homepage updates more frequently
      "/galeria": "weekly", // Gallery might update weekly
      "/galeria/projekty": "weekly", // Projects might update weekly
    };

    return {
      loc: path,
      changefreq: changefreqs[path] || config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
