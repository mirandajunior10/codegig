const sequelize = require("sequelize");

module.exports = new sequelize('codegig', 'postgres', '123456', {
    host: 'localhost',
    dialect:  'postgres',
  });

 