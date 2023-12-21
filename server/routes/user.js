const express = require("express");
const router = express.Router();
const { Users, Sequelize } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const findBy = require('../findUser')

dotenv.config();

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { name, email, password: hashedPassword };
        const [userInstance, isCreated] = await Users.findOrCreate(
            {
                where: {
                    [Sequelize.Op.or]: [{name: user.name}, {email: user.email}]
                },
                defaults: user
            }
        );
        if (isCreated) {
            res.status(201).send()
        } else {
            res.status(400).send()
        }
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ error: err.message });
    }
});

async function auth(req, res, next) {

    try {
        const user = await findBy(req.body);
        if (user == null) {
            return res.status(400).json({error: "user not found"});
        }
        if (await bcrypt.compare(req.body.password, user.password)) {
            req.isValidUser = true;
            next();
        }
    } catch (err) {
        res.status(500).send();
    }
}

router.post("/login", auth, (req, res) => {
    if (req.isValidUser) {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        };
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        res.status(201).json({ accessToken: accessToken });
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;
