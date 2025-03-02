/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL ||
    "https://white-hill-two.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404", "/500"],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/404", "/500"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/404", "/500"],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different pages
    const priorities = {
      "/": 1.0,
      "/galeria": 0.8,
      "/kontakt": 0.7,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
