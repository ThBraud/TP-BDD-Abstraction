const  { logger } = require("../logger");
const { makeService } = require("./service-helper");
const { v4 : uuidv4 }= require('uuid');

// Import DAOFactory pour récupére rnotre dao de manière abstraite
const DAOFactory = require("../dao/dao-factory");

module.exports = {

    // Créer un article via une méthode POST et un raw JSON
    createArticle: async (articleData) => {
        // Validation des données
        if (!articleData.title || !articleData.author || !articleData.desc) {
            return makeService("400", "Un des champs : Titre, Auteur ou Description est vide.", null);
        }

        // Génération de l'ID
        const generatedId = uuidv4();

        // Construction de l'article avec les données reçues
        let article = {
            uid: generatedId,
            title: articleData.title,
            author: articleData.author,
            desc: articleData.desc,
            ImgPath: articleData.ImgPath || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXILXssmXSPQtysXkpeItOuVoOx6XDn6qGA&s" // Image par défaut si non fournie
        };

        const monNewArticle = await DAOFactory.getDAOArticle().insert(article);

        return makeService("201", "Article créé avec succès", monNewArticle);
    },

    getAll : async () => {
        // Select all
        const AllArticles = await DAOFactory.getDAOArticle().selectAll();

        return makeService("200", "Tout les articles ont été récupérés", AllArticles);
    },

    getByUid: async (uid) => {
    // Validation de l'UID
        if (!uid) {
            return makeService("400", "L'UID est requis", null);
        }

        // Récupération de l'article
        const article = await DAOFactory.getDAOArticle().selectByUid(uid);

        // Vérification si l'article existe
        if (!article) {
            return makeService("721", "L'article n'existe pas", null);
        }

        return makeService("200", "L'article a été récupéré avec succès", article);
    },
    deleteArticle: async (uid) => {
        if (!uid) {
            return makeService("400", "L'UID est requis", null);
        }
        const deletedArticle = await DAOFactory.getDAOArticle().deleteByUid(uid);
        if (!deletedArticle) {
            return makeService("721", "Impossible de supprimer un article inexistant", null);
        }
        return makeService("200", "Article supprimé avec succès", deletedArticle);
    },
    saveArticle: async (uid, articleData) => {
        if (!uid) {
            return makeService("400", "L'UID est requis", null);
        }
        if (!articleData.title || !articleData.author || !articleData.desc) {
            return makeService("400", "Un des champs : Titre, Auteur ou Description est vide.", null);
        }
        const article = {
            uid: uid,
            title: articleData.title,
            author: articleData.author,
            desc: articleData.desc,
            ImgPath: articleData.ImgPath || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXILXssmXSPQtysXkpeItOuVoOx6XDn6qGA&s",
        };
        const savedArticle = await DAOFactory.getDAOArticle().updateArticle(uid, article);
        return makeService("200", "Article sauvegardé avec succès", savedArticle);
},
}