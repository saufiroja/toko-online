const express = require('express');
const { createProduct } = require('../controllers/product.controllers');
const { authorization } = require('../middlewares/auth.middlewares');

const router = express.Router();

router.post('/products', authorization, createProduct);

module.exports = router;
