module.exports = {

    /**
     * Retourne un IDAOGame
     */
    getDAOArticle : () => {
        // En amont on aura une config qui permet de savoir le quel on active
        // MODE : SEQUELIZE
        if (process.env.BDD_MODE === "sequelize") {
            const DAOArticleSequelize = require("./sequelize/daoarticle-sequelize");
            return new DAOArticleSequelize();
        }
        // MODE : Mongoose
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOArticleMongoose = require("./mongoose/daoarticle-mongoose");
            return new DAOArticleMongoose();
        }
    }
}