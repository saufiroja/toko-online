const { app } = require('./server');

// connection server
const { PORT } = process.env;
app.listen(PORT, async () => {
  console.log(`connect on port ${PORT}`);
});
