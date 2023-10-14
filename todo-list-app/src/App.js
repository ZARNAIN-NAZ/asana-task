import React, { useState } from "react";
import {} from "./App.css";
import ToDoLists from "./ToDoLists";

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  function itemEvent(event) {
    setInputList(event.target.value);
  }
  function listOfItem() {
    setItems((oldItems)=>{
      return [...oldItems , inputList]
    })
    setInputList("")
  }

  const deleteItems = (()=>{
    console.log("deleted");
})
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1 className="top-heading">toDo List App</h1>
          <br />

          <input type="text" placeholder="Add an item" 
          value={inputList}
          onChange={itemEvent} />
          <button onClick={listOfItem}>+</button>
          <ol>
            {Items.map((cevent , index) => {
                  return <ToDoLists key={index}
                  id={index}
                  text={cevent}   
                  onselect={deleteItems} />
})}
          </ol>
        </div>
      </div>
    </>
  );
}
export default App;
