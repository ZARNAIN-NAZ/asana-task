import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Home = () => {
  // let name = "JOHN";
  const [isLit, setLit] = React.useState(true);

  // const changeVar = () => {;
  // name = "ali";
  // // setLit("irtiza")
  // console.log("name:" , name);

  // }
  const changeState = () => {
    // setLit(false)
    // setLit(!isLit)
    // console.log("changing state");
  };
  return (
    // <div className={(isLit)?"room lit" :"room dark"}>
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      <p>light is {isLit ? "on" : "off"} </p>
      {/* <button onClick={changeVar}>change variable</button> */}
      {/* <button onClick={changeState}>change state</button> */}
      <button
        onClick={() => {
          setLit(!isLit);
        }}
      >
        Turn{isLit ? "off " : "on"}
      </button>
      {/* inline upperone */}

      {/* THIS BUTTON is component & onclick is props */}
    </div>
  );
};
ReactDOM.render(<Home />, document.querySelector("#root"));
