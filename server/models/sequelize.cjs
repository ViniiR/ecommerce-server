const Sequelize = require("sequelize");

const sequelize = new Sequelize("website", "root", "13152569", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;
