let express = require("express");
let bodyParser = require("body-parser");
const PORT = 8080;

let app = express();
let server = require("http").Server(app);
let io = require("socket.io")(server);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('cors')());
app.use('/', require('./routes/'));

io.on("connection",require("./socket_handler"))
server.listen(PORT, () => console.log(`Listening to port : ${PORT}`));