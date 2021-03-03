import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import BirdConfig from '../../config/bird'

const useStyles = makeStyles({
    group: {
        flexDirection: "row",
        margin: '15px auto', 
        width: 250,
        justifyContent: 'space-between'
    },
    radio: {
        width: 50, 
        margin: 0
    }
  });

export default function Birds(props) {
    const classes = useStyles();
    const [bird, setBird] = useState(BirdConfig.bird);

    
    const handleChangeBird = (event) => {
        setBird(event.target.value);
    };
    if(props.save){
        BirdConfig.bird = bird
    }
    return (
    <RadioGroup aria-label="bird" name="bird" value={bird} onChange={handleChangeBird} className={classes.group}>
        <FormControlLabel value='./image/bird.png'  control={<Radio />} className={classes.radio} />
        <img src={ require('../../image/birdFirst.png').default } style={{width: 50}}/>
        <FormControlLabel value='./image/bird2.png' control={<Radio />} className={classes.radio} />
        <img src={ require('../../image/birdSecond.png').default } style={{width: 50}}/>
    </RadioGroup>
    )
}