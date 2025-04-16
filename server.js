const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');

// Initialize Express App
const app = express();
app.use(cors());
app.use(bodyParser.json());  // Allows us to parse JSON requests

// Routes
app.use('/api', authRoutes);

// Sync DB and Start Server
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(err => console.log('Error syncing DB: ', err));
