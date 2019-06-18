module.exports = ({ socket, on_line_register }) => ({ token }) => {
    let { jwt_verify } = require("../utils");
    jwt_verify(token, require("../secret").json_key).then(decoded => {
        on_line_register.user_to_id[decoded.username] = socket.id;
        on_line_register.id_to_user[socket.id] = decoded.username;
        on_line_register.id_to_socket[socket.id] = socket;
    }).catch(_ => {
        socket.emit("error", { error: "token not valid" });
    });
}