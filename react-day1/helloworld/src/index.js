// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css'

// let h = 3;
// let itemNumber = 90;
// function Hi() {
//   return (
//     <div>
//       {" "}
//       hello <strong>zarnain</strong>
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
// ReactDOM.render(<Hi />, document.querySelector("#root"));
 


///start with new 
//  import React from "react";
//   import  ReactDOM  from "react-dom";
//   import './index.css'

//   function Myapp(){
//     return(
//       <div className="container">
//       <h1>hi</h1>
//        <button className="btn-primary" type="submit">submit</button>
//        </div>
//     )

//   }
//   ReactDOM.render(<Myapp/> , document.querySelector('#root'))


// -------------------------------//1st component practic


import react from 'react';
import DogCart from './DogCart';
import ReactDOM from "react-dom";


function App(){
  return 
  <>
  <DogCart/>
  </>
}
ReactDOM.render(<App />, document.querySelector("#root"));

export default App;






// import React, { Component } from 'react';

// class TodoApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [],
//       newTodo: ''
//     };
//   }

//   handleInputChange = (e) => {
//     this.setState({ newTodo: e.target.value });
//   }

//   handleAddTodo = () => {
//     if (this.state.newTodo) {
//       this.setState((prevState) => ({
//         todos: [...prevState.todos, prevState.newTodo],
//         newTodo: ''
//       }));
//     }
//   }

//   handleDeleteTodo = (index) => {
//     this.setState((prevState) => {
//       const todos = [...prevState.todos];
//       todos.splice(index, 1);
//       return { todos };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Todo List</h1>
//         <div>
//           <input
//             type="text"
//             placeholder="Add a new todo"
//             value={this.state.newTodo}
//             onChange={this.handleInputChange}
//           />
//           <button onClick={this.handleAddTodo}>Add</button>
//         </div>
//         <ul>
//           {this.state.todos.map((todo, index) => (
//             <li key={index}>
//               {todo}
//               <button onClick={() => this.handleDeleteTodo(index)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default TodoApp;
