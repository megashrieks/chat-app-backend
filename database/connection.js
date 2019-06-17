let MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://localhost:27017";
module.exports = (name) => new Promise((resolve, reject) => {
    MongoClient.connect(URL, { useNewUrlParser: true }, (err, client) => {
        if (err) reject(err);
        resolve(client.db(name));
    });
})
