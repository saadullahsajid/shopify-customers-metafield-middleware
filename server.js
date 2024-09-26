const app = require('./app');
const { port } = require('./config/config');

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
