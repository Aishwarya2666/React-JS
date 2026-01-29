import { useState } from 'react'

function App() {
  const[num1,setNum1]=useState(0);
  const[num2,setNum2]=useState(0);
  const a=Number(num1);
  const b=Number(num2);
  
  return (
    <>
      <div>
        <h1 style={{textDecoration:"underline"}}>Calculator</h1>
        <input type="number"
         placeholder='Enter the first value'
        onChange={(e)=>setNum1(e.target.value)} />
        
        <input type="number" 
        placeholder='Enter the first value'
        onChange={(e)=>setNum2(e.target.value)} />
        <div style={{height:"200px", width:"200px",border:"1px solid", marginLeft:"575px", marginTop:"20px",
        backgroundColor:"lightblue"}}>

        <p><strong>Addition:</strong>{a+b}</p>
        <p><strong>Subraction:</strong>{a-b}</p>
        <p><strong>Multiplication:</strong>{a*b}</p>
        <p><strong>Division:</strong>
        {b==0 ?"can't divided by zero":a/b}
        </p>
        </div>
      
        
      </div>
      
    </>
  )
}

export default App
