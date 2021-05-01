const express = require('express');

const app = express();
const port = 4000;

const { gettokencommand } = require("./login/tokencommand")

var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    next();
})

// react servis tarafından gelen istek bu endpoint ile karşılanır
app.post("/login", (req, res) => {
    gettokencommand(req, res, jwt);
});

app.listen(port);
