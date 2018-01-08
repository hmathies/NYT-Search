const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");
const request = require('request');
const mongodb = require("mongodb");
const path = require("path");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
// const routes = require("../server/routes/api/articles");


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
//
// const port = process.env.PORT || 3000;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytsearch";
//
// //initialize express
// const app = express();
// // Serve up static assets
// app.use(express.static("client/build"));
//
// // Require all models
// // const db = require("./models");
//
//
// // Configure middleware
//
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
//
// // parse application/json
// app.use(bodyParser.json());
//
// // app.use(routes);
//
// // Connect to the Mongo DB
// mongoose.connect(MONGODB_URI, {
//   useMongoClient: true,
// });
//
// mongoose.Promise = global.Promise;
// const dbConn = mongoose.connection;
//
// //check connection
// dbConn.once('open', function() {
//   console.log('Connected to MongoDB');
// });
//
// //check for DB errors
// dbConn.on('error', function(err) {
//   console.log('DB error: ', err);
// });
//
// //import routes and give server access to them
// //api routes must come above html routes
//
// //html routes
//
//
// //Start the server
// app.listen(port, function() {
//   console.log("Listening on NYT Port %s", port);
//
// });
