let router = require('express').Router();

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    let { login } = require('../database');

    login({ username, password })
        .then(result => {
            if (!result) res.json({ error: "username and password doesn't match", token: null })
            let jwt = require("jsonwebtoken");
            let token = jwt.sign({ username }, require("../secret").json_key);
            res.json({
                error: null,
                token
            })

        })
        .catch(console.error)
});
module.exports = router;