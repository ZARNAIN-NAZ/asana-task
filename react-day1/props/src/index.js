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

function  Post(props) {
  return <div className='facebookPost'> 
   <h3>{props.name}</h3>
   <span> 1 oct 2023</span>
   <p>
   When React renders a component, it passes the component’s props (short for “properties”) as the first
argument, as an object. The props object is just a plain JS object, where the keys are prop names and
the values are, well, the values of those props.

   </p>
   <img width={300} src={props.imgUrl}>
   </img>
   <br/>
 <button>Like</button>
 <button>Comment</button>
 <button>Share</button>
   </div>
 
}

// ReactDOM.render(<Hi name = "zarnain"/> ,document.querySelector('#root'))
ReactDOM.render(<div>
<Post imgUrl={'https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-4.jpg'} text="nslndsandandaakl" name="zarnain"/>
 <Post  imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4yDXEozpaESzIoYBlzErhj86_QfHbf7w3wUYV6LjEw&s'} text="nslndsandandaakl" name="zara"/> 
 <Post  imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4yDXEozpaESzIoYBlzErhj86_QfHbf7w3wUYV6LjEw&s'} text="nslndsandandaakl" name="zareen"/> 
 <Post imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4yDXEozpaESzIoYBlzErhj86_QfHbf7w3wUYV6LjEw&s'} text="nslndsandandaakl" name="zulfiqar"/>
</div> ,document.querySelector('#root'))
