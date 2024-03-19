const { Pokemon, Type } = require("../db");

const createPokemon = async (name, image, life, attaque, defense, speed, height, weight, types) => {
    const [createdPoke, created] = await Pokemon.findOrCreate({
        where: {
            name, image, life, attaque, defense, speed, height, weight
        }
    });

    if (created) {
        for (const typeName of types) {
            const [type] = await Type.findOrCreate({ where: { name: typeName } });
            await createdPoke.addType(type);
        }

        const response = {
            status: 200,
            message: "Creado correctamente",
            pokemon: {
                id: createdPoke.id,
                name: createdPoke.name,
                image: createdPoke.image,
                life: createdPoke.life,
                attaque: createdPoke.attaque,
                defense: createdPoke.defense,
                speed: createdPoke.speed,
                height: createdPoke.height,
                weight: createdPoke.weight,
                types: types, 
            },
        };

        return response;
    }
};


module.exports = createPokemon;

