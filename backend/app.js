const express = require('express');
const path = require('path');
require('./database');


const app = express();


// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Static files middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
const userRoute = require('./routes/user');
app.use('/api/auth', userRoute);

const sauceRoute = require('./routes/sauces');
app.use(sauceRoute);
module.exports = app;