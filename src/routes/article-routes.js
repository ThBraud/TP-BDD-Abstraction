const express = require('express')
const router = express.Router()
const ArticleService = require('../services/article-service');

//Créer un article
router.post("/create-article", async (request, response) => {
    const articleData = request.body;
    const serviceResponse = await ArticleService.createArticle(articleData);

    return response.json(serviceResponse);
});

//Supprimer un article via son uid
router.delete("/delete-article/:uid", async (request, response) => {
    const serviceResponse = await ArticleService.deleteArticle(request.params.uid);
    return response.json(serviceResponse);
});
//Mettre à jour ou créer un article
router.put("/update-article/:uid", async (request, response) => {
    const serviceReponse = await ArticleService.saveArticle(request.params.uid, request.body);
    return response.json(serviceReponse);
})
//Avoir toute la liste des articles
router.get("/articles", async (request, response) => {

    const serviceResponse = await ArticleService.getAll();

    return response.json(serviceResponse);
});

//Avoir un article selon son uid
router.get("/articles/:uid", async (request, response) => {
    const serviceResponse = await ArticleService.getByUid(request.params.uid);
    return response.json(serviceResponse);
});

module.exports = router