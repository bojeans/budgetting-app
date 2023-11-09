const express = require("express");
const app = express();
const json = express.json();

// middleware
app.use(json);

module.exports = app;