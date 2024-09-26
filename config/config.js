require('dotenv').config();

module.exports = {
  shopify: {
    apiKey: process.env.SHOPIFY_API_KEY,
    password: process.env.SHOPIFY_PASSWORD,
    storeUrl: process.env.SHOPIFY_STORE_URL,
    apiVersion: process.env.API_VERSION,
  },
  port: process.env.PORT || 3000,
};
