const getPokemonsByName = require("../controllers/getPokemonByName");

const getPokeNameHandlers = async (req, res) => {
    try {
        const { name } = req.query;

        const poke = await getPokemonsByName(name);
        
        res.status(200).json(poke);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = getPokeNameHandlers;
