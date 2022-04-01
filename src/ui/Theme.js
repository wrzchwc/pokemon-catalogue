import {createTheme} from "@mui/material";

const pokeRed = '#F00';
const pokeYellow = '#FFDE00';

export default createTheme({
    palette: {
        common: {
            red: pokeRed,
            yellow: pokeYellow
        },
        primary: {
            main: pokeRed
        },
        secondary: {
            main: pokeYellow
        }
    }
})