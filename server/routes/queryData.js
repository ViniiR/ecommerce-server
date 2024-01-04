const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const { productsData } = require("../models");

router.get("/", async (req, res) => {
    try {
        const query = req.query.query;
        if (query === "allProducts") {
            const results = await productsData.findAll();
            const products = results.map((product) => ({
                title: product.title,
                price: product.price,
                oldPrice: product.oldPrice,
                percentOFF: product.percentOFF,
                dividedPrice: product.dividedPrice,
                imagePath: product.imagePath,
            }));
            res.status(200).send(products);
            return;
        }
        if (query !== "") {
            const results = await productsData.findAll({
                where: {
                    title: {
                        [Op.like]: `%${query}%`,
                    },
                },
            });
            const products = results.map((product) => ({
                title: product.title,
                price: product.price,
                oldPrice: product.oldPrice,
                percentOFF: product.percentOFF,
                dividedPrice: product.dividedPrice,
                imagePath: product.imagePath,
            }));
            res.status(200).send(products);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get("/cart", (req, res) => {
    const query = req.query.query;
    if (!query) {
        res.sendStatus(404);
        return;
    }
    const keyValues = Object.keys(query);
    const products = keyValues.map(async (item) => {
        return await productsData.findOne({
            where: {
                title: {
                    [Op.eq]: item,
                },
            },
        });
    });
    Promise.all(products).then((data) => {
        const resolvedData = data.map((element) => ({
            title: element.title,
            price: element.price,
            oldPrice: element.oldPrice,
            percentOFF: element.percentOFF,
            dividedPrice: element.dividedPrice,
            imagePath: element.imagePath,
            occurrences: Object.values(query[element.title]).reduce((acc, val) => (
                Number(acc) + val
            )),
        }));
        if (resolvedData) {
            res.send(resolvedData);
        }
    });
});

module.exports = router;
