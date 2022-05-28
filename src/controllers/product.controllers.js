const { Product } = require('../db/models');

const createProduct = async (req, res, next) => {
  try {
    const user = req.user;
    const { product, price } = req.body;

    if (user.role == 'User') {
      return res.status(401).json({
        message: 'unauthorization',
      });
    }

    const products = await Product.create({
      product,
      price,
      userId: user.id,
    });

    return res.status(201).json({
      message: 'success create product',
      products,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createProduct };
