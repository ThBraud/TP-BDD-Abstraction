const Article = require("./article-model");
const IDAOArticle = require("../idaoarticle");

class DAOArticleSequelize extends IDAOArticle {
    async insert(article) {
        // Créer et sauvegarder en une seule fois
        return await Article.create(article);
    }

    /**
     * Override explicitement si la methode existe dans le parent
     */
    async selectAll() {
        return await Article.findAll();
    }

    async selectByUid(uid) {
        return await Article.findOne({ where: { uid: uid } });
    }

    async deleteByUid(uid) {
        const article = await Article.findByPk(uid);

        if (!article) {
            return null;  // Article non trouvé
        }

        await article.destroy();
        return article;  // Retourne l'article supprimé
    }

    async updateArticle (uid, articleData) {
        let article = await Article.findByPk(uid);

        if (article) {
            // Update
            await article.update(articleData);
        } else {
            // Create
            article = await Article.create({ uid, ...articleData });
        }

        return article;
    }


}

module.exports = DAOArticleSequelize;