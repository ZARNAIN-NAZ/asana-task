import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddIcon from '@mui/icons-material/Add';
import TodoLists from './counter';
function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoLists/>
  );
}

export default App
