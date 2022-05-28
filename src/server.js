require('dotenv/config');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routing
const authRouter = require('./routers/auth.routers');
const pruductRouter = require('./routers/product.routers');

app.use('/api', authRouter);
app.use('/api', pruductRouter);

// error handling
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    message: err.message || 'INTERNAL SERVER ERROR',
    error: err,
  });
});

module.exports = { app };
