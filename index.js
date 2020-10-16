"use strict";
var express = require("express");
var path = require("path");
var cors = require("cors");
require("dotenv").config();

var app = express();

var serverPort = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./routes/index"));

app.use(express.static(path.join(__dirname, "/dist/")));

app.get("/*/", function(req, res) {
  // res.sendFile(__dirname + "/dist/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

var server = app.listen(serverPort, function() {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});