const express = require('express');
const app = express();
const path = require('path');

// Serve the entire 'public' directory statically
const publicDirectory = path.join(__dirname, 'public');
app.use(express.static(publicDirectory));

console.log('Hello World');

app.get('/', (req, res) => {
    const file = path.join(__dirname, 'views', 'index.html');
    res.sendFile(file);
});

module.exports = app;
