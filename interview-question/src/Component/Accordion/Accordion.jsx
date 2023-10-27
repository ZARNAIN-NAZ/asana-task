import React, { useState } from "react";
import { question } from "./api";
import "./Accordion.css";
import MyAccordion from "./MyAccordion";
const Accordion = () => {
  const [data, setData] = useState(question);

  return (
    <>
     <section className="main-div">
        <h1>React Interview Questions Answers</h1>
     {data.map((currElement) => {
         const {id  }=currElement;
        return <>
        <MyAccordion key={id}{...currElement}/>
        </>
      })}

     </section>
    </>
  );
};

export default Accordion;
