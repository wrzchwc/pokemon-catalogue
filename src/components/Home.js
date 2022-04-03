import React from 'react';
import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchPokemon} from "../actions";
import {Button, Fab, Grid} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PokemonCard from "./PokemonCard";
import {useTheme} from "@mui/styles";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Home = ({fetchPokemon, ...props}) => {
    const theme = useTheme();

    useEffect(() => {
        for (let i = 1; i <= 20; i++) {
            fetchPokemon(i);
        }
    }, [fetchPokemon]);

    const pokemonCards = (
        props.pokemons.map((p, index)=>{
            return (
                <Grid item key={`p${index}`} style={{maxWidth: '70em', width: '100%'}} sx={{px: '0.5em'}}>
                    <PokemonCard pokemon={p}/>
                </Grid>
            )
        })
    )

    return (
        <Grid
            container
            direction={'column'}
            justifyContent={'flex-start'}
            alignItems={'center'}
            style={{minHeight: 'calc(100vh - 13em)'}}
        >
            <>{pokemonCards}</>
            <Grid item container justifyContent={'center'} alignItems={'center'}>
                <Button
                    size={'large'}
                    variant={'contained'}
                    color={'secondary'}
                    disableFocusRipple
                    sx={{
                        marginBottom: '2.5em',
                        color: theme.palette.info.main
                    }}
                    onClick={() => {
                        const offset = props.pokemons.length;
                        for (let i = offset + 1; i <= offset + 5; i++) {
                            fetchPokemon(i);
                        }
                    }}
                    startIcon={<CatchingPokemonIcon color={'primary'}/>}
                >
                    MORE POKEMONS
                </Button>
            </Grid>
            <Fab
                color="info"
                aria-label="add"
                sx={{bottom: '9em', right: 24, position: 'fixed'}}
                onClick={() => window.scroll(0, 0)}
                size={'medium'}
                disableRipple
            >
                <ArrowUpwardIcon sx={{color: theme.palette.common.yellow}}/>
            </Fab>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {pokemons: state.pokedex.pokemons};
}
export default connect(mapStateToProps, {fetchPokemon})(Home);