const axios = require("axios");
const { Op } = require("sequelize");
const { Pokemon, Type } = require("../db");

const getPokemonsByName = async (name) => {
  try {
      const pokemonsFromDB = await Pokemon.findAll({
          where: { name: { [Op.iLike]: `%${name}%` } },
          include: Type
      });

      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemonFromAPI = response.data;

      // Procesa y formatea los datos de la API según sea necesario
      const pokemon = {
          id: pokemonFromAPI.id,
          name: pokemonFromAPI.name,
          image: pokemonFromAPI.sprites.front_default,
          life: pokemonFromAPI.stats[0].base_stat,
          attaque: pokemonFromAPI.stats[1].base_stat,
          defense: pokemonFromAPI.stats[2].base_stat,
          speed: pokemonFromAPI.stats[5].base_stat,
          height: pokemonFromAPI.height,
          weight: pokemonFromAPI.weight,
          types: pokemonFromAPI.types.map(type => type.type.name)
      };

      // Combina los datos de la base de datos y la API
      const combinedData = pokemonsFromDB.concat(pokemon);

      return combinedData;
  } catch (error) {
      console.error("Error en la solicitud a la API de Pokémon:", error);
      throw error;
  }
};

module.exports = getPokemonsByName;
