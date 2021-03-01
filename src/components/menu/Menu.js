import { Button, Container } from '@material-ui/core';

import Sound from './Sound'
import Music from './Music'
import Speed from './Speed'
import Birds from './Bird'
import Pipes from './Pipes'

import GamesConfig from '../../config/gamesConfig'


export default function Menu(props) {

    return (
        < Container maxWidth="sm" style={{ textAlign: "center" }}>
            <h1>Меню</h1>
            <Sound />
            <Music />
            <Speed />
            <Birds />
            <Pipes />
            <Button variant="contained" onClick={() => {
                GamesConfig.sound = 30
                console.log(GamesConfig.sound)}}>Сохранить</Button>
            <Button variant="contained" onClick={() => { props.UpdateState()}}>Закрыть Меню</Button>
        </Container>
    )
}