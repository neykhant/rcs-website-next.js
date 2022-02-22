const configs = require("./configs.json");

module.exports = {
  images: {
    domains: ["localhost", configs.STRAPI_URL],
    loader: 'akamai',
    path: '/',
  },
  reactStrictMode: true,
};
