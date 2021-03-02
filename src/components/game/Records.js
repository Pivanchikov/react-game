import { Button, Container } from '@material-ui/core';
import { useEffect } from 'react'


export default function Records(){


    useEffect( () => {
        let records = localStorage.getItem('Records');
        if (records) {
            records = JSON.parse(records)
            records.sort((item, nextItem) => nextItem.score - item.score);
            console.log(records)
            localStorage.setItem('Records', JSON.stringify(records));
        }
    })

    return (
       localStorage.getItem('Records') 
                ?  <Container maxWidth="sm" style={{ textAlign: "center" }}>
                        <h1 style={{ margin: "40px"}}>Winner</h1>
                        <br />
                        <ul>
                            {
                                JSON.parse(localStorage.getItem('Records')).map((item, index) => {
                                    if(index < 10) {
                                    return <li key={index}>{index+1}. {item.name} : {item.score} step</li>
                                    }

                                })  
                            }
                        </ul>
                        <Button variant="contained" style={{ margin: "20px 5px" }}
                        onClick={() => window.location.reload()}
                        >Меню</Button>
                    </Container>
                :   <Container maxWidth="sm" style={{ textAlign: "center" }}>
                        <h1> Таблица пуста </h1>
                    </Container>
              
    )
}