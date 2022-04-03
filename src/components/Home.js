import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchPokemon} from "../actions";
import {Button, Fab, Grid, InputAdornment, TextField} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PokemonCard from "./PokemonCard";
import {useTheme} from "@mui/styles";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Home = ({fetchPokemon, ...props}) => {
    const theme = useTheme();
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const timeOutId = setTimeout(() => setFilter(query), 100);
        return () => clearTimeout(timeOutId);
    }, [query]);

    const pokemonCards = (
        props.pokemons.map((p, index) => {
            return (
                <Grid item key={`p${index}`} style={{maxWidth: '70em', width: '100%'}} sx={{px: '0.5em'}}>
                    <PokemonCard pokemon={p}/>
                </Grid>
            )
        })
    )

    return (
        <>
            <Grid
                container
                direction={'column'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                style={{minHeight: 'calc(100vh - 13em)'}}
            >
                <Grid item container justifyContent={'center'} alignItems={'center'}>
                    <Grid item style={{maxWidth: '70em', width: '100%'}} sx={{px: '0.5em'}}>
                        <TextField
                            fullWidth
                            placeholder={'query by name or type'}
                            variant={'outlined'}
                            name={'filter'}
                            color={'info'}
                            label={'filter'}
                            sx={{my: '0.5em'}}
                            value={query}
                            onChange={event => setQuery(event.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FilterAltIcon color={'primary'}/>
                                    </InputAdornment>
                                ),
                                style: {
                                    background: theme.palette.secondary.main,
                                    color: theme.palette.info.main
                                }
                            }}
                        />
                    </Grid>
                </Grid>
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
        </>
    );
}

const mapStateToProps = state => {
    return {pokemons: state.pokedex.pokemons};
}
export default connect(mapStateToProps, {fetchPokemon})(Home);