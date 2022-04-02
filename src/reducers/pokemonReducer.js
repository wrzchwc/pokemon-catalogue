import {FETCH_POKEMON} from "../actions/types";


const INITIAL_STYLE = {
    pokemons: []
}

export default (state = INITIAL_STYLE, action) => {
    switch (action.type) {
        case FETCH_POKEMON:
            return {pokemons: [...state.pokemons, action.payload]};
        default:
            return state;
    }
}