import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const Home = () => {
  // let name = "JOHN";
  const [isLit, setLit] = React.useState("on");

  // const changeVar = () => {;
  // name = "ali";
  // // setLit("irtiza")
  // console.log("name:" , name);

  // }
  const changeState =()=>{
    setLit("off")
// console.log("changing state");
  }
  return (
    <div>
      <p>
        light is on{isLit} {name}
        <button onClick={changeVar}>change variable</button>
        <button onClick={changeState}>change state</button>

        {/* THIS BUTTON is component & onclick is props */}

      </p>
    </div>
  );
};
ReactDOM.render(<Home />, document.querySelector("#root"));
