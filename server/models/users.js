// const sequelize = require('./sequelize.cjs')
// const {DataTypes} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
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
    return users;
}
