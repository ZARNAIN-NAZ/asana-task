// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css'

// let h = 3;
// let itemNumber = 90;
// function Hi(props) {
//   return (
//     <div>
//       hello <strong>{props.name}</strong>
//       <h1>1st heading</h1>
//       <ul className="myList">
//         <li>class</li>
//         <li>subject</li>
//         <li>section</li>
//       </ul>
//       {h + 4},{7 - 0}
//       <li>{--itemNumber}</li>
//     </div>
//   );
// }
// ReactDOM.render(<Hi name ="zarnain" />, document.querySelector("#root"));




import React from 'react'
import ReactDOM  from 'react-dom'
import './index.css'
function Hi(props){
  return <div>hello{props.name}</div>
}

// const  Post = (name   ,imgUrl) (
//  <div className='facebookPost'> 
//    {/* <h3>{props.name}</h3> */}
//    <h3>{name}</h3>

//    <span> 1 oct 2023</span>
//    <p>
//    When React renders a component, it passes the component’s props (short for “properties”) as the first
// argument, as an object. The props object is just a plain JS object, where the keys are prop names and
// the values are, well, the values of those props.

//    </p>
//    {/* <img width={300} src={props.imgUrl}> */}
//    <img width={300} src={imgUrl}>

//    </img>
//    <br/>
//  <button>Like</button>
//  <button>Comment</button>
//  <button>Share</button>
//    </div>
 
// )
// function HiFullName(props){
//   return (
//   <div> {props.FirstName} {props.LastName}</div>
// )}

// ReactDOM.render(<Hi name = "zarnain"/> ,document.querySelector('#root'))
// ReactDOM.render(<div>
// <Post imgUrl={'https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-4.jpg'} text="nslndsandandaakl" name="zarnain"/>
//  <Post  imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4yDXEozpaESzIoYBlzErhj86_QfHbf7w3wUYV6LjEw&s'} text="nslndsandandaakl" name="zara"/> 
//  <Post  imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4yDXEozpaESzIoYBlzErhj86_QfHbf7w3wUYV6LjEw&s'} text="nslndsandandaakl" name="zareen"/> 
//  <Post imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4yDXEozpaESzIoYBlzErhj86_QfHbf7w3wUYV6LjEw&s'} text="nslndsandandaakl" name="zulfiqar"/>
// </div> ,document.querySelector('#root'))

// ReactDOM.render(
  // <HiFullName FirstName="zarnain" LastName="Naz" /> , document.querySelector('#root'))

//arrow function
//  let  Card =({FirstName}) => <div>hello{FirstName}</div>
   
 //destructuring
//  let obj = {
//   name:"ali", 
//   roll:"four"

//  }
//  let name =obj.name
// let roll = obj.roll

//  let {name} = obj
// let{roll} = obj
//or
// let{name,roll} =obj;
// let arr = ['john ' ,"maria" ,"alex"]
// let one  = arr[0]
// let two = arr[1]
// let three = arr[2]
//or
// let [one , two , three] =arr
  


const Gate =({isOpen})=>(
  // <div>
  //   gate is {
  //     ((isOpen)=>{
  //       if(isOpen===true){
  //         return "open"
  //       }
  //       else{
  //         return "closed"
  //       }
  //     })(isOpen)
  //   }
  // </div>

// ternary operator with same work
<div>
  gate is {
    (isOpen)?"open":"close"
  }
</div>


)
ReactDOM.render(<Gate isOpen={true}/> , document.querySelector('#root'))