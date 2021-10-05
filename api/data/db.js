const mongoose = require('mongoose');
//meanGameDB is our db name
const dbURL = process.env.DATABASE_URL + process.env.DATABASE_NAME;
mongoose.connect(dbURL);
mongoose.connection.on('connected', function () {
  console.log('mongoose is connected to ' + dbURL);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose is disconnected');
});
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error' + err);
});

//to disconnect the mongoose
process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose is disconnected by app temination');
    process.exit(0);
  });
});

process.on('SIGTERM', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose is disconnected by app termination');
    process.exit(0);
  });
});

process.on('SIGUSR2', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose is disconnected by app temination');
    process.exit(0);
  });
});
