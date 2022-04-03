import React from 'react';
import {Dialog, Typography} from "@mui/material";
import {DialogContent} from "@mui/material";
import {DialogTitle} from "@mui/material";
import {DialogActions} from "@mui/material";
import {Button} from "@mui/material";
import {Grid} from "@mui/material";
import PokemonStatistic from "./PokemonStatistic";
import {useTheme} from "@mui/styles";
import getObjectValues from "../../ui/values";
import Sprite from "../Sprite";
import {useMediaQuery} from "@mui/material";


const PokemonDialog = (props) => {
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const types = (
        props.pokemon.types.map((t, index) => {
            return (
                <Grid item key={`${props.pokemon.name}T${index}`}>
                    <Typography variant={matchesMD ? 'h5' : 'h3'}>{t.type.name}</Typography>
                </Grid>
            );
        })
    );

    const sprites = (
        getObjectValues(props.pokemon.sprites)
            .filter(sprite => sprite)
            .map((url, index) => {
                return (
                    <Grid item key={`${props.pokemon.name}S${index}`}>
                        <Sprite src={url} style={{height: 96, width: 96}}/>
                    </Grid>
                );
            })
    )

    return (
        <Dialog
            open={props.open}
            onClose={() => props.setOpen(false)}
            maxWidth={'xl'}
            fullWidth
            PaperProps={{style: {backgroundColor: theme.palette.secondary.main}}}
            fullScreen={matchesSM}
        >
            <DialogTitle
                sx={{
                    fontSize: matchesMD ? '2.75em' : '3em',
                    color: theme.palette.primary.main
                }}
            >
                {props.pokemon.name}
            </DialogTitle>
            <DialogContent sx={{color: theme.palette.info.main}}>
                <Grid container direction={'column'} alignItems={'center'}>
                    <Grid item container>
                        <Grid
                            item
                            container
                            direction={'column'}
                            xs
                            alignItems={'center'}
                            justifyContent={'space-between'}
                        >
                            <>{types}</>
                            <Grid item>
                                <Typography variant={matchesMD ? 'h6' : 'h5'}>
                                    {props.pokemon.types.length > 1 ? 'types' : 'type'}
                                </Typography>
                            </Grid>
                        </Grid>
                        <PokemonStatistic name={'base exp'} number={props.pokemon.base_experience}/>
                        <PokemonStatistic name={'height'} number={props.pokemon.height}/>
                        <PokemonStatistic name={'weight'} number={props.pokemon.weight}/>
                    </Grid>
                    <Grid item container justifyContent={'center'} alignItems={'center'}>
                        <Grid item sx={{mt: '2.5em'}}>
                            <Typography variant={matchesMD ? 'h5' : 'h4'}>sprites</Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        wrap={'wrap'}
                        justifyContent={'space-evenly'}
                        alignItems={'center'}
                    >
                        {sprites}
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => props.setOpen(false)}
                    disableRipple
                    color={'info'}
                    variant={'contained'}
                    size={matchesSM ? 'small' : matchesMD ? 'medium' : undefined}
                    sx={{color: theme.palette.secondary.main}}
                >
                    CLOSE
                </Button>
            </DialogActions>
        </Dialog>
    );

}

export default PokemonDialog;