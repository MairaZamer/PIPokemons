const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getPokemonById = async (idPokemon) => {
  if (idPokemon.toString().length > 5) {
    const pokemonDB = [
      await Pokemon.findByPk(idPokemon, { include: [{ model: Type }] }),
    ];
    const newPokemon = pokemonDB.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        life: pokemon.life,
        attaque: pokemon.attaque,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map((type) => type.name),
      };
    });
    return newPokemon[0];
  }


  try {
    const getInfo = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    );
    const apiInfo = getInfo.data;
    const poke = {
      id: apiInfo.id,
      name: apiInfo.name,
      image: apiInfo.sprites.front_default, 
      life: apiInfo.stats[0].base_stat,
      attaque: apiInfo.stats[1].base_stat,
      defense: apiInfo.stats[2].base_stat,
      speed: apiInfo.stats[5].base_stat,
      height: apiInfo.height,
      weight: apiInfo.weight,
      types: apiInfo.types.map((type) => type.type.name),
    };

    return poke;
  } catch (error) {
    console.error("Error en la solicitud a la API de PokeAPI:", error);
    return null;
  }
};

module.exports = getPokemonById;
