let connection = require("./connection");

module.exports = ({ username, password }) => new Promise((resolve, reject) => {
    connection().then(db => {
        db.collection("users").insertOne({ username, password }, (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
})