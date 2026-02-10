import React, { useEffect, useState } from 'react'

function fakestoreapi() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then((data)=>setProducts(data))
    },[])
  return (
    <div style={Styles.Card}>
        <img src={products.image} alt="" style={Styles.img} />
        <h4>{products.title}</h4>
        <p><b>Price :</b>{products.price}</p>
        <p><b>Description :</b>{products.description}</p>
        <p><b>Category :</b>{products.category}</p>
        <p>Rate: {products.rating}</p>

    
      
    </div>
  )
}
const Styles={
    Card:{
        width:"300px",
        border:"1px solid",
        padding:"15px",
        borderRadius:"8px",
        margin:"2px auto"
    },
    img:{
        width:"100%",
        height:"200px",
        objectFix:"contain"
    }
        
    
}

export default fakestoreapi
