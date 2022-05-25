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

app.use('/api', authRouter);

// connection server
const { PORT } = process.env;
app.listen(PORT, async () => {
  console.log(`connect on port ${PORT}`);
});
