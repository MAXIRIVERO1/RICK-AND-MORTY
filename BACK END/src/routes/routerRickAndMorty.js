const {getByNameHandler} = require("../handlers/getByNameHandler.js")
const {createCharacterHandler} = require("../handlers/createCharacterHandler.js")
const {deleteCharacterHandler} = require("../handlers/deleteCharacterHandler.js")
const {putCharacterHandler} = require("../handlers/putCharacterHandler.js")



const routerRickAndMorty = require("express").Router();

routerRickAndMorty.get("/:name", getByNameHandler)
routerRickAndMorty.post("/create", createCharacterHandler)
routerRickAndMorty.delete("/:_id", deleteCharacterHandler)
routerRickAndMorty.put("/:id", putCharacterHandler)

module.exports = {routerRickAndMorty}