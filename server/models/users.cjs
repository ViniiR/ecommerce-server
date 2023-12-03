const sequelize = require('./sequelize.cjs')
const {DataTypes} = require('sequelize')

const users = sequelize.define("Users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = users;