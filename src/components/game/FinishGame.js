import { Button, Container, TextField } from '@material-ui/core';
import { useState } from 'react'
import  Records from './Records'

export default function Finished(props){
    const [Name, setName] = useState('');
    const [toggle, setToggle] = useState(true);


    const changeName = (event) => {
        setName(event.target.value)
    }
    const changeToggle= (event) => {
        setToggle(!toggle)
    }

    const addRecord = () => {
        let records = localStorage.getItem('Records');
        if (records) {
            records = JSON.parse(records)
            records.push({name: Name, score: props.score})
            localStorage.setItem('Records', JSON.stringify(records));
        } else {
            records = [];
            records.push({name: Name, score: props.score})
            localStorage.setItem('Records', JSON.stringify(records));
        }

    }
    return (
        toggle ?
        <Container maxWidth="sm" style={{ textAlign: "center" }}>
            <h1 style={{ margin: "40px"}}>You Win!!</h1>
            <TextField id="standard-basic" label="Введите имя" value={Name} onChange={changeName}/>
            <br />
            <Button variant="contained" style={{ margin: "20px 5px" }} 
            onClick={() => {   
                            addRecord() 
                            window.location.reload()
                            }}>Сохранить</Button>
            <Button variant="contained" style={{ margin: "20px 5px" }} onClick={changeToggle}>Рекорды</Button>
        </Container>
        : <Records />
    )
}