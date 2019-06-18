let express = require("express");
let bodyParser = require("body-parser");
const PORT = 8080;

let app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('cors')());
app.use('/', require('./routes/'));
app.listen(PORT, () => console.log(`Listening to port : ${PORT}`));