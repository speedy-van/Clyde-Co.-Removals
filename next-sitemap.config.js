/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://clydeandco-removals.co.uk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Custom priority for different pages
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/services' || path === '/areas') {
      priority = 0.9;
    } else if (path.startsWith('/services/') || path.startsWith('/areas/')) {
      priority = 0.8;
    } else if (path === '/contact' || path === '/about') {
      priority = 0.8;
    } else if (path === '/privacy' || path === '/terms') {
      priority = 0.3;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
