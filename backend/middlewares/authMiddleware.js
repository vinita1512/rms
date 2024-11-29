const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header (Bearer token)
  const token = req.header('Authorization')?.replace('Bearer ', '');

  // If no token is provided, send an Unauthorized error
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token using the secret key from the .env file
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user data (decoded token) to the request object
    req.user = decoded;

    // Move to the next middleware or route handler
    next();
  } catch (err) {
    // If token is invalid, send an Unauthorized error
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
