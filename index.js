const express = require('express');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

// Multer setup
const upload = multer({ dest: 'uploads/' });

// Serve the index.html
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Handle file upload using the 'upfile' field name
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Respond with file details
  const fileInfo = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  };
  
  res.json(fileInfo);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
