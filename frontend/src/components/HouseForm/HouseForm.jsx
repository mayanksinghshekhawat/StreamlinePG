import React, { useState } from 'react';
import './HouseForm.css'; // Import the CSS file
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
const HouseForm = () => {
  const Navigate = useNavigate();
  const [data,setData]=useState({
    email:'',
    roomType:''
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email ,roomType} = data;
    console.log("Request Payload:", { email, roomType });

    try {
      const {data} = await axios.post('/houseForm',{
        email,
        roomType,
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
    <div className="login_main">
      <div className="Container">
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h2>Enter the House Details</h2>
            <input
              type="email"
              placeholder="Enter the House Owner Email"
              value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}
              required
            />
            <select
              value={data.roomType} onChange={(e) => setData({ ...data, roomType: e.target.value })}
              required
            >
              <option value="">Select Room Type</option>
              <option value="oneSeater">One Seater</option>
              <option value="twoSeater">Two Seater</option>
            </select>
            <button className="hidden">
              Pay Advance
            </button>
            <button >Pay using GPay</button>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="toggle-container" style={{"margin-top":"20px"}}>
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseForm;
