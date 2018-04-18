var express = require('express');

var app = express();

// Redirect index
app.get('/', function(req, res) {
    res.redirect('/home');
})

module.exports = app;
