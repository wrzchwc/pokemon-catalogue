import {createTheme} from "@mui/material";

const pokeRed = '#F00';
const pokeYellow = '#FFDE00';
const pokeBlue = '#3B4CCA';

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
        },
        info: {
            main: pokeBlue
        }
    },
    typography: {
        fontFamily: "'Bangers', cursive"
    },
    overrides:{
        MuiCardActions:{
            root:{
                justifyContent: 'flex-end'
            }
        }
    }
})