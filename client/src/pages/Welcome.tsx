import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Welcome() {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    
    const onLogin = () => {
        localStorage.setItem("name", name)
        navigate("/app")
    }
  return (
    <>
        <h3>please enter your name to log in</h3>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="your name"/>
        <button onClick={onLogin}>LOGIN</button>
    </>
  )
}

export default Welcome