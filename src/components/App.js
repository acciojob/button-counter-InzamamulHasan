
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [count,setCount]=useState(0);
  return (
    <div>
        <p>{`Button clicked ${count} times`}</p>
        <br/>
        <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  )
}

export default App
