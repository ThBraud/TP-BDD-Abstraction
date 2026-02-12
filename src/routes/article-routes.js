const express = require('express')
const router = express.Router()
const ArticleService = require('../services/article-service');

router.get("/create-article", async (request, response) => {

    const serviceResponse = await ArticleService.createArticle();

    return response.json(serviceResponse);
});

router.get("/articles", async (request, response) => {

    const serviceResponse = await ArticleService.getAll();

    return response.json(serviceResponse);
});

module.exports = router