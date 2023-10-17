import React from "react";
import { Add ,Sub, Mul,Divide } from "./Cal";
function App(){
return(
  <>
    <ul>
      <li>
        sum of two number is
        {Add(8, 8)}
      </li>
      <li>
        subtraction of two number is
        {Sub(8, 8)}
      </li>
      <li>
        Multiplication of two number is
        {Mul(8, 8)}
      </li>
      <li>
        Division of two number is
        {Divide(3, 86)}
      </li>
    </ul>
  </>
)

}

export default App;
