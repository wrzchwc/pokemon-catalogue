import pokemon from "../api/pokemon";
import {FETCH_POKEMON} from "./types";


export const fetchPokemon = (id) => async dispatch => {
    const response = await pokemon.get(`/pokemon/${id}`);
    const {name, height, weight, sprites, types, base_experience} = response.data;
    dispatch({type: FETCH_POKEMON, payload: {name, height, weight, sprites, types, base_experience}});
}