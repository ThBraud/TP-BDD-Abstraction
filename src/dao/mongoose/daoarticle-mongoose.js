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

    async selectByUid(uid) {
        return await Article.findOne({uid: uid});
    }

    async deleteByUid(uid) {
        return await Article.findOneAndDelete({uid: uid});
    }
    async updateArticle(uid, articleData) {
        return await Article.findOneAndUpdate(
            {uid: uid},
            articleData,
            {
                new: true,
                updated: true, //Créer si il n'existe pas
                runValidators: true, //Sauvegarde
            }
        );
    }
}

module.exports = DAOArticleMongoose;