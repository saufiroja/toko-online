const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const authorization = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({
        message: 'invalid token',
      });
    }
    const result = jwt.verify(token, JWT_SECRET);
    req.user = result;
    next();
  } catch (error) {
    return res.status(403).json({
      message: 'unauthorization',
      error,
    });
  }
};

module.exports = { authorization };
