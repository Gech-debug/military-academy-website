const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

// 1. Load environment variables
dotenv.config();

// 2. Connect to the Cloud Database
connectDB();

const app = express();

// 3. Middleware
app.use(cors());
app.use(express.json()); 

// --- DYNAMIC PATH RESOLUTION ---
// This ensures the server finds the frontend folder from the project root
const _dirname = path.resolve(); 

// 4. API Routes (MUST stay above the static files)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log(`New Inquiry from: ${name}`);
    res.status(201).json({ success: true, message: "Message received by the Academy." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// 5. Serve the React Frontend Files
// We use path.join(_dirname, 'frontend', 'build') to point directly to the files
app.use(express.static(path.join(_dirname, 'frontend', 'build')));

// 6. The "Catch-All" Route
// If no API routes are hit, serve the index.html from the build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname, 'frontend', 'build', 'index.html'));
});

// 7. Deployment Port
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`-------------------------------------------`);
  console.log(`--- ACADEMY PUBLIC SERVER OPERATIONAL ---`);
  console.log(`Live Link: https://ethiopian-military-academy.onrender.com`);
  console.log(`-------------------------------------------`);
});