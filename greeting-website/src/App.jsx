import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



// const products =[
//  { title:"apple" , isFruit:true , id:1},
//  { title:"ladyFinger" , isFruit:false , id:2},
//  { title:"potato" , isFruit:false , id:3}
// ]
// export default function ShoppingList() {
// const listItems  = products.map((product)=>

//   <li key={product.id} 
//   style=
//   {{
//     color:product.isFruit? "magenta" : "green"
//   }}>
  
//   {product.title}</li>

// )

// return 
// (
//   <>
//   <ul>{listItems}</ul>
//   <ShoppingList/>
//   </>
// )
 
// }

function MyButton(){
  return 
  (
    <button>
  i am a button
  </button>
  )
}
export default function myApp(){
  return(
   <MyButton/>
  )
}

