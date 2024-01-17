const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: false,
  }  
});


module.exports.connection = sequelize;
