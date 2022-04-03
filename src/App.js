import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './components/landing-page/Home'
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import {ThemeProvider} from "@mui/material";
import theme from './ui/Theme';
import {fetchPokemon} from "./actions";
import {connect} from "react-redux";

const App = ({fetchPokemon}) => {
    useEffect(() => {
        for (let i = 1; i <= 20; i++) {
            fetchPokemon(i);
        }
    }, [fetchPokemon]);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path={"/"} element={<Home/>}/>
                    <Route path={"*"} element={<Navigate to={"/"}/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default connect(null, {fetchPokemon})(App);