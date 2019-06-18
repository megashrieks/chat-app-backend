let MongoClient = require("mongodb").MongoClient;
const URL = "mongodb://localhost:27017";
module.exports = () => new Promise((resolve, reject) => {
    MongoClient.connect(URL, { useNewUrlParser: true }, (err, client) => {
        if (err) reject(err);
        resolve(client.db("chat"));
    });
})
