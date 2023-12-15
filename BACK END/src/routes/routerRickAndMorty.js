// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const recipe = require("../controllers.js/recipe")
const {getByNameHandler} = require("../handlers/getByNameHandler.js")



const routerRickAndMorty = require("express").Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routerRickAndMorty.get("/:name", getByNameHandler)

module.exports = {routerRickAndMorty}