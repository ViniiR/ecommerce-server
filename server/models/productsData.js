
const ProductsData = (sequelize, DataTypes) => {
    const productsData = sequelize.define('productsData', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        oldPrice: {
            type: DataTypes.STRING,
            allowNull: false
        },
        percentOFF: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dividedPrice: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagePath: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return productsData;
};

module.exports = ProductsData;