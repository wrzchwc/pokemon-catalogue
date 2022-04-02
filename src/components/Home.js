import React from 'react';
import {useEffect} from "react";
import {connect} from "react-redux";
import {initPokemons} from "../actions";
import {fetchMore} from "../actions";
import {Button} from "@mui/material";

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
        </div>
    );
}

const mapStateToProps = state => {
    return {pokemons: state.pokedex.pokemons};
}
export default connect(mapStateToProps, {initPokemons, fetchMore})(Home);