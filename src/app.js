console.log('Greeting 1');
console.log('Greeting 2');
console.log('Greeting 3');
console.log('Hello World 1');
console.log('Hello World 2');
console.log('Hello World 3');


const express = require('express');
const morgan = require('morgan');
const adminRoutes = require('./routes/admin'); // Import admin routes
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
// Middleware
// Mount admin routes
app.use('/admin', adminRoutes);
app.use(helmet()); // Basic security headers
app.use(cors());   // Enable CORS
app.use(morgan('dev')); // HTTP request logging
// Basic route (for testing the app)
app.get('/', (req, res) => {
// New GET route for health check
app.get('/api/health', (req, res) => {
  const totalThreads = os.cpus().length;
  const osVersion = os.version();
  const response = {
    totalThreads: totalThreads,
  };
  if (os.platform() === 'win32') {
    response.windowsVersion = osVersion;
  res.send('Hello from Express app!');
});
// New GET route for health check
app.get('/api/health', (req, res) => {
  const totalThreads = os.cpus().length;
  const osVersion = os.version();
  const response = {
    totalThreads: totalThreads,
  };
  if (os.platform() === 'win32') {
    response.windowsVersion = osVersion;
  } else {
    response.osVersion = osVersion;
  }
  res.json(response);
});
// New GET route for user data
app.get('/api/user', (req, res) => {
  res.json({
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  });
});
// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).send(err.message || 'Something broke!');
});
module.exports = app;