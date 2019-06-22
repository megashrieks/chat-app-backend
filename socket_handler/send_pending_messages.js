module.exports = ({ socket, username }) => new Promise((resolve, reject) => {
    let { get_messages_to } = require("../database");
    get_messages_to({ username }).then(messages => {
        resolve(messages.map(message => ({time:message.time,from:message.from,message:message.message})))
    }).catch(reject)
});