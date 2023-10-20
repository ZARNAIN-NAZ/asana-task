import React  , {useState}from 'react'


const  App = ()=>{
  // const state = useState
  // const [count , SetCount] = useState(0)
//   const IncNum = () =>{
// SetCount(count+1)
//   }
  


 let time = new Date().toLocaleTimeString();
const [cTime , setCTime] = useState(time)

const UpdateTime=()=>{
  time = new Date().toLocaleTimeString();
setCTime(time);

}
setInterval(UpdateTime , 1000);
  return (
  // <>
  // <h1>
  //   {count}
  // </h1>
  // <button onClick={IncNum}>CLICK ME</button>
  // </>


  <>
  <h1>{cTime}</h1>
  {/* <button onClick={UpdateTime}>
Get Time
  </button> */}
  </>
  )
}

export default App