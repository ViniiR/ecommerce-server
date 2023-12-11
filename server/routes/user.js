const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = { name, email, password: hashedPassword };
        await Users.create(user);
        res.status(201).send()
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ error: err.message });
    }
});

function hasEmailOnly(obj) {
    return obj.hasOwnProperty("email") && !obj.hasOwnProperty("name");
}

async function findBy(reqBody) {
    if (hasEmailOnly(reqBody)) {
        return await Users.findOne({ where: { email: reqBody.email } });
    } else {
        return await Users.findOne({ where: { name: reqBody.name } });
    }
}

async function auth(req, res, next) {

    try {
        const user = await findBy(req.body);
        if (user == null) {
            return res.status(400).send("User not found");
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
        res.status(400).send();
    }
});

module.exports = router;
