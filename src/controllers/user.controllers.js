const { User, Product } = require('../db/models');

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
      },
      include: {
        model: Product,
        attributes: {
          exclude: ['deletedAt', 'createdAt', 'updatedAt'],
        },
      },
      attributes: {
        exclude: ['password', 'deletedAt', 'createdAt', 'updatedAt'],
      },
    });

    if (!user) {
      return res.status(404).json({
        message: 'user not found',
      });
    }

    return res.status(200).json({
      message: 'success get all user',
      user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserById };
