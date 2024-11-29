// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route for user registration (no authentication required)
router.post('/register', registerUser);

// Example of a protected route that requires authentication
router.get('/profile', authMiddleware, (req, res) => {
  // Since the user is authenticated, we can access their info from req.user
  res.json({ message: 'Profile data', user: req.user });
});

module.exports = router;

