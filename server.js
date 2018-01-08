const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");
const request = require('request');
const mongodb = require("mongodb");
const path = require("path");


//will need to change this for production
const port = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytsearch";

//initialize express
const app = express();
// Serve up static assets
app.use(express.static("client/build"));

// Require all models
// const db = require("./models");


// Configure middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;
const dbConn = mongoose.connection;

//check connection
dbConn.once('open', function() {
  console.log('Connected to MongoDB');
});

//check for DB errors
dbConn.on('error', function(err) {
  console.log('DB error: ', err);
});

//import routes and give server access to them
//api routes must come above html routes

//html routes


//Start the server
app.listen(port, function() {
  console.log("Listening on NYT Port %s", port);

});
