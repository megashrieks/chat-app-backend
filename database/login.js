let connection = require("./connection");

module.exports = ({username,password}) => new Promise((resolve, reject) => {
    connection().then(db => {        
        db.collection('users').findOne({ username, password }, (err, records) => {
            if (err) reject(err);
            resolve(records);
        })
    }).catch(console.log)
})