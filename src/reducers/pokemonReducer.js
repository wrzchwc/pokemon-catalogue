import {INIT_POKEMONS} from "../actions/types";
import {FETCH_POKEMON} from "../actions/types";
import {FETCH_MORE} from "../actions/types";

const INITIAL_STYLE = {
    pokemons: []
}

export default (state = INITIAL_STYLE, action) => {
    switch (action.type) {
        case INIT_POKEMONS:
            return {...state, pokemons: action.payload};
        case FETCH_POKEMON:
            return {pokemons: state.pokemons.map(pokemon => pokemon.url === action.url ? action.payload : pokemon)};
        case FETCH_MORE:
            return {pokemons: state.pokemons.concat(action.payload)};
        default:
            return state;
    }
}