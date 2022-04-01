import React from 'react';
import {AppBar} from "@mui/material";
import {Typography} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <AppBar position={"fixed"}>
                <Toolbar sx={{height: '6em'}}>
                    <Typography
                        color={"secondary"}
                        component={Link}
                        to={"/"}
                        sx={{
                            textDecoration: 'none',
                            fontSize: '3em',
                            fontFamily: "'Bangers', cursive",

                        }}
                    >
                        Pokemon Catalogue
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{marginBottom: "6.5em"}}/>
        </>
    );
}

export default Header;