var express = require('express');
var bodyParser = require("body-parser");
var axios = require("axios");
var mongoose = require("mongoose");
var request = require('request');
var mongodb = require("mongodb");


//will need to change this for production
var port = process.env.PORT || 3001;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytsearch";

//initialize express
var app = express();
// Serve up static assets
app.use(express.static("client/build"));

// Require all models
// var db = require("./models");


// Configure middleware


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
  useMongoClient: true,
});

mongoose.Promise = global.Promise;
var dbConn = mongoose.connection;

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
