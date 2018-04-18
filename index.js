var express = require('express');

var app = express();

const PORT = 1667;

// Include main game server
app.use('/', require('./server'))

// Serve static HTML
app.use(express.static('html', {extensions: ['html']}));

// Start application
app.listen(PORT, function() {
    console.log('Application started');
});
