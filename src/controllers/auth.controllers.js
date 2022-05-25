const { User } = require('../db/models');
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    // check email if email exists then throws an error
    const isExists = await User.findOne({
      where: { email },
    });

    if (isExists) {
      return res.status(400).json({
        message: 'email already exists',
      });
    }

    const hash = await bcrypt.hash(password, 12);
    const user = await User.create({
      fullName,
      email,
      password: hash,
    });

    return res.status(201).json({
      message: 'success register user',
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register };
