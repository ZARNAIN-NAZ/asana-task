import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
function TodoLists() {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
      alert("you reached a limit!");
    }
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <div className="heading">
            <h1>{num}</h1>
          </div>
          <div className="btn_div">
            <button onClick={incNum}>Increm</button>
            <button onClick={decNum}>Decrem</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoLists;
