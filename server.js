// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var arDrone = require('ar-drone');
var client  = arDrone.createClient({ip: '192.168.1.1'});

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/takeoff", function(req, res) {
  console.log('taking off...');
  client.takeoff();
});

app.get("/api/land", function(req, res) {
  console.log('landing...');
  client.land();
});

app.get("/api/clockwise", function(req, res) {
  console.log('turning clockwise...');
  client.clockwise(0.5);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
