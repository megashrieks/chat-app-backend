module.exports = on_line_register => socket => {
    socket.on("register_connection",require("./register_connection")({socket,on_line_register}))
    socket.on("send", require("./send_message")({socket,on_line_register}))
    socket.on("disconnect", require("./deregister_connection")({socket,on_line_register}))
}