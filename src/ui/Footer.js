import React from 'react';
import {useTheme} from "@mui/styles";
import {Grid} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import {Link} from "react-router-dom";
import {Tooltip} from "@mui/material";

const Footer = () => {
    const theme = useTheme();

    return (
        <footer
            style={{
                height: '6em',
                backgroundColor: theme.palette.common.red,
                position: 'relative',
                width: '100%',
                marginTop: '0.5em',
                bottom: 0
            }}
        >
            <Grid container justifyContent={'flex-end'} alignItems={'center'} style={{height: '100%'}}>
                <Grid item style={{marginRight: 24}}>
                    <Tooltip title={"Source code"} placement={'left'} leaveDelay={125}>
                        <IconButton component={Link} to={"https://github.com/wrzchwc/pokemon-catalogue"} disableRipple>
                            <GitHubIcon fontSize={"large"} color={"secondary"}/>
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;