import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import './Signup.css'
function Signup() {
  const Navigate = useNavigate();
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    age: '',
    phone: '',
    selectgender: '',
    address: ''
  });
const registerUser = async (e)=>{
  e.preventDefault();
  const {fname , lname , email ,password, age , phone , selectgender ,address} = data;
  try {
    const {data} = await axios.post('/signup',{
      fname,
      lname,
      email,
      password,
      age,
      phone,
      selectgender,
      address
    })
    if(data.error){
      toast.error(data.error);
    }else{
      setData({});
      toast.success("Login Succesfull, Welcome");
      Navigate('/login');
    }
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
    <div className="signup-container">
      <div className="image-container">
        <img src="https://via.placeholder.com/400" alt="Placeholder" />
      </div>
    <div className='container'>
      <form onSubmit={registerUser} className='form-container'>
      <label>
        First Name:
        <input type="text" placeholder="Enter First Name" value={data.fname} onChange={(e) => setData({ ...data, fname: e.target.value })} />
      </label>
      <label>
        Last Name:
        <input type="text" placeholder="Enter Last Name" value={data.lname} onChange={(e) => setData({ ...data, lname: e.target.value })} />
      </label>
      <label>
        Email:
        <input type="email" placeholder="Enter Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
      </label>
      <label>
      <label>
          Password:</label>
          <input type="password" placeholder='Enter psswd' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}/>
        Age:
        <input type="number" placeholder="Enter Age" value={data.age} onChange={(e) => setData({ ...data, age: e.target.value })} />
      </label>
      <label>
        Phone:
        <input type="tel" placeholder="Enter Phone Number" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
      </label>
      <label>
        Gender:
        <select value={data.selectgender} onChange={(e) => setData({ ...data, selectgender: e.target.value })}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Address:
        <textarea placeholder="Enter Address" value={data.address} onChange={(e) => setData({ ...data, address: e.target.value })}></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Signup