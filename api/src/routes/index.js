const { Router } = require('express');
const createPokeHandlers = require('../handlers/createPokeHandlers');
const getPokeHandlers = require('../handlers/getPokeHandlers');
const getPokeIdHandlers = require('../handlers/getPokeIdHandlers');
const getPokeNameHandlers = require('../handlers/getPokeNameHandlers');
const getTypeHandler = require('../handlers/getTypeHandlers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/pokemons/name", getPokeNameHandlers)
router.get("/pokemons/:idPokemon", getPokeIdHandlers)
router.get("/pokemons", getPokeHandlers)
router.post("/pokemons", createPokeHandlers);
router.get("/types", getTypeHandler)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
