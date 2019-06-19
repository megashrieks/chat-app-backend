let connection = require("./connection");
module.exports = ({ username }) => new Promise((resolve, reject) => {
    connection().then(db => {
        db.collection("messages").find({ to: username }, (err, messages) => {
            if (err) reject();
            resolve(messages);
        })
    })
})