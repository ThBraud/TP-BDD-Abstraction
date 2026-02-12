const Article = require("./article-model");
const IDAOArticle = require("../idaoarticle");

class DAOArticleMongoose extends IDAOArticle {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        // Intancier l'objet
        const newArticle = new Article(article);
        // Save
        return await newArticle.save();
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Article.find();
    }
}

module.exports = DAOArticleMongoose;