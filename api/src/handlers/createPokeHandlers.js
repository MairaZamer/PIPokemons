const createPokemon = require("../controllers/createPokemon");

const createPokeHandlers = async (req, res) => {
    try {
        const { name, image, life, attaque, defense, speed, height, weight, types } = req.body;

        // Validar los datos de entrada aquí si es necesario

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
        
        res.status(200).json(poke);

    } catch (error) {
        console.error("Error al crear el Pokémon:", error);
        res.status(400).json({ error: "No se pudo crear el Pokémon. Inténtalo de nuevo más tarde." });
    }
}

module.exports = createPokeHandlers;
