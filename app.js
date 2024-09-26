const express = require('express');
const cors = require('cors'); // Import CORS middleware
const customerRoutes = require('./routes/customerRoutes');

// Initialize Express app
const app = express();

// Allowed origins for CORS
const allowedOrigins = [
  'http://localhost:3000', 
  'https://c2-saad-sajid.myshopify.com',
];

// CORS options
const corsOptions = {
  origin: (origin, callback) => {
    // If the request origin is in the allowedOrigins array, allow it
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Use CORS middleware
app.use(cors(corsOptions));

// Middleware for parsing JSON bodies
app.use(express.json());

// Register routes
app.use('/api/customers', customerRoutes);

module.exports = app;
