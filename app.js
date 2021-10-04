const express = require('express');
const dotenv = require('dotenv');
require('./api/data/cricket-mode');
const path = require('path');
require('./api/data/db');
const routes = require('./api/router/cricket-router');
const app = express();

// //static middleware
// app.use(express.static(path.join(__dirname, 'public')));

//these two middleware withouth callback function is used for user request from "body"
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

//loading config file
dotenv.config({ path: './config/config.env' });

//loading router middleware
app.use('/api', routes);

//server starts here
const PORT = process.env.PORT;
console.log(PORT);
app.listen(PORT, function () {
  console.log(`server is running on port ${process.env.PORT}`);
});
