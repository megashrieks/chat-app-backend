let express = require("express");

const PORT = 8080;

let app = express();
app.use(require('cors')());
app.use('/', require('./routes/login'));
app.listen(PORT, () => console.log(`Listening to port : ${PORT}`));