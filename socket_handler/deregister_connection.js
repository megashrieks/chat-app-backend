module.exports = (socket, on_line_register )=> () => {
    let username = on_line_register.id_to_user[socket.id];
    delete on_line_register.user_to_id[username];
    delete on_line_register.id_to_socket[socket.id];
    require("../database").cleanup({username})
}