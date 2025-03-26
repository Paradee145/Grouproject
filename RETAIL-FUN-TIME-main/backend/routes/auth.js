const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const protect = require('../middleware/auth');

// @route   POST /api/auth/signup
// @desc    Register a new user
router.post('/signup', registerUser);

// @route   POST /api/auth/login
// @desc    Login and return JWT token
router.post('/login', loginUser);

// @route   GET /api/auth/me
// @desc    Return user info if token is valid
// @access  Private (requires token)
router.get('/me', protect, (req, res) => {
  res.status(200).json({
    message: 'You are authorized',
    user: req.user,
  });
});

module.exports = router;
