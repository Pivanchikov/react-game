import { Button, Container } from '@material-ui/core';
import { useState } from 'react'

import Sound from './Sound'
import Music from './Music'
import Speed from './Speed'
import Birds from './Bird'
import Pipes from './Pipes'

import GamesConfig from '../../config/gamesConfig'


export default function Menu(props) {
    const [save, setSave] = useState(false)

    return (
        < Container maxWidth="sm" style={{ textAlign: "center" }}>
            <h1>Меню</h1>
            <Sound save={save}/>
            <Music save={save}/>
            <Speed save={save}/>
            <Birds save={save}/>
            <Pipes save={save}/>
            <Button variant="contained" onClick={() => {
                setSave(true);
                console.log(GamesConfig)}}>Сохранить</Button>
            <Button variant="contained" onClick={() => { props.UpdateState()}}>Закрыть Меню</Button>
        </Container>
    )
}