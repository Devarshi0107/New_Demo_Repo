import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dashboard } from './components/Dashboard'
import { Landing } from './components/Landing'
import {BrowserRouter ,Routes,Route,useNavigate} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  // const navigate=useNavigate();// make inside broweserrouter 

  return (
    <>
      {/* //also can be done by route array object */}
      <div>
        {/* <div style={{background:"pink"}}>here is top bar consant acroos all pages</div> */}
        {/* <div>
        <button onClick={()=>{
          // window.location.href="/";  // not good for cliend side routing m[, it is refreshinf and send all files to page] 
          //solution use navigate hook
          navigate("/");  // will not work , make sure that it is inside BrowserRouter ttag
        }} >Landing</button>
        <button onClick={()=>{
          // window.location.href="/dashboard";
          navigate("/dashboard")
        }} >Dashboard</button>

        </div> */}
        <BrowserRouter>
        <Appbar/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
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
