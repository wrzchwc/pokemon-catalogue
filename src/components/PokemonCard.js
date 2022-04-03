import React from 'react';
import {useState} from "react";
import {Card, CardContent, CardHeader, Grid, Typography} from "@mui/material";
import {CardActions} from "@mui/material";
import {Button} from "@mui/material";
import {useTheme} from "@mui/styles";
import Sprite from "./Sprite";
import PokemonDialog from "./dialog/PokemonDialog";
import {useMediaQuery} from "@mui/material";

const PokemonCard = (props) => {
    const theme = useTheme();
    const [dialogOpen, setDialogOpen] = useState(false);
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const types = (
        props.pokemon.types.map((t, index) => {
            return (
                <Grid key={`${props.pokemon.name}t${index}`}>
                    <Typography
                        variant={matchesSM ? 'h6' : 'h5'}
                        sx={{color: theme.palette.primary.main}}
                    >
                        {t.type.name}
                    </Typography>
                </Grid>
            );
        })
    );

    const basicSprites = (
        Object.values(props.pokemon.sprites)
            .filter(value => value != null && typeof value !== "object")
            .map((url, index) => {
                return (
                    <Grid
                        item
                        key={`${props.pokemon.name}bs${index}`}
                        style={{
                            maxHeight: matchesSM ? 80 : matchesMD ? 88 : 96,
                            maxWidth: matchesSM ? 80 : matchesMD ? 88 : 96
                        }}
                    >
                        <Sprite
                            src={url}
                            style={{
                                height: '100%',
                                width: '100%'
                            }}
                        />
                    </Grid>
                );
            })
    )

    return (
        <>
            <Card
                variant={'outlined'}
                sx={{
                    mb: '1em',
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.info.main,
                }}
            >
                <CardHeader
                    title={props.pokemon.name}
                    titleTypographyProps={{variant: matchesSM ? 'h5' : 'h4'}}
                />
                <CardContent>
                    <Grid container justifyContent={'space-evenly'} alignItems={'center'}>
                        <Grid item container xs={3} direction={'column'}>{types}</Grid>
                        <Grid item container xs={9} wrap={'wrap'} justifyContent={'space-evenly'} alignItems={'center'}>
                            {basicSprites}
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button
                        variant={'contained'}
                        color={'info'}
                        sx={{color: theme.palette.secondary.main}}
                        disableRipple
                        onClick={() => setDialogOpen(true)}
                        size={matchesSM ? 'small' : matchesSM ? 'medium' : 'large'}
                    >
                        DETAILS
                    </Button>
                </CardActions>
            </Card>
            <PokemonDialog open={dialogOpen} setOpen={setDialogOpen} pokemon={props.pokemon}/>
        </>
    );
}

export default PokemonCard;