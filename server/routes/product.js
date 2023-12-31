const express = require("express");
const router = express.Router();
const {productsData} = require('../models')
const { Op } = require("sequelize");

async function createObject(obj, previousObj) {
    const {createdAt, id, updatedAt, ...rest} = previousObj;
    const newObj = {
        ...rest,
    }
    return newObj;
}

router.get("/:productName",async (req, res) => {
    try {    
        const queryName = req.params.productName;
        const productData = await productsData.findOne({
            where: {
                title: {
                    [Op.eq]: queryName,
                },
            },
        });
        const product = await createObject({}, productData.dataValues);
        if (product) {
            res.status(203).send({product})
        } else {
            res.sendStatus(404)
        }
    } catch(err) {
        res.sendStatus(500)
    }
});

module.exports = router;
