import React from 'react';
import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchPokemon} from "../actions";
import {Button, Fab} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Home = ({fetchPokemon, ...props}) => {
    useEffect(() => {
        for (let i = 1; i <= 20; i++) {
            fetchPokemon(i);
        }
    }, [fetchPokemon]);


    return (
        <div style={{minHeight: 'calc(100vh - 13em)'}}>
            Home
            <Button
                size={'large'}
                variant={'contained'}
                color={'secondary'}
                disableFocusRipple
                onClick={() => {
                    const offset = props.pokemons.length;
                    for (let i = offset + 1; i <= offset + 5; i++) {
                        fetchPokemon(i);
                    }
                }}
            >
                MORE POKEMONS
            </Button>
            <Fab
                color="secondary"
                aria-label="add"
                sx={{bottom: '9em', right: 24, position: 'fixed'}}
                onClick={() => window.scroll(0, 0)}
                size={'medium'}
                disableRipple
            >
                <ArrowUpwardIcon sx={{color: 'red'}}/>
            </Fab>
        </div>
    );
}

const mapStateToProps = state => {
    return {pokemons: state.pokedex.pokemons};
}
export default connect(mapStateToProps, {fetchPokemon})(Home);