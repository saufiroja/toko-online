const express = require('express');
const router = express.Router();

const { getUserById } = require('../controllers/user.controllers');

router.get('/users/:id', getUserById);

module.exports = router;
