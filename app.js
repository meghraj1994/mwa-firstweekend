require('dotenv').config({ path: '.env' });
const express = require('express');
require('./api/data/cricket-model');
const path = require('path');
require('./api/data/db');
const routes = require('./api/router/cricket-router');
const app = express();

if (isNaN(process.env.PORT)) {
  process.env.PORT = 6000;
}
PORT = process.env.PORT || 6000;
app.set('port', PORT);

//these two middleware withouth callback function is used for user request from "body"
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

//angular middleware
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// //static middleware
app.use(express.static(path.join(__dirname, 'public')));

//loading router middleware
app.use('/api', routes);

//server starts here
const server = app.listen(app.get('port'), function () {
  console.log('server is running on port', server.address().port);
});
