const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config()
function logger(req, res, next){
    console.log(`${req.method}${" "}${req.path}${" "}${req.ip}`);
    next();
}
app.use(logger);
const publicDirectory = path.join(__dirname, "public");
const publicPath = "/public";
app.use(publicPath, express.static(publicDirectory));

console.log("Hello World");
app.get("/", (req, res) => {
  const file = path.join(__dirname, "views", "index.html");
  res.sendFile(file);
});

app.get("/json", (req, res) => {
  let message = "Hello json";
  const messageStyle = process.env.MESSAGE_STYLE;
  if ( messageStyle === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

module.exports = app;
