/////////////////////////////////////////////
// Imports
/////////////////////////////////////////////
require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

/////////////////////////////////////////////
// Middleware & Routes
/////////////////////////////////////////////
const indexRoute = require('./routes/index');
app.use(['/', '/index', '/index.htm', '/index.html]'], indexRoute);

const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

const authRoute = require('./routes/auth');
app.use('/login/auth', authRoute);

/////////////////////////////////////////////
// Server
/////////////////////////////////////////////
app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});