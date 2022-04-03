import React from 'react';
import {AppBar} from "@mui/material";
import {Typography} from "@mui/material";
import {Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/styles";

const Header = () => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <AppBar position={"fixed"}>
                <Toolbar sx={{height: matchesSM ? '5.5em' : matchesMD ? '5.75em' : '6em'}}>
                    <Typography
                        color={"secondary"}
                        component={Link}
                        to={"/"}
                        sx={{
                            textDecoration: 'none',
                            fontSize: matchesSM ? '2.5em' : matchesMD ? '3em' : '3.5em',
                            fontFamily: "'Bangers', cursive",
                        }}
                    >
                        Pokemon Catalogue
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{marginBottom: matchesSM ? '6.5em' : matchesMD ? '6.75em' : '7em'}}/>
        </>
    );
}

export default Header;