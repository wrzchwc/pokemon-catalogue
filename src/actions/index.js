import pokemon from "../api/pokemon";
import {FETCH_POKEMONS} from "./types";

export const fetchPokemons = (limit) => async dispatch => {
    const response = await pokemon.get('/pokemon', {
            params: {
                limit: limit
            }
        }
    );
    dispatch({type: FETCH_POKEMONS, payload: response.data.results});
}