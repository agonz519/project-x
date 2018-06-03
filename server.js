// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var https = require('https');
var path = require('path');
var arDrone = require('ar-drone');
var client  = arDrone.createClient({ip: '192.168.1.1'});

// localhost certificate
// =============================================================
var certOptions = {
  key: fs.readFileSync(path.resolve('serverkey/server.key')),
  cert: fs.readFileSync(path.resolve('serverkey/server.crt'))
};


// Sets up the Express App
// =============================================================
var app = express();

var PORT = 8080;

var server = https.createServer(certOptions, app).listen(8002);


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

require('ar-drone-png-stream')(client, { port: 8020 });

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

app.get("/api/calibrate", function(req, res) {
  console.log('calibrating...');
  client.calibrate(0);
});

app.get("/api/move-left", function(req, res) {
  console.log('moving left...');
  client.left(0.1);
});

app.get("/api/move-right", function(req, res) {
  console.log('moving right...');
  client.right(0.1);
});

app.get("/api/move-up", function(req, res) {
  console.log('moving up...');
  client.up(0.3);
});

app.get("/api/move-down", function(req, res) {
  console.log('moving down...');
  client.down(0.3);
});

app.get("/api/move-front", function(req, res) {
  console.log('moving front...');
  client.front(0.1);
});

app.get("/api/move-back", function(req, res) {
  console.log('moving back...');
  client.back(0.1);
});

app.get("/api/turn-left", function(req, res) {
  console.log('turning left...');
  client.counterClockwise(0.5);
});

app.get("/api/turn-right", function(req, res) {
  console.log('turning right...');
  client.clockwise(0.5);
});

app.get("/api/stop", function(req, res) {
  console.log('stopping current command...');
  client.stop();
});

app.get("/api/land", function(req, res) {
  console.log('landing...');
  client.land();
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on https://localhost:8002");
});
