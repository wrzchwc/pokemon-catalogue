import React from 'react';
import {Grid} from "@mui/material";
import {Typography} from "@mui/material";

const PokemonStatistic = (props) => {
  return (
      <Grid item container direction={'column'} xs alignItems={'center'} justifyContent={'space-between'}>
          <Grid item>
              <Typography variant={'h2'}>{props.number}</Typography>
          </Grid>
          <Grid item>
              <Typography variant={'h5'}>{props.name}</Typography>
          </Grid>
      </Grid>
  );
}

export default PokemonStatistic;