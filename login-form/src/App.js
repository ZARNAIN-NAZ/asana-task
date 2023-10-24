import "./App.css";
import React, { useState } from "react";
function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });
  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      // console.log(preValue);
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form submitted");
  };

  return (
    <>
      <div className="main-div">
        <h1 className="heading">"LOGIN FORM"</h1>
        <form onSubmit={onSubmit}>
          <div className="loginForm">
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fName"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br /> <br /> <br />
            <input
              type="text"
              placeholder="Enter Your last  Name"
              name="lName"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <button onClick={onSubmit}>Click Me</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
