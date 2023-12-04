import { useState } from 'react'
import './App.css'
import {Home} from './pages/index'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="dating">
      <Home/>
     </div>
    </>
  )
}

export default App
