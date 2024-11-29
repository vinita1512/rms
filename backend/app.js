require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./conn/db');

const app = express();

// Connect to the database
connectDB();

app.use(express.json());
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
