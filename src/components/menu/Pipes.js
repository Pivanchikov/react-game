import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

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
    },
    image: {
        height: 150
    }
  });

export default function Pipes() {
    const classes = useStyles();
    const [pipe, setPipe] = useState('firstPipe');

    const handleChangePipe = (event) => {
        setPipe(event.target.value);
    };

    return (
        <RadioGroup aria-label="pipes" name="pipes" value={pipe} onChange={handleChangePipe} className={classes.group}>
            <FormControlLabel value="firstPipe" control={<Radio />} className={classes.radio} />
            <img src={ require('../../image/pipeUp1.png').default } className={classes.image}/>
            <FormControlLabel value="secondPipe" control={<Radio />} className={classes.radio} />
            <img src={ require('../../image/pipeUp2.png').default } className={classes.image}/>
        </RadioGroup>
    )
}