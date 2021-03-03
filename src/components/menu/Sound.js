import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Slider } from '@material-ui/core';
import {VolumeUp, VolumeOff } from '@material-ui/icons';

import { useState } from 'react'
import GamesConfig from '../../config/gamesConfig'

const useStyles = makeStyles({
    root: {
      width: 200,
      margin: "15px auto"
    },  
  });

export default function Sound(props) {
    
    const classes = useStyles();
    const [sound, setSound] = useState(GamesConfig.sound);
    const handleChangeSound = (event, newValue) => {
        setSound(newValue);
    };

    if(props.save){
        GamesConfig.sound = sound
    }
    return (
        <div className={classes.root}>
                <Typography id="continuous-slider" gutterBottom>
                    ЗВУКИ
                </Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <VolumeOff />
                    </Grid>
                    <Grid item xs>
                        <Slider value={sound} onChange={handleChangeSound} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <VolumeUp />
                    </Grid>
                </Grid>
            </div>
    )
}