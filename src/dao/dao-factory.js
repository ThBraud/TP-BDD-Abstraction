module.exports = {

    /**
     * Retourne un IDAOGame
     */
    getDAOGame : () => {
        // En amont on aura une config qui permet de savoir le quel on active
        // MODE : SEQUELIZE
        if (process.env.BDD_MODE === "sequelize") {
            const DAOGameSequelize = require("./sequelize/daogame-sequelize");
            return new DAOGameSequelize();
        }
        // MODE : Mongoose
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOGameMongoose = require("./mongoose/daogame-mongoose");
            return new DAOGameMongoose();
        }
    }
}