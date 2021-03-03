import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import pipeConfig from '../../config/pipe'



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

export default function Pipes(props) {
    const classes = useStyles();
    const [pipe, setPipe] = useState(pipeConfig.pipeUp);

    const handleChangePipe = (event) => {
        setPipe(event.target.value);
    };

    if(props.save){
        pipeConfig.pipeUp = pipe
        
        pipe === "./image/pipeUp.png" 
                ?  pipeConfig.pipeDown = "./image/pipeDown.png"
                :  pipeConfig.pipeDown = "./image/pipeDown2.png"

    }
    return (
        <RadioGroup aria-label="pipes" name="pipes" value={pipe} onChange={handleChangePipe} className={classes.group}>
            <FormControlLabel value="./image/pipeUp.png" control={<Radio />} className={classes.radio} />
            <img src={ require('../../image/pipeUp1.png').default } className={classes.image}/>
            <FormControlLabel value="./image/pipeUp2.png" control={<Radio />} className={classes.radio} />
            <img src={ require('../../image/pipeUp2.png').default } className={classes.image}/>
        </RadioGroup>
    )
}