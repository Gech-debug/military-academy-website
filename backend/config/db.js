const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // It tries the .env variable first, if missing, uses the local address
    const connString = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/military_academy";

    const conn = await mongoose.connect(connString);

    console.log(`--- DATABASE CONNECTED: ${conn.connection.host} ---`);
  } catch (error) {
    console.error(`--- DATABASE CONNECTION ERROR: ${error.message} ---`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;