import React, { useState }  from "react";
import {} from "./App.css"

function App(){
  const  [inputList , setInputList] = useState("buy apple")
const [items , setItems]   = useState([])

  function itemEvent(event){
    setInputList(event.target.value)
  
  }
  function listOfItem(){

  }
return (

  <>
  <div className="main-div">
    <div className="center-div">
      <br/>
      <h1 className="top-heading">toDo List App</h1>
      <br/>
    
<input type="text" placeholder="Add an item" onChange={itemEvent}/>
<button onClick={listOfItem}>+</button>
<ol>
  <li>{inputList}</li>
</ol>
    </div>


  </div>
  </>
)
}
export default App;