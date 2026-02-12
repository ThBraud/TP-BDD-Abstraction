const Game = require("./article-model");
const IDAOGame = require("../idaoarticle");

class DaoarticleSequelize extends IDAOGame {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(game) {
        return await Game.create(game);
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Game.findAll();
    }
}

module.exports = DaoarticleSequelize;