const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const findBy = require('../findUser')

function authToken(req, res, next) {
    const authHeader = req.headers["Authorization"] || req.headers["authorization"];
    if (authHeader == null) return res.sendStatus(401)
    const token = authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
        if (err) return res.sendStatus(403);
        res.userName = (await findBy(user)).name;
        req.user = user;
        next();
    });
}

router.get('/', authToken, (req, res) => {
    res.status(200).send({userName: res.userName})
});

module.exports = router;