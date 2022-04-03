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
import getObjectValues from "../functions/values";
import {useMediaQuery} from "@mui/material";

const Home = ({fetchPokemon, ...props}) => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));


    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const timeOutId = setTimeout(() => setFilter(query), 100);
        return () => clearTimeout(timeOutId);
    }, [query]);

    const renderPokemonCards = () => {
        const matchingType = props.pokemons.filter(pokemon => getObjectValues(pokemon.types)
            .filter(value => ((typeof value !== 'number') && (!value.includes('https://pokeapi.co/api/v2/type'))))
            .some(type => type.includes(filter)));

        return props.pokemons.filter(p => p.name.includes(filter) || matchingType.includes(p)).map((p, index) => {
            return (
                <Grid item key={`p${index}`} style={{maxWidth: '70em', width: '100%'}} sx={{px: '1em'}}>
                    <PokemonCard pokemon={p}/>
                </Grid>
            )
        })
    }

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
                    <Grid item style={{maxWidth: '70em', width: '100%'}} sx={{px: '1em'}}>
                        <TextField
                            fullWidth
                            placeholder={'query by name or type'}
                            variant={'outlined'}
                            name={'filter'}
                            color={'info'}
                            label={'filter'}
                            sx={{my: '1em'}}
                            value={query}
                            size={matchesSM ? 'small' : matchesMD ? 'medium' : 'large'}
                            onChange={event => setQuery(event.target.value)}
                            type={'text'}
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
                <>{renderPokemonCards()}</>
                <Grid item container justifyContent={'center'} alignItems={'center'}>
                    <Button
                        size={matchesSM ? 'small' : matchesMD ? 'medium' : 'large'}
                        variant={'contained'}
                        color={'secondary'}
                        disableFocusRipple
                        sx={{
                            marginBottom: '0.5em',
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
                sx={{bottom: '7.5em', right: 16, position: 'fixed'}}
                onClick={() => window.scroll(0, 0)}
                size={matchesSM ? 'small' : 'medium'}
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