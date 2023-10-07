import {useState} from 'react'
// function Counter(){
//     const [x, setX]=useState(0)
//     const [y, setY]=useState(0)
//     return (
//         <>
//         Count X :{x} is {(x %2 ==0)?'Even':'odd'}
      
//         {/* <button onClick={()=>setX(x+=1)}>+</button> */}
//         <button onClick={() => setX(x+1)}>+</button>
//         <button onClick={() => setX(x-1)}>-</button>
// <br/>
// {/* Count Y :{y}
//         <button onClick={() => setX(x+1)}>+</button>
//         <button onClick={() => setX(x-1)}>-</button> */}
//         </>
//     )
// }
// export default Counter


//todo list
function TodoList(){
    const [isEditing , setIsEditing] = useState(false)
  const [todos , setTodos] = useState(["todo1" , "todo2"])
    return (
//         <>
//         {
//             (isEditing)? <input/> : <p>some todo</p>
//         }
//         <br/>
//        {/* example of conditional rendering */}
//  <button onClick={()=>{setIsEditing(!isEditing)}}>Click</button>
//         </>



 <ul>
{todos.map((todo)=> <li>{todo}</li>)}
<button onClick={()=>setTodos([...todos,'another one'])}>click</button>


 </ul>

    )
}
export default TodoList;