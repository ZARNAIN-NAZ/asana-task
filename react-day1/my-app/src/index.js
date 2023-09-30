import React from "react";
import ReactDOM from "react-dom";
import './index.css'

let h = 3;
let itemNumber = 90;
function Hi() {
  return (
    <div>
      {" "}
      hello <strong>zarnain</strong>
      <h1>1st heading</h1>
      <ul className="myList">
        <li>class</li>
        <li>subject</li>
        <li>section</li>
      </ul>
      {h + 4},{7 - 0}
      <li>{--itemNumber}</li>
    </div>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));
