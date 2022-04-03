import React from 'react';
import {useTheme} from "@mui/styles";
import {Grid} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';
import {Link} from "react-router-dom";
import {Tooltip} from "@mui/material";
import {useMediaQuery} from "@mui/material";

const Footer = () => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <footer
            style={{
                height: matchesSM ? '5.5em' : matchesMD ? '5.75em' : '6em',
                backgroundColor: theme.palette.common.red,
                position: 'relative',
                width: '100%',
                marginTop: '1em',
                bottom: 0
            }}
        >
            <Grid container justifyContent={'center'} alignItems={'center'} style={{height: '100%'}}>
                <Grid item>
                    <Tooltip title={"Source code"} placement={'top'} leaveDelay={125}>
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