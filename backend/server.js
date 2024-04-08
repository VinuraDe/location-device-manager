require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const locationsRoutes = require('./routes/locations.routes');
const devicesRoutes = require('./routes/devices.routes');

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(bodyParser.json());
const cors = require('cors');

app.use(cors());

// MongoDB connection
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

// Routes
app.use('/locations', locationsRoutes);
app.use('/devices', devicesRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
