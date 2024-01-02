const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require('dotenv').config()
function logger(req, res, next){
    console.log(`${req.method}${" "}${req.path}${" - "}${req.ip}`);
    next();
}
app.use(bodyParser.urlencoded({extended: false}));
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
app.get('/now', 
(req, res, next)=>{
    req.time = new Date().toString()
    next();
},
(req, res)=>{
    res.json({time: req.time});
})
app.get('/:word/echo',(req, res)=>{
    const word = req.params.word;
    res.json({echo: word});
})

app
.route('/name')
.get((req, res)=>{
    const firstName = req.query.first;
    const lastName = req.query.last;
    res.json({ name: `${firstName}${' '}${lastName}`});
})
.post((req, res)=>{
    const {first, last} = req.body;
    res.json({ name: `${first}${' '}${last}`});
})
module.exports = app;
