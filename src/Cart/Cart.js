import React,{useEffect,useState}from 'react'
import './Cart.css'
import axios from 'axios'

export default function Cart() {
  const userId=localStorage.getItem("userId")
    const[loading,setLoading]=useState(true)
    const[userProducts,setUserProducts]=useState()
    useEffect(()=>
    {
      getCartProducts()
    },[])
    async function getCartProducts(){
      const response=await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/cart?userId=${userId}`)
      console.log(response.data.items)
      setUserProducts(response.data.items)
      setLoading(false)
    }
  return (
    <div className='cart-container'>
      {
      loading?(
        <p>Loading....</p>

      ):(
        <div className='cart-items'>
          {
            userProducts.map((productItem)=>(
              <div className='cart-item' key={productItem._id}>
                <h3>Name:{productItem.product.name}</h3>
                <p>Price:{productItem.product.price}</p>
                <p>description:{productItem.product.description}</p>
                <p>category:{productItem.category}</p>
                <p>stock:{productItem.stock}</p>
                <p>quantity:{productItem.quantity}</p>
                </div>
            ))
          }
        </div>
      )
     
    }
      
    </div>
  )
}

