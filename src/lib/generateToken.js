const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRESIN } = process.env;

const generateAccessToken = (user) => {
  const payload = { id: user.id };
  const result = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRESIN,
  });

  return result;
};

module.exports = { generateAccessToken };
