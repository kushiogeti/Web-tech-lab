const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for logging incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Homepage route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// About page route
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Error handling for invalid routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
