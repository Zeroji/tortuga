var express = require('express');

var app = express();

const PORT = 1667;

// Ajout du serveur
// API REST
// var api = require("./api/app");
// app.use("/api", api);

// HTML à la racine
app.use(express.static("html"));

// Lancement de l'application
app.listen(PORT, function() {
    console.log('Application started');
});
