import {INIT_POKEMONS} from "../actions/types";
import {FETCH_POKEMON} from "../actions/types";
import {FETCH_MORE} from "../actions/types";

const INITIAL_STYLE = {
    count: 0,
    pokemons: []
}

export default (state = INITIAL_STYLE, action) => {
    switch (action.type) {
        case INIT_POKEMONS:
            return {...state, pokemons: action.payload, count: action.payload.length};
        case FETCH_POKEMON: {
            let fetchedItem = state.pokemons.find(pokemon => pokemon.url === action.url);
            state.pokemons[state.pokemons.indexOf(fetchedItem)] = action.payload;
            return {...state};
        }
        case FETCH_MORE:
            return {pokemons: state.pokemons.concat(action.payload), count: state.count + action.payload.length};
        default:
            return state;
    }
}