const getPokemonById = require("../controllers/getPokemonById");

const getPokeIdHandlers = async (req, res) =>{
    try {
        const { idPokemon } = req.params;
        const pokemon = await getPokemonById(idPokemon);
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = getPokeIdHandlers;