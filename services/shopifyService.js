const axios = require('axios');
const { shopify } = require('../config/config');

// Fetch a customer by ID
const getCustomer = async (customerId) => {
  const url = `https://${shopify.apiKey}:${shopify.password}@${shopify.storeUrl}/admin/api/${shopify.apiVersion}/customers/${customerId}.json`;
  const response = await axios.get(url, { headers: { 'Content-Type': 'application/json' } });
  return response.data.customer;
};

// Fetch all metafields of a customer
const getCustomerMetafields = async (customerId) => {
  const url = `https://${shopify.apiKey}:${shopify.password}@${shopify.storeUrl}/admin/api/${shopify.apiVersion}/customers/${customerId}/metafields.json`;
  const response = await axios.get(url, { headers: { 'Content-Type': 'application/json' } });
  return response.data.metafields;
};

// Find a metafield by namespace and key
const findMetafieldByNamespaceAndKey = (metafields, namespace, key) => {
  return metafields.find(metafield => metafield.namespace === namespace && metafield.key === key);
};

// Update customer metafield by namespace and key
const updateCustomerMetafield = async (customerId, namespace, key, value, type = 'single_line_text_field') => {
  // Get all customer metafields
  const metafields = await getCustomerMetafields(customerId);

  // Find the specific metafield by namespace and key
  const metafield = findMetafieldByNamespaceAndKey(metafields, namespace, key);


  if (!metafield) {
    throw new Error('Metafield not found for the given namespace and key');
  }

  // Update the metafield using its ID
  const url = `https://${shopify.apiKey}:${shopify.password}@${shopify.storeUrl}/admin/api/${shopify.apiVersion}/customers/${customerId}/metafields/${metafield.id}.json`;
  const response = await axios.put(url, {
    metafield: {
      value: value,
      type: type,
    },
  }, { headers: { 'Content-Type': 'application/json' } });
  
  return response.data;
};

module.exports = { updateCustomerMetafield, getCustomer };
