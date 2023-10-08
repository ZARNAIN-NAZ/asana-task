import { useState } from 'react'

import './App.css'

function App() {
  const [length , setLength] = useState(8)
const [numberAllowwed , setNumberAllowed] = useState(false)
const [charAllowed , setCharAllowed] = useState(false)
const [password , setPassword ] =useState("")







  return (
    <>
    <div>
     <h1 className='text-lg font-bold max-wd-md shadow-md rounded-lg px-4 py-4 text-purple-500 bg-gray-400 '>password generator</h1>
     

     <div className='flex gap-4 rounded-lg overflow-hidden mb-4'> 
     <input 
     type='text' 
     value={password}
     className='outline-none w-full py-1 px-3 mb-6 rounded-lg' 
     placeholder='password'
     readOnly
     ></input>
     </div>

     </div>
     <div className=''>
      <input 
      type='checkbox'
      checked ={numberAllowwed}
      id="numberInput"
      onChange={()=>
        setNumberAllowed((prev)=>!prev)
      }
      className='cursor-pointer'

      >

<label htmlFor ="">Number</label>
      </input>
    

     </div >
    </>
  )
}

export default App
