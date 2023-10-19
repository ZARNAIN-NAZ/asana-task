import logo from './logo.svg';
import './App.css';
import React , { useState} from 'react'
function App() {
  let newTime = new Date().toLocaleTimeString()
  const [cTime , setCTime] = useState(newTime)
  
  const UpdateTime=()=>{
     newTime = new Date().toLocaleTimeString()
setCTime(newTime)
  }
  return(
    <>
    <h1>
    {cTime}
    </h1>
    <button onClick={UpdateTime}>
      GET TIME
    </button>
    </>
  )
}

export default App;
