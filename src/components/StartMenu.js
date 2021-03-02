import { Button, Container } from '@material-ui/core';
import { useState } from 'react'
import  Records from './game/Records'

export default function StartMenu(props) {
    const [toggle, setToggle] = useState(true);

    const changeToggle= (event) => {
        setToggle(!toggle)
    }

   const onSetFullScreen = () => document.documentElement.requestFullscreen();

    return (
       toggle ? <div>
            <Container maxWidth="sm" style={{ textAlign: "center"}}>
                <header>
                    <h1>
                        Flappy Bird
                    </h1>
                </header>
                <main>
                    <Button variant="contained" 
                    style={{marginRight: "10px"}}
                    onClick={() => { props.UpdateState()}}>
                        Начать игру
                    </Button>
                    <Button variant="contained" onClick={changeToggle}>Рекорды</Button>
                    <br />
                    <Button variant="contained" onClick={() => onSetFullScreen()} style={{ marginTop: "10px"}}>На весь экран</Button>
                </main>
            </Container>
            <footer>
                    <a href="https://rs.school/react/">
                        <img src="https://rs.school/images/rs_school_js.svg"/>
                    </a>
                    <p>
                        &copy; COPYRIGHT 2021 
                    </p>
                    <a href="https://github.com/Pivanchikov">
                        PIVANCHIKOV
                    </a>
                </footer>
        </div>
        : <Records />

    )
}