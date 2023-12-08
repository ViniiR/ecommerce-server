const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {name, email, password: hashedPassword};
        await Users.create(user);
        res.status(201).json({message: "Usuário criado com sucesso"});
    } catch(err) {
        console.log(err.message);
        res.status(400).json({ error: err.message });
    }
});

function hasEmailOnly(obj) {
    return obj.hasOwnProperty('email') && !obj.hasOwnProperty('name');
}

router.post('/login', async (req, res) => {

    try {
        const user = hasEmailOnly(req.body) ? await Users.findOne({where: {email: req.body.email}}) : await Users.findOne({where: {name: req.body.name}});
        if (user == null) {
            return res.status(400).send('User not found')
        }
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.status(201).send('success')
        } else {
            res.send('failed :(')
        }
    } catch (err) {
        res.status(500).send()
    }
});

module.exports = router;