import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography, Grid, Slider, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { Speed } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
      width: 200,
      margin: "15px auto"
    },
    group: {
        flexDirection: "row",
        margin: '15px auto', 
        width: 250,
        justifyContent: 'space-between'
    },
    radio: {
        width: 50, 
        margin: 0
    },
    image: {
        width: 50, 
        height: 150
    },
  });

  export default function Speeds() {
    const classes = useStyles();
    const [speed, setSpeed] = useState(5);

    const handleChangeSpeed = (event, newValue) => {
        setSpeed(newValue);
    };


    return (
    <div className={classes.root}>
        <Typography id="continuous-slider" gutterBottom>
            СКОРОСТЬ ИГРЫ
        </Typography>
        <Grid container spacing={2}>
            <Grid item>
                <Speed />
            </Grid>
            <Grid item xs>
                <Slider value={speed} onChange={handleChangeSpeed} aria-labelledby="continuous-slider" max={10} />
            </Grid>
            <Grid item>
                <Speed />
            </Grid>
        </Grid>
    </div>
    )
  }