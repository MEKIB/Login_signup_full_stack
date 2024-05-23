import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
function Home() {
  axios.defaults.withCredentials=true;
  useEffect(()=>{
     axios
       .get("http://localhost:3000/home")
       .then(result=>{
          console.log(result)
          if(result.data==="success"){
            // Navigate("/login")
          }
        })
       .catch((err) => console.log(err));
  },[])
  return (
    <div>
      this is home page
    </div>
  )
}

export default Home
