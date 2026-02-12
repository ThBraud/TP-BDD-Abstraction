const Game = require("./game-model");
const IDAOGame = require("../idaogame");

class DAOGameMongoose extends IDAOGame {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(game) {
        // Intancier l'objet
        const newGame = new Game(game);
        // Save
        return await newGame.save();
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Game.find();
    }
}

module.exports = DAOGameMongoose;