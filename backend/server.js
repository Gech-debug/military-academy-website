const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); // Added for file paths
const connectDB = require('./config/db');

// 1. Load environment variables
dotenv.config();

// 2. Connect to the Cloud Database
connectDB();

const app = express();

// 3. Middleware
app.use(cors());
app.use(express.json()); 

// 4. Serve the React Frontend Files
// This points to the 'build' folder inside your 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend/build')));

// 5. API Routes
// Note: Keep API routes ABOVE the catch-all route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(`New Inquiry from: ${name}`);
    res.status(201).json({ success: true, message: "Message received by the Academy." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// 6. The "Catch-All" Route
// This tells the server: "If the request isn't an API call, show the Public Website"
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// 7. Deployment Port
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`-------------------------------------------`);
  console.log(`--- ACADEMY PUBLIC SERVER OPERATIONAL ---`);
  console.log(`Port: ${PORT}`);
  console.log(`-------------------------------------------`);
});