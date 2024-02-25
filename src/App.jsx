import { useState } from 'react'
import './App.css'
import { Outlet, } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

         {/* <Routes>
           <Route path='/' element={<Home/>}/>
         </Routes> */}
         <Outlet/>
   
    </>
  )
}

export default App
