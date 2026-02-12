const  { logger } = require("../logger");
const { makeService } = require("./service-helper");
const { v4 : uuidv4 }= require('uuid');

// Import DAOFactory pour récupére rnotre dao de manière abstraite
const DAOFactory = require("../dao/dao-factory");

module.exports = {

    // Un fonction du metier
    createArticle : async () => {

        // L'objet jeu a insérer
        const generatedId = uuidv4(); // id générer
        let article = { uid: generatedId, title: "Un jeu" };

        const monNewArticle = await DAOFactory.getDAOArticle().insert(article);

        // logger.info(`Code: 200 | Message: Article crée avec succès`);
        // return { code: "200", message: "Article crée avec succès", data: monNewArticle };
        return makeService("200", "Article crée avec succès", monNewArticle);
    },

    getAll : async () => {
        // Select all
        const AllArticles = await DAOFactory.getDAOArticle().selectAll();

        return makeService("200", "Tout les articles ont été récupérés", AllArticles);
    }
}