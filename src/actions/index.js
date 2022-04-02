import pokemon from "../api/pokemon";
import axios from "axios";
import {INIT_POKEMONS} from "./types";
import {FETCH_POKEMON} from "./types";
import {FETCH_MORE} from "./types";


export const initPokemons = () => async dispatch => {
    const response = await pokemon.get('/pokemon', {params: {limit: 20}});
    let {results} = response.data;
    dispatch({type: INIT_POKEMONS, payload: results});
    results.forEach(result => dispatch(fetchPokemon(result.url)));
}

export const fetchMore = (offset, limit) => async dispatch => {
    const response = await pokemon.get('/pokemon', {
            params: {
                offset: offset,
                limit: limit
            }
        }
    );
    let {results} = response.data;
    dispatch({type: FETCH_MORE, payload: results});
    results.forEach(result => dispatch(fetchPokemon(result.url)));
}

export const fetchPokemon = (url) => async dispatch => {
    const response = await axios.get(url);
    const {name, height, weight, sprites, types} = response.data;
    dispatch({type: FETCH_POKEMON, payload: {name, height, weight, sprites, types}, url: url});
}