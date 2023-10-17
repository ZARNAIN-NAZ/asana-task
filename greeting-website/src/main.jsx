import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ShoppingList from './App'

let currDate  = new Date(2023 ,11,23,19)
currDate = currDate.getHours();
let greeting = ""
const  cssStyle= {};

if(currDate >=1 && currDate <=12){
 greeting ="Good Morning"
 cssStyle.color="Green";
}
else if(currDate >=12 && currDate <=17){
  greeting = "Good Evening"
  cssStyle.color="Orange";
}
else{
  greeting ="Good night"
  cssStyle.color="blue";
}


ReactDOM.createRoot(document.getElementById('root')).render(

<>
<div className='main-div'>
<h1> Hello Sir , <span style={cssStyle}>{greeting}</span>  </h1>
<ShoppingList/>
</div>

</>  )

