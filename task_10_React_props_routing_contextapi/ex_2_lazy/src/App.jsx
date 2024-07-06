import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter ,Routes,Route,useNavigate} from 'react-router-dom'

import { lazy} from 'react'
import { Suspense } from 'react'
// import { Dashboard } from './components/Dashboard'
// import Dashboard from lazy(()=>'./components/Dashboard') //defualt verison
// import Landing from lazy(()=>'./components/Landing')  //defualt verison
const Dashboard = lazy(() => import('./components/Dashboard')); // Corrected import syntax
const Landing = lazy(() => import('./components/Landing')); 

// import { Landing } from './components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       
        <BrowserRouter>
        <Appbar/>
          <Routes>
            <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>}  />
            <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

function Appbar(){
  const navigate=useNavigate();
  return <div>
    <div>
  <button onClick={()=>{
    
    navigate("/");  
  }} >Landing</button>
  <button onClick={()=>{
    
    navigate("/dashboard")
  }} >Dashboard</button>

  </div>
  </div>
}
export default App
