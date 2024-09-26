const shopifyService = require('../services/shopifyService');

const updateCustomerMetafield = async (req, res) => {
  try {
    const { customerId, metafieldId, value, type } = req.body;

    // Check if customer exists
    const customerData = await shopifyService.getCustomer(customerId);
    if (!customerData) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    // Update the customer metafield
    const updatedMetafield = await shopifyService.updateCustomerMetafield(customerId, metafieldId, value, type);
    res.status(200).json({ success: updatedMetafield });

  } catch (error) {
    console.error('Full error response from Shopify:', error.response ? error.response.data : error.message);
    if (error.response) {
      res.status(error.response.status).json({ error: error.response.data });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = { updateCustomerMetafield };
