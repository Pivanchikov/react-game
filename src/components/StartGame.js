import  { useState } from 'react'
import GamesConfig from '../config/gamesConfig'
import CanvasCreator from './game/Canvas'
import Menu from './menu/Menu'

import useSound from 'use-sound';

export default function Start() {
    const [toggle, setToggle] = useState(false);

    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 27) {
            setToggle(!toggle)
        }
    })
    const UpdateState = () => {
        setToggle(!toggle)
    }  

    console.log(GamesConfig)

    return (
        toggle 
                ? <Menu UpdateState={UpdateState}/>
                : <CanvasCreator />
    )
}