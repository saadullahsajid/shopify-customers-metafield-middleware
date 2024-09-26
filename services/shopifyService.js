const axios = require('axios');
const { shopify } = require('../config/config');

// Service to interact with Shopify API
const getCustomer = async (customerId) => {
  const url = `https://${shopify.apiKey}:${shopify.password}@${shopify.storeUrl}/admin/api/${shopify.apiVersion}/customers/${customerId}.json`;
  const response = await axios.get(url, { headers: { 'Content-Type': 'application/json' } });
  return response.data;
};

const updateCustomerMetafield = async (customerId, metafieldId, value, type = 'single_line_text_field') => {
  const url = `https://${shopify.apiKey}:${shopify.password}@${shopify.storeUrl}/admin/api/${shopify.apiVersion}/customers/${customerId}/metafields/${metafieldId}.json`;
  const response = await axios.put(url, {
    metafield: {
      value: value,
      type: type,
    },
  }, { headers: { 'Content-Type': 'application/json' } });
  
  return response.data;
};

module.exports = { getCustomer, updateCustomerMetafield };
