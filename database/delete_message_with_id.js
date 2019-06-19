let connection = require("./connection");
let {ObjectID} = require("mongodb");
module.exports = ({ _id }) => new Promise((resolve, reject) => {
    connection().then(db => {
        db.collection("messages").deleteOne({ "_id": new ObjectID(_id) },
            (err, result) => {
                if (err) reject(err);
                resolve(result);
        });
    })
})