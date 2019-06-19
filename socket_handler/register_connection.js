module.exports = ({ socket, on_line_register }) => ({ token }) => {
    let { jwt_verify } = require("../utils");
    jwt_verify(token, require("../secret").json_key).then(decoded => {
        on_line_register.user_to_id[decoded.username] = socket.id;
        on_line_register.id_to_user[socket.id] = decoded.username;
        on_line_register.id_to_socket[socket.id] = socket;
        let { send_pending_messages } = require("./send_pending_messages");
        let { delete_message_with_id } = require("../database");
        send_pending_messages({ socket, username: decoded.username })
            .then(result => {
                result.messages.forEach(({ from, to, _id }) => {
                    console.log(`pending messages sent from ${from} to ${to}`);
                    delete_message_with_id({ _id })
                        .then(() => console.log(`${_id} deleted successfully`));
                })
        });
    }).catch(_ => {
        socket.emit("error", { error: "token not valid" });
    });
}