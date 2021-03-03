import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Slider} from '@material-ui/core';
import { Speed } from '@material-ui/icons';
import pipeConfig from '../../config/pipe'



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

  export default function Speeds(props) {
    const classes = useStyles();
    const [speed, setSpeed] = useState(pipeConfig.speed);

    const handleChangeSpeed = (event, newValue) => {
        setSpeed(newValue);
    };

    if(props.save){
        pipeConfig.speed = speed
    }

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
                <Slider value={speed} onChange={handleChangeSpeed} aria-labelledby="continuous-slider" min={0.1} max={2} />
            </Grid>
            <Grid item>
                <Speed />
            </Grid>
        </Grid>
    </div>
    )
  }