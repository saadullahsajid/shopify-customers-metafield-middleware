const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Route to update customer metafield
router.post('/update-customer-metafield', customerController.updateCustomerMetafield);

module.exports = router;
