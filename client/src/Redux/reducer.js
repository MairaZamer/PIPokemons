import {
  CREATE_POKEMON,
  GET_POKEMON,
  GET_NAME,
  GET_ID,
  GET_TYPES,
  ORDER_A_Z,
  ORDER_ATAQUE,
  FILTERTYPES,
  FILTERAPIDB,
} from "./actions.types";

let initialState = {
  newPokemons: [],
  pokemones: [],
  detailsPoke: [],
  newTypes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON:
      return {
        ...state,
        newPokemons: action.payload,
        pokemones: action.payload,
      };

    case GET_NAME:
      if (action.payload.hasOwnProperty("name")) {
        return {
          ...state,
          newPokemons: [...action.payload],
          pokemones: [...action.payload],
        };
      } else {
        return {
          ...state,
          newPokemons: [...action.payload],
          pokemones: [...action.payload],
        };
      }

    case CREATE_POKEMON:
      return {
        ...state,
        newPokemons: [...state.newPokemons, action.payload],
        pokemones: [...state.pokemones, action.payload],
      };

    case GET_ID:
      return {
        ...state,
        detailsPoke: action.payload,
      };

    case GET_TYPES:
      return {
        ...state,
        newTypes: action.payload,
      };

    case ORDER_A_Z:
      if(action.payload === "todos"){
        const allCopy = state.newPokemons;
        return{
          ...state,
          pokemones:[...allCopy]
        };
      }
      if(action.payload === 'A'){
        const result = [...state.pokemones].sort((a, b) => a.name.localeCompare(b.name));
        return{
          ...state,
          pokemones: result,
        };
      }
      else if(action.payload){
        const result = [...state.pokemones].sort((a, b) => b.name.localeCompare(a.name))
        return{
          ...state,
          pokemones: result,
        };
      }

    case ORDER_ATAQUE:
      if(action.payload === "ataqueMin"){
        const allCopy = [...state.pokemones];
        const result = allCopy.sort((a, b) => a.attaque - (b.attaque));
        return{
          ...state,
          pokemones: [...result]
        };
      }
      if(action.payload === "ataqueMax"){
        const allCopy = [...state.pokemones];
        const result = allCopy.sort((a, b) => b.attaque - (a.attaque));
        return{
          ...state,
          pokemones: [...result]
        };
      }
      else if(action.payload === "todos"){
        const allCopy = [...state.newPokemons];
        return{
          ...state,
          pokemones: allCopy
        };
      }

    

    case FILTERTYPES:
        const copyTypes = [...state.newPokemons];
        const response = [
            ...copyTypes.filter((pokemon) => {
                return(
                    pokemon.types &&
                    pokemon.types
                    .split(", ")
                    .map((element) => element.trim())
                    .includes(action.payload)
                );
            }),
        ];
        return{
            ...state,
            pokemons: response,
        };
    
    case FILTERAPIDB:
        let filteredPokemon = [];
        if(action.payload === "api"){
            filteredPokemon = state.newPokemons.filter((pokemon) => pokemon.id.toString().length < 6 );
        }else if (action.payload === "db"){
            filteredPokemon = state.newPokemons.filter((pokemon) => pokemon.id.toString().length > 6 );
        }else if(action.payload === "todos"){
            filteredPokemon = state.newPokemons;
        };
        return{
            ...state,
            pokemones: [...filteredPokemon],
        }
  }
};

export default reducer;
