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

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.findAndCountAll({
      limit: 10,
      offset: 0,
    });
    if (!products) {
      return res.status(404).json({
        message: 'product not found',
      });
    }

    return res.status(200).json({
      message: 'success get all products',
      products,
    });
  } catch (error) {
    next(error);
  }
};
const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({
        message: 'product not found',
      });
    }

    return res.status(200).json({
      message: 'success get product by id',
      product,
    });
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const { product, price } = req.body;

    if (user.role == 'User') {
      return res.status(400).json({
        message: 'unautorized',
      });
    }

    const products = await Product.update(
      { product, price },
      { where: { id } }
    );

    if (!products) {
      return res.status(404).json({
        message: 'product not found',
      });
    }

    return res.status(201).json({
      message: 'success update product',
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const user = req.user;
    const { id } = req.params;

    if (user.role == 'User') {
      return res.status(400).json({
        message: 'unauthorization',
      });
    }

    const product = await Product.destroy({ where: { id } });
    if (!product) {
      return res.status(404).json({
        message: 'product not found',
      });
    }

    return res.status(200).json({
      message: 'success delete product',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
