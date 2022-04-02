import React from 'react';
import {Dialog, Typography} from "@mui/material";
import {DialogContent} from "@mui/material";
import {DialogTitle} from "@mui/material";
import {DialogActions} from "@mui/material";
import {Button} from "@mui/material";
import {Grid} from "@mui/material";
import PokemonStatistic from "./PokemonStatistic";
import {useTheme} from "@mui/styles";

const PokemonDialog = (props) => {
    const theme = useTheme();

    const types = (
        props.pokemon.types.map((t, index) => {
            return (
                <Grid item key={`${props.pokemon.name}T${index}`}>
                    <Typography variant={'h3'}>{t.type.name}</Typography>
                </Grid>
            );
        })
    );

    return (
        <Dialog
            open={props.open}
            onClose={() => props.setOpen(false)}
            maxWidth={'xl'}
            fullWidth
            PaperProps={{style: {backgroundColor: theme.palette.secondary.main}}}
        >
            <DialogTitle sx={{fontSize: '3em'}}>{props.pokemon.name}</DialogTitle>
            <DialogContent>
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
                                <Typography variant={'h5'}>
                                    {props.pokemon.types.length > 1 ? 'types' : 'type'}
                                </Typography>
                            </Grid>
                        </Grid>
                        <PokemonStatistic name={'height'} number={props.pokemon.height}/>
                        <PokemonStatistic name={'weight'} number={props.pokemon.weight}/>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={() => props.setOpen(false)}
                    disableRipple
                    color={'info'}
                    variant={'contained'}
                >
                    CLOSE
                </Button>
            </DialogActions>
        </Dialog>
    );

}

export default PokemonDialog;