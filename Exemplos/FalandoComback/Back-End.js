const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes

app.get('/teste', (req, res) => {
  console.log("--------ok--------");
  res.send('Ok');
});

app.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');