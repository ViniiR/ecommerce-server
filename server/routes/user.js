const express = require('express')
const router = express.Router()
const { Users } = require('../models')

router.post('/', async (req, res) => {
    const user = req.body;
    try {
        await Users.create(user);
        res.status(201).json(user);
    } catch(err) {
        console.log(err.message);
        res.status(400).json({ error: err.message });
    }
})

module.exports = router;