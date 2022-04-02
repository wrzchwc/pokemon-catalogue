import React from 'react';
import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import {CardActions} from "@mui/material";
import {Button} from "@mui/material";
import {useTheme} from "@mui/styles";
import Sprite from "./Sprite";

const PokemonCard = (props) => {
    const theme = useTheme();

    const types = (
        props.pokemon.types.map((t, index) => {
            return (
                <Grid key={`${props.pokemon.name}t${index}`}>
                    <Typography variant={'h5'} sx={{color: theme.palette.primary.main}}>{t.type.name}</Typography>
                </Grid>
            );
        })
    );

    const basicSprites = (
        Object.values(props.pokemon.sprites)
            .filter(value => value != null && typeof value !== "object")
            .map((url, index) => {
                return (
                    <Grid item key={`${props.pokemon.name}bs${index}`}>
                        <Sprite src={url}/>
                    </Grid>
                );
            })
    )

    return (
        <Card
            variant={'outlined'}
            sx={{
                mb: '1em',
                width: '80em',
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.info.main,
            }}
        >
            <CardHeader title={props.pokemon.name} titleTypographyProps={{variant: 'h4'}}/>
            <CardContent>
                <Grid container justifyContent={'space-evenly'} alignItems={'center'}>
                    <Grid item container xs={3} direction={'column'}>{types}</Grid>
                    <Grid item container xs={9} wrap={'wrap'} justifyContent={'space-evenly'} alignItems={'center'}>
                        {basicSprites}
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button variant={'contained'} color={'info'} sx={{color: theme.palette.secondary.main}} disableRipple>
                    DETAILS
                </Button>
            </CardActions>
        </Card>
    );
}

export default PokemonCard;