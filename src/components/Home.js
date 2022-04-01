import React from 'react';
import {useEffect} from "react";
import {connect} from "react-redux";
import {fetchPokemons} from "../actions";
import {Button} from "@mui/material";

const Home = ({fetchPokemons, ...props}) => {
    useEffect(() => {
        fetchPokemons(20);
    }, [fetchPokemons]);

    console.log(props.pokemons);

    return (
        <div style={{minHeight: 'calc(100vh - 13em)'}}>
            Home
            <Button
                size={'large'}
                variant={'contained'}
                color={'secondary'}
                disableFocusRipple
                onClick={() => fetchPokemons(props.count + 5)}
            >
                MORE POKEMONS
            </Button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        count: state.pokedex.count,
        pokemons: state.pokedex.pokemons
    }
}
export default connect(mapStateToProps, {fetchPokemons})(Home);