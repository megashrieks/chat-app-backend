let connection = require("./connection");

module.exports = ({ from, to, message }) => new Promise((resolve,reject)=>{
    connection().then(db => {
        db.collection("messages").insertOne(
            { from, to, message, time: new Date() },
            (err,result) => {
                if (err) reject(err);
                resolve(result);
            }
        )
    })
});