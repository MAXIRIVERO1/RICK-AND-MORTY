const {getByNameHandler} = require("../handlers/getByNameHandler.js")
const {createCharacterHandler} = require("../handlers/createCharacterHandler.js")
const {deleteCharacterHandler} = require("../handlers/deleteCharacterHandler.js")
const {putCharacterHandler} = require("../handlers/putCharacterHandler.js")
const {getByIdHandler} = require("../handlers/getByIdHandler.js")
const { getRandomHandler } = require("../handlers/getRandomHandler.js")



const routerRickAndMorty = require("express").Router();

routerRickAndMorty.get("/name/:name", getByNameHandler)
routerRickAndMorty.post("/create", createCharacterHandler)
routerRickAndMorty.delete("/:_id", deleteCharacterHandler)
routerRickAndMorty.put("/:id", putCharacterHandler)
routerRickAndMorty.get("/by/:id", getByIdHandler)
routerRickAndMorty.get("/random", getRandomHandler)

module.exports = {routerRickAndMorty}