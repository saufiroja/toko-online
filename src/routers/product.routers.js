const express = require('express');
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controllers');
const { authorization } = require('../middlewares/auth.middlewares');

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/product/:id', getProductById);

router.post('/products', authorization, createProduct);

router.put('/product/:id', authorization, updateProduct);

router.delete('/product/:id', authorization, deleteProduct);

module.exports = router;
