import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
function Login() {
  const Navigate = useNavigate();
  const [data,setData]=useState({
    email:'',
    password:''
  })
  const loginUser = async (e)=>{
    e.preventDefault();
    const {email ,password} = data;
    console.log("Request Payload:", { email, password });

    try {
      const {data} = await axios.post('/login',{
        email,
        password,
      });
      console.log("Response Data:", data);
      if(data.error){
        toast.error(data.error);
      }else{
        setData({});
        toast.success("Login Succesfull, Welcome");
        Navigate('/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  }

 
  return (
    <div><form onSubmit={loginUser}>
      <label>Email:</label>
      <input type="email" placeholder='Enter Email : ' value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}/>
        <label>
          Password:</label>
          <input type="password" placeholder='Enter psswd' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} />
        
        <button type="submit">Login</button></form></div>
  )
}

export default Login