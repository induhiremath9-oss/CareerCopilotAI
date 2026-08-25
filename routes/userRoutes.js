const express = require('express');
const router = express.Router();
const { protect } = require('./middleware/authMiddleware');

router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'Profile accessed successfully',
    userId: req.user,
  });
});

module.exports = router;