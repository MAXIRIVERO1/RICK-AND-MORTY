const {getByNameHandler} = require("../handlers/getByNameHandler.js")
const {createCharacterHandler} = require("../handlers/createCharacterHandler.js")



const routerRickAndMorty = require("express").Router();

routerRickAndMorty.get("/:name", getByNameHandler)
routerRickAndMorty.post("/create", createCharacterHandler)

module.exports = {routerRickAndMorty}