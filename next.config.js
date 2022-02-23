const configs = require("./configs.json");

module.exports = {
  images: {
    domains: ["localhost", configs.STRAPI_URL],
    loader: 'akamai',
    path: '/',
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
