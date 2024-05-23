import React, { useEffect, useState } from 'react'
import SignupValidation from './signupValidation'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function Singup1() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const navigate=useNavigate()
    const submitHandler=(e)=>{
      e.preventDefault()
      axios
        .post("http://localhost:3000/register", { name, email, password })
        .then(navigate("/"))
        .catch((err) => console.log(err));
    }
  return (
    <div className="LoginForm">
    <h1>Signup here</h1>
    <form className='container' onSubmit={submitHandler}>
      <div className="element">
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" 
           onChange={(e)=>setName(e.target.value)} value={name} placeholder='enter your name' />
      </div>
      <div className="element">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" 
           onChange={(e)=>setEmail(e.target.value)} value ={email} placeholder='enter your email' />
      </div>
      <div className="element">
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" 
          onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='enter your password'/>
      </div>
      <button type="submit">signup</button>
      <p>are you a member? <span><Link to="/">login</Link></span></p>
    </form>
  </div>
  )
}

export default Singup1
