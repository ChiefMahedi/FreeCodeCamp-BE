let express = require('express');
let app = express();

console.log('Hello World');
app.get('/',(req, res)=>{
    const file = __dirname + '/views/index.html'
    res.sendFile(file);
})


































 module.exports = app;
