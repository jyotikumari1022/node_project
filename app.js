const express = require('express');
const connectDB = require('./config/db');
const webtoonRoutes = require('./routes/webtoonRoutes');
// const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json()); // To parse incoming JSON data

// Routes
app.use('/api', webtoonRoutes);

// app.use('/api', authRoutes);

// Error handling (optional)
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

module.exports = app;
