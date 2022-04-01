import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './components/Home'
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import {ThemeProvider} from "@mui/material";
import theme from './ui/Theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"*"} element={<Navigate to={"/"}/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;