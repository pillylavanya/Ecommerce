import React,{useState} from 'react'
import axios from'axios'
import  './Login.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate=useNavigate()
  const[userName,setUserName]=useState('')
  const[password,setPassword]=useState('')
 async function login(){
    const newUser={email:userName,password}
    const response=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,newUser)
    console.log("login",response)
    if(response.status===200){
      console.log("inside login res",response.data.userId)
    localStorage.setItem("userRole",response.data.role)
    localStorage.setItem("userId",response.data.userId)
      navigate('/')
    }

  }
  return (
    <div className='login-container'>
      <div className='form-group'>
        <label>Email:</label>
        <input 
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label>password:</label>
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button onClick={login}>Login</button>

      
    </div>
  )
}