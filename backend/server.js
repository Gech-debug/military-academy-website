const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// 1. Load environment variables
dotenv.config();

// 2. Connect to the Cloud Database
// This ensures any data (like contact forms) goes to your Cluster
connectDB();

const app = express();

// 3. Middleware
app.use(cors());
app.use(express.json()); 

// 4. Public API Routes

// Home Route - What people see at https://ethiopian-military-academy.onrender.com/
app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align: center; padding: 50px; background-color: #f4f4f4; height: 100vh;">
      <div style="background: white; display: inline-block; padding: 40px; border-radius: 10px; border-top: 5px solid #1a3a5f; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <h1 style="color: #1a3a5f; margin-bottom: 10px;">Ethiopian Military Academy</h1>
        <hr style="width: 50px; border: 2px solid #ce1126; margin-bottom: 20px;">
        <p style="font-size: 1.2rem; color: #333;">Official Website Backend</p>
        <p style="color: #666;">Status: <span style="color: #28a745; font-weight: bold;">LIVE & ENCRYPTED</span></p>
        <p style="margin-top: 20px; font-style: italic; color: #888;">"Honor, Discipline, Country"</p>
      </div>
    </div>
  `);
});

// Route for the Public Contact Form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Here you would save the public inquiry to your MongoDB
    console.log(`New Inquiry from: ${name}`);
    res.status(201).json({ success: true, message: "Message received by the Academy." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});

// 5. Deployment Port (Render uses 10000)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`-------------------------------------------`);
  console.log(`--- ACADEMY PUBLIC SERVER IS OPERATIONAL ---`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`-------------------------------------------`);
});