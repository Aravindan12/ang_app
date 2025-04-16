const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ang_app', 'admin', 'root', {
  host: 'localhost',
  dialect: 'mysql', // Change to 'postgres' for PostgreSQL
});

module.exports = sequelize;
