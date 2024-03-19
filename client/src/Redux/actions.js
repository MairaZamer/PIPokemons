import axios from 'axios';
import { CREATE_POKEMON, GET_POKEMON, GET_NAME, GET_ID, GET_TYPES, FILTERTYPES, FILTERAPIDB, ORDER_A_Z, ORDER_ATAQUE } from './actions.types';

export const getPokemon = () =>{
    return async (dispatch) =>{
        const response = await axios.get(`http://localhost:3001/pokemons`)
        dispatch({
            type: GET_POKEMON,
            payload: response.data
        });
    };
};

export const getPokeName = (name) =>{
    return async(dispatch) =>{
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`)
            dispatch({
                type: GET_NAME,
                payload: response.data
            })
        } catch (error) {
            alert(`No se encontraron ningun pokemon con el nombre "${name}"` )
        }
    }
}

export const getById = (id) =>{
    return async (dispatch) =>{
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
        dispatch({
            type: GET_ID,
            payload: response.data
        })
    }
}

export const createPokemon = (data) => {
    return async(dispatch) =>{
        try {
            const response = await axios.get(`http://localhost:3001/pokemons`, data)
            alert('Ya esta creado')
            dispatch({
                type: CREATE_POKEMON,
                payload: response.data,
            });
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export const allTypes = () =>{
    return async (dispatch) =>{
        const response = await axios.get('http://localhost:3001/types');
        dispatch({
            type: GET_TYPES,
            payload: response.data,
        })
    }
}

export const orderAlfab = (order) =>{
    return{
        type: ORDER_A_Z,
        payload: order,
    }
}

export const orderAtaque = (order) =>{
    return{
        type: ORDER_ATAQUE,
        payload: order
    }
}

export const filterDbApi = (value) =>{
    return{
        type: FILTERAPIDB,
        payload: value,
    }
}

export const filterType = (value) =>{
    return{
        type: FILTERTYPES,
        payload: value,
    }
}
