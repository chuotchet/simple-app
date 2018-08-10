const express = require("express");
const routes = require('./routes/');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

let port = 3000 || process.env.PORT;

app.use('/', router);
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
