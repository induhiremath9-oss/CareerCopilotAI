const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Resume upload route
router.post('/upload', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  res.json({
    message: 'Resume uploaded successfully',
    file: req.file.filename,
  });
});

module.exports = router;