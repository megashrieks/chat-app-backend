let connection = require("./connection");

module.exports = ({ username }) => new Promise((resolve, reject) => {
    connection().then(db => {
        db.collection("users").findOne({ username }, (err,records) => {
            if (err) reject(err);
            resolve(records);
        })
    })
});