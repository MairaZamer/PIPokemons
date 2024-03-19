const createPokemon = require("../controllers/createPokemon");

const createPokeHandlers = async (req, res) => {
    try {
        const { name, image, life, attaque, defense, speed, height, weight, types } = req.body;

        const poke = await createPokemon(
            name,
            image,
            life,
            attaque, 
            defense, 
            speed,
            height,
            weight,
            types
        );

        if (!poke) {
            res.status(404).json({ message: "No se pudo crear el Pokémon" });
            return;
        }

        if (poke.status === 200) {
            const response = {
                id: poke.pokemon.id,
                name: poke.pokemon.name,
                image: poke.pokemon.image,
                life: poke.pokemon.life,
                attaque: poke.pokemon.attaque,
                defense: poke.pokemon.defense,
                speed: poke.pokemon.speed,
                height: poke.pokemon.height,
                weight: poke.pokemon.weight,
                types: poke.pokemon.types
            };
            res.status(200).json(response);
        } else {
            res.status(404).json({ message: "No se pudo crear el Pokémon" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = createPokeHandlers;
