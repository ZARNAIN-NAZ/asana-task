import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

function ncard(val) {
  console.log(val);
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}
ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top 5 Netflix Series in 2023</h1>
    {Sdata.map(ncard)};
  </>,
  document.getElementById("root")
);
