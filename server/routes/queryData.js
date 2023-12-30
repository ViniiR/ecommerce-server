const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
//imported objects from models dir should match the define('model') name and not the exported variable
const { productsData } = require("../models");

router.get("/", async (req, res) => {
    try {
        const query = req.query.query;
        if (query === 'allProducts') {
            const results = await productsData.findAll();
            const products = results.map(product => ({
                title: product.title,
                price: product.price,
                oldPrice: product.oldPrice,
                percentOFF: product.percentOFF,
                dividedPrice: product.dividedPrice,
                imagePath: product.imagePath
            }));
            res.status(200).send(products);
            return;
        }
        if (query !== '') {
            const results = await productsData.findAll({
                where: {
                    title: {
                        [Op.like]: `%${query}%`,
                    },
                },
            });
            const products = results.map(product => ({
                title: product.title,
                price: product.price,
                oldPrice: product.oldPrice,
                percentOFF: product.percentOFF,
                dividedPrice: product.dividedPrice,
                imagePath: product.imagePath
            }));
            res.status(200).send(products)
        } else {
            res.sendStatus(404)
        }
    } catch (err) {
        res.sendStatus(500);
    }
});

module.exports = router;
