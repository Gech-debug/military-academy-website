const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// 1. Load environment variables
dotenv.config();

// 2. Connect to Database
connectDB();

const app = express();

// 3. Middleware
app.use(cors());
app.use(express.json()); 

// --- DYNAMIC PATH RESOLUTION ---
// This ensures the server finds the frontend folder from the root
const rootDir = path.resolve(); 

// 4. API Routes (Must be above Static Files)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(`New Inquiry from: ${name}`);
    res.status(201).json({ success: true, message: "Message received by the Academy." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// 5. Serve the React Frontend
// We point directly to military-academy-website/frontend/build
app.use(express.static(path.join(rootDir, 'frontend', 'build')));

// 6. The "Catch-All" Route
// Redirects all web traffic to the React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(rootDir, 'frontend', 'build', 'index.html'));
});

// 7. Port Configuration
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`-------------------------------------------`);
  console.log(`--- ACADEMY COMMAND CENTER ONLINE ---`);
  console.log(`Running on Port: ${PORT}`);
  console.log(`-------------------------------------------`);
});