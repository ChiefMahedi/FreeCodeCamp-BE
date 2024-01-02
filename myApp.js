const express = require('express');
const app = express();
const path = require('path');

const publicDirectory = path.join(__dirname, 'public');
const publicPath = '/public';
app.use(publicPath, express.static(publicDirectory));

console.log('Hello World');

app.get('/', (req, res) => {
    const file = path.join(__dirname, 'views', 'index.html');
    res.sendFile(file);
});

module.exports = app;
