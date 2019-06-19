module.exports = ({ socket, on_line_register }) => ({to,message})=>{
    //check if current user is legit
    let username = on_line_register.id_to_user[socket.id];
    if (!username) {
        socket.emit("error", { error: "couldn't send message because you are not registered in the server" })
        return;
    }

    //check if the receiver is online
    //if the receiver is online just send to socket
    //else put the message to the database

    let receiver = on_line_register.user_to_id[to];
    if (receiver) on_line_register.id_to_socket[receiver]
        .emit("message", {
            error: null,
            messages: [{
                from: username,
                message
            }]
        })
    else {
        let { send_message } = require("../database");
        send_message({ from: username, to, message }).then(_ => {
            socket.emit("acknoledgement", { error: null, message: "message sent successfully" });
        }).catch(error=>socket.emit("error",{error}))
    }
}