/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vehix.pl',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/_not-found'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://vehix.pl/sitemap.xml',
    ],
  },
};
