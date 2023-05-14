var express = require('express');
var bodyParser = require("body-parser");
const cors = require('cors');
const DeviceRoutes = require('./route');

var app = express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', DeviceRoutes.routes);
var server = app.listen(5555, function () {
    var port = server.address().port
    console.log("Example app listening at http://localhost:"+ port)
})