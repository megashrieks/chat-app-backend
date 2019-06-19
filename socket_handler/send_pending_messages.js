module.exports = ({ socket, username }) => new Promise((resolve, reject) => {
    let { get_messages_to } = require("../database");
    get_messages_to({ username }).then(messages => {
        let result = messages.map(message => ({ _id: message._id, from: message.from }));
        socket.emit("message", {
            error: null,
            messages: result
        }, () => resolve(messages));
    }).catch(reject)
});