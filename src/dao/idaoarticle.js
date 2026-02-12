class IDAOArticle {
    async insert(article) {}

    async selectAll(){}

    async selectByUid(uid) {}
    async deleteByUid(uid) {}
    async updateArticle(uid, articleData) {}
}

module.exports = IDAOArticle;