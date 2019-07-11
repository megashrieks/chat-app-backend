let express = require("express");
let bodyParser = require("body-parser");
const PORT = 8080;

let app = express();
let server = require("http").Server(app);
let io = require("socket.io")(server);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('cors')());
app.use('/', require('./routes/'));

let on_line_register = {
    user_to_id: {},
    id_to_user: {},
    id_to_socket: {}
};
io.on("connection",require("./socket_handler")(on_line_register))
server.listen(PORT, () => console.log(`Listening to port : ${PORT}`));