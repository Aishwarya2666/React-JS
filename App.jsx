import { useState } from 'react'

function App() {
 const [color,setColor]=useState("white")
    return(
  <div >
    <h2>ColorChanger</h2>
    <button onClick={()=>setColor("red")}>Red</button>
     <button onClick={()=>setColor("yellow")}>Yellow</button>
      <button onClick={()=>setColor("green")}>Green</button>
    <div className="block" style={{backgroundColor:color}}></div>
    
  </div>
)}
export default App
