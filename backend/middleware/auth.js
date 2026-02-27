// const jwt = require('jsonwebtoken');

// const auth = (req, res, next) => {
//   const token = req.header('Authorization')?.replace('Bearer ', '');

//   if (!token) return res.status(401).send('Access denied. No token provided.');

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.admin = decoded;
//     next();
//   } catch (error) {
//     res.status(400).send('Invalid Token');
//   }
// };

// module.exports = auth;

const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // If in development mode, skip authentication
  if (process.env.DEV_MODE === 'true') {
    req.admin = { id: 'mockAdminId' }; // Mock admin data (can be adjusted based on need)
    return next();
  }

  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token');
  }
};

module.exports = auth;