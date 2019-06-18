const router = require("express").Router();

router.post('/register', (req, res) => {
    let { username, password } = req.body;
    let jwt = require("jsonwebtoken");
    let { get_user, add_user } = require("../database/");
    get_user({ username }).then(result => {
        if (result) res.json({ error: "username already exists", token: null })
        else {
            add_user({ username, password }).then(result => {
                res.json({
                    error: null,
                    token:jwt.sign({username},require("../secret").json_key)
                })
            }).catch(err=>res.json({error:err.message,token:null}))
        }
    }).catch(err => res.json({error:err.message,token:null}))
});

module.exports = router;