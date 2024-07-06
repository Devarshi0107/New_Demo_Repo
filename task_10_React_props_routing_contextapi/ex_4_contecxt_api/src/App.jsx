import { useState } from "react"
import { CountContext } from "./context";
import { set } from "mongoose";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CountContext.Provider value={count}>
      {/* <CountContext.Provider value={{count,setcount}}> */}
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({count, setCount}) {
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count =useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({ setCount}) {
  const count =useContext(CountContext);
  // const {count,setCount} =useContext(CountContext);
  //for two or moree
  
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App