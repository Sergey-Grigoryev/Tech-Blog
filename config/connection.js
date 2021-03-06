const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize("newsfeed_db", "root", "Ks0603!@#M", {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

module.exports = sequelize;
