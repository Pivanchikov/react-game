import  { useState }from 'react'
import StartMenu from './StartMenu'
import StartGame from './StartGame'



export default function App() {
    const [toggle, setToggle] = useState(true);

    const UpdateState = () => {
        setToggle(!toggle)
    }        


    return (
        toggle 
                ? <StartMenu UpdateState={UpdateState} />
                : <StartGame />
    )
}