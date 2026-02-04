const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// 1. Load environment variables FIRST before anything else
dotenv.config();

// 2. Connect to Database
connectDB();

const app = express();

// 3. Middleware
app.use(cors());
app.use(express.json()); 

// 4. API Routes
app.get('/api', (req, res) => {
  res.json({
    status: "Active",
    message: "Ethiopian Military Academy API - Holeta Genet HQ",
    timestamp: new Date()
  });
});

// 5. Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`--- COMMAND CENTER ONLINE ---`);
  console.log(`Server running on port ${PORT}`);
});