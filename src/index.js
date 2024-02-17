const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Define a sample endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, this is your API!' });
});

// Define an endpoint that makes a request to an external URL
app.get('/api/external', async (req, res) => {
  try {
    // Replace 'https://jsonplaceholder.typicode.com/posts/1' with your desired external URL
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
