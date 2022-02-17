module.exports = {
  env: {
    STORE_DOMAIN: process.env.STORE_DOMAIN,
    API_ENDPOINT: process.env.STORE_API_ENDPOINT,
    API_URL: process.env.STORE_DOMAIN + process.env.STORE_API_ENDPOINT,
    ACCESS_TOKEN: process.env.STORE_FRONT_TOKEN,
    API_VERSION: process.env.STORE_FRONT_API_VERSION,
  },
  images: {
    domains: ["images.unsplash.com", "cdn.shopify.com"],
  },
  reactStrictMode: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
