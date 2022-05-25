const { Sequelize } = require('sequelize');

const { DB_NAME, DB_PORT, DB_USER, DB_PASS, DB_HOME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'postgres',
  host: DB_HOME,
  port: parseInt(DB_PORT, 10),
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection database successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { sequelize };
