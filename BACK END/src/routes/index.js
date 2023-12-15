const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const recipe = require("../controllers.js/recipe")
const {routerRickAndMorty} = require("./routerRickAndMorty.js")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/rickAndMorty", routerRickAndMorty)


module.exports = {router}