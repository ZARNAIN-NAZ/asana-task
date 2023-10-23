import './App.css';
import  React , {useState } from 'react';
function App() {
  const [name  , setName] =useState("")
  const [ fullName  ,setFullName] = useState()
  const inputEvent = (event)=>{
   console.log(event.target); 
   setName(event.target.value)
  }

  const onsubmit=()=>{
    setFullName(name); 
  }
return(
  <>
  <h1 className='heading'>"LOGIN FORM"</h1>
  <div className='loginForm'>
<h1>Hello {fullName}</h1>
<input type='text' placeholder="Enter Your Name"
onChange={inputEvent}
value={name}
/>

<button onClick={onsubmit}>Click Me</button>
  </div>

  </>
)
}

export default App;
