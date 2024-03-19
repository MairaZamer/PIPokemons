const getPokemon = require("../controllers/getPokemon");

const getPokeHandlers = async (req, res) =>{
    try {
        const pokemons = await getPokemon();
        res.status(200).json(pokemons)
    } catch (error) {
        res.status(404).json( {error: error.message} )
    }
}

module.exports = getPokeHandlers;