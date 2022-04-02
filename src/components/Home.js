import React from 'react';
import {useEffect} from "react";
import {connect} from "react-redux";
import {initPokemons} from "../actions";
import {fetchMore} from "../actions";
import {Button, Fab} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Home = ({initPokemons, ...props}) => {
    useEffect(() => {
        initPokemons();
    }, [initPokemons]);


    return (
        <div style={{minHeight: 'calc(100vh - 13em)'}}>
            Home
            <Button
                size={'large'}
                variant={'contained'}
                color={'secondary'}
                disableFocusRipple
                onClick={() => {
                    props.fetchMore(props.pokemons.length, 5);
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
export default connect(mapStateToProps, {initPokemons, fetchMore})(Home);