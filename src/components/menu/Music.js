import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Slider } from '@material-ui/core';
import { VolumeUp, VolumeOff } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
      width: 200,
      margin: "15px auto"
    }
  });

export default function Music(){
    const classes = useStyles();
    const [music, setMusic] = useState(30);

    const handleChangeMusic = (event, newValue) => {
            setMusic(newValue);
        };

    return (
        <div className={classes.root}>
                <Typography id="continuous-slider" gutterBottom>
                    МУЗЫКА
                </Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <VolumeOff />
                    </Grid>
                    <Grid item xs>
                        <Slider value={music} onChange={handleChangeMusic} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <VolumeUp />
                    </Grid>
                </Grid>
            </div>
    )
}