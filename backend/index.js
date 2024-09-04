const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/admin', require('./routes/admin'));
app.use('/api/movies', require('./routes/movie'));

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
