const express = require('express')
const router = express.Router()
const GameService = require('../services/game-service');

router.get("/create-game", async (request, response) => {

    const serviceResponse = await GameService.createGame();

    return response.json(serviceResponse);
});

router.get("/games", async (request, response) => {

    const serviceResponse = await GameService.getAll();

    return response.json(serviceResponse);
});

module.exports = router