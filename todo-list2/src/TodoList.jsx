import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState } from "react";
import ComList from "./ComList";
const TodoList = () => {
  const [item, setItem] = useState("");
const [value, setValue] = useState([]);

  const EventItem = (anyValue) => {
    setItem(anyValue.target.value);
  };
  const AddEventItem = () => {
    setValue((previousValue) => {
      return [...previousValue, item];
    });
    setItem("")
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1 className="heading">TodoList</h1>
          <input type="text"
          value={item}
          placeholder="Add your Item" onChange={EventItem} />
          <button className="btn-main" onClick={AddEventItem}>
            <AddCircleIcon />
          </button>
          <ol>
            {value.map((event) => {
              return <ComList text={event}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default TodoList;
