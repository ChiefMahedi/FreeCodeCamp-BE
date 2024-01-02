const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config()
const publicDirectory = path.join(__dirname, "public");
const publicPath = "/public";
app.use(publicPath, express.static(publicDirectory));

console.log("Hello World");

app.get("/", (req, res) => {
  const file = path.join(__dirname, "views", "index.html");
  res.sendFile(file);
});
let message = "Hello json";
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

module.exports = app;
