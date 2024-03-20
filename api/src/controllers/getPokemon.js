require("dotenv").config();
const axios = require("axios");
const { Pokemon, Type } = require("../db");

const getPokemon = async () => {
  const pokeDB = await Pokemon.findAll({ include: { model: Type } });

  const newPoke = pokeDB.map((pokemon) => {
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
      types: pokemon.Types
        ? pokemon.Types.map((type) => type.name).join(", ")
        : "",
    };
  });

  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?limit=300"
  );
  const result = response.data.results;

  const promises = result.map(async (pokemon) => {
    const pokemonResponse = await axios.get(pokemon.url);
    const apiInfo = pokemonResponse.data;
    const poke1 = {
      id: apiInfo.id,
      name: apiInfo.name,
      image: apiInfo.sprites ? apiInfo.sprites.front_default : "",
      life: apiInfo.stats ? apiInfo.stats[0].base_stat : 0,
      attaque: apiInfo.stats ? apiInfo.stats[1].base_stat : 0,
      defense: apiInfo.stats ? apiInfo.stats[2].base_stat : 0,
      speed: apiInfo.stats ? apiInfo.stats[5].base_stat : 0,
      height: apiInfo.height,
      weight: apiInfo.weight,
      types: apiInfo.types
        ? apiInfo.types.map((type) => type.type.name).join(", ")
        : "",
    };
    return poke1;
  });

  const pokeData = await Promise.all(promises);

  const combineData = newPoke.concat(pokeData);
  return combineData;
};

module.exports = getPokemon;
