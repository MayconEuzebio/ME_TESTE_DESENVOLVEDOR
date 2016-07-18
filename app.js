#!/usr/bin/env nodejs

var express = require('express');
var app = express();

app.use(express.static('./app'));
/* serves main page */
app.get("/", function(req, res) {
    res.sendfile('index.htm')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});