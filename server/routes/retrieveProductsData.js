const express = require("express");
const router = express.Router();
// const {productsData} = require("../models");
const Sequelize = require("sequelize");
const db = require('../models')
const sequelize = new Sequelize({
    username: "root",
    password: "13152569",
    database: "website",
    host: "localhost",
    dialect: "mysql",
});

// function replaceBackslashes(str) {
//     return str.replace(/\\/g, "/");
// }

// const path = String.raw`C:\Users\Vinii\Downloads\D_NQ_NP_2X_931665-MLB54931067040_042023-F.webp`

// sequelize.sync().then(async () => {
//     try {
//         const products = await sequelize.query("SELECT * FROM productsData", { type: sequelize.QueryTypes.SELECT });

//         // Assuming 'Product' is your Sequelize model representing the 'productsData' table
//         const Product = sequelize.models.Product; // Replace 'Product' with your actual model name

//         for (const product of products) {
//             const currentImagePath = product.imagePath;
//             const updatedImagePath = currentImagePath.replace(
//                 'C:/Users/Vinii/Downloads/',
//                 '../assets/'
//             );

//             // Update the imagePath for each product in the database using the Sequelize model
//             await productsData.update({ imagePath: updatedImagePath }, {
//                 where: { /* Define your conditions to identify the product here */ }
//             });
//         }

//         console.log('All image paths updated successfully');
//     } catch (error) {
//         console.error('Error updating image paths:', error);
//     }
// });



const getRandomProducts = async () => {
    try {
        const query = `SELECT * FROM productsData
            ORDER BY RAND()
            LIMIT 4;`;

        const randomProducts = await db.sequelize.query(query, {
            type: Sequelize.QueryTypes.SELECT,
        });

        return randomProducts;
    } catch (error) {
        console.error("Error fetching random products:", error);
        throw error;
    }
};

router.get("/", async (req, res) => {
    try {
        const randomProducts = await getRandomProducts();
        const productsInfo = randomProducts.map((product) => ({
            title: product.title,
            price: product.price,
            oldPrice: product.oldPrice,
            imagePath: product.imagePath,
            percentOFF: product.percentOFF,
            dividedPrice: product.dividedPrice,
        }));
        res.status(200).json(productsInfo);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
