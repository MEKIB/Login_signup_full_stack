import React,{useState} from 'react'
import "./login.css"
import LoginValidation from './loginValidatin'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
function Login1() {
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate=useNavigate()
  axios.defaults.withCredentials=true
 const handleSubmit=(e)=>{
  e.preventDefault()
  axios
    .post("http://localhost:3000/login", { email, password })
    .then((res) => {
      console.log(res)  
      if(res.data==="success"){
        navigate("/home")
      }  
    })
    .catch((err) => console.log(err));
 }
  return (
    <div className="LoginForm">
      <h1>Login here</h1>
      <form className='container' onSubmit={handleSubmit}>
        <div className="element">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" 
            onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='enter your email' />
        </div>
        <div className="element">
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" 
            onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='enter your password'/>
        </div>
        <button type="submit">Login</button>
        <p>not yet a member? <span><Link to="/signup">signup</Link></span></p>
      </form>
    </div>
  )
}

export default Login1
