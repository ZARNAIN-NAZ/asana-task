import React from "react";

const MyAccordion = ({ question, answer }) => {
  return (
    <>
      <div className="main-heading">
        <p>➕</p>
        <h3>{question}</h3>
      </div>
      <p>{answer}</p>
    </>
  );
};

export default MyAccordion;
