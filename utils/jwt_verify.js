module.exports = (...args) => new Promise((resolve, reject) => {
    let jwt = require("jsonwebtoken");
    jwt.verify(...args, (err,decoded) => {
        if (err) reject(err);
        resolve(decoded);
    })
});