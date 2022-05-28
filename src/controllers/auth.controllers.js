const { User } = require('../db/models');
const bcrypt = require('bcrypt');
const { generateAccessToken } = require('../lib/generateToken');

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

    // generate token
    const accessToken = generateAccessToken(user);

    return res.status(201).json({
      message: 'success register user',
      user,
      accessToken,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    // check if email does not exists
    if (!user) {
      return res.status(404).json({
        message: 'user not found',
      });
    }

    // check if password does not wrong
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(404).json({
        message: 'password invalid',
      });
    }

    // generate token
    const accessToken = generateAccessToken(user);

    // return
    return res.status(200).json({
      message: 'user success login',
      user,
      accessToken,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
