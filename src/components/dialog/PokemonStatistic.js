import React from 'react';
import {Grid} from "@mui/material";
import {Typography} from "@mui/material";
import {useTheme} from "@mui/styles";
import {useMediaQuery} from "@mui/material";

const PokemonStatistic = (props) => {
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid item container direction={'column'} xs alignItems={'center'} justifyContent={'space-between'}>
            <Grid item>
                <Typography variant={matchesMD ? 'h3' : 'h2'}>{props.number}</Typography>
            </Grid>
            <Grid item>
                <Typography variant={matchesMD ? 'h6' : 'h5'}>{props.name}</Typography>
            </Grid>
        </Grid>
    );
}

export default PokemonStatistic;