import {FETCH_POKEMONS} from "../actions/types";
const INITIAL_STYLE = {
    count: 0,
    pokemons: []
}

export default (state = INITIAL_STYLE, action) => {
    switch (action.type) {
        case FETCH_POKEMONS:
            return {...state, pokemons: action.payload, count: action.payload.length}
        default:
            return state;
    }
}