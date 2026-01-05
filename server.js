const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();  // Connect to MongoDB

const app = express();
app.use(express.json());

// Routes go here
app.get('/', (req, res) => res.send('CRM Backend Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
