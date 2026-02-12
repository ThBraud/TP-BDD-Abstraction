require('dotenv').config()

const express = require('express');

// Initialiser l'application back
const app = express();

// MODE : SEQUELIZE
if (process.env.BDD_MODE === "sequelize") {
    require("./dao/sequelize/connexion").connect_sequelize();
}
// MODE : Mongoose
else if (process.env.BDD_MODE === "mongodb") {
    require("./dao/mongoose/connexion").connect_mongoose();
}

// Injecter route externe
// -- importer
const gameRoutes = require('./routes/article-routes')
// -- injecter dans le serveur
app.use(gameRoutes);

// Démarrer le serveur avec le port 3000
app.listen(3000, () => {
    console.log("Le serveur a démarré");
});