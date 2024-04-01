import React, { useState } from 'react';
import './Login.css';
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

const Login1 = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

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
    const [signupdata, setsignupdata] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        age: '',
        phone: '',
        selectgender: '',
        selecttype: '',
        address: ''
      });
    const registerUser = async (e)=>{
      e.preventDefault();
      const {fname , lname , email ,password, age , phone , selectgender,selecttype,address} = signupdata;
      try {
        const {signupdata} = await axios.post('/signup',{
          fname,
          lname,
          email,
          password,
          age,
          phone,
          selectgender,
          selecttype,
          address
        })
        if(signupdata.error){
          toast.error(signupdata.error);
        }else{
            
          toast.success("Signup Succesfull");
          setsignupdata({});
          Navigate('/login');
        }
      } catch (error) {
        console.log(error);
      }
    }
    return (
        <div className="login_main">
        <div className={`Container ${isSignUp ? 'active' : ''}`}>
            <div className="form-container sign-up">
                <form onSubmit={registerUser} >
                    <h1>Create Account</h1>
                    <div className="social-icons">
                    <FaGoogle/>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Enter First Name" value={signupdata.fname} onChange={(e) => setsignupdata({ ...signupdata, fname: e.target.value })} />
<input type="text" placeholder="Enter Last Name" value={signupdata.lname} onChange={(e) => setsignupdata({ ...signupdata, lname: e.target.value })} />
<input type="email" placeholder="Enter Email" value={signupdata.email} onChange={(e) => setsignupdata({ ...signupdata, email: e.target.value })} />
<input type="password" placeholder='Enter psswd' value={signupdata.password} onChange={(e)=>{setsignupdata({...signupdata,password:e.target.value})}}/>
<input type="number" placeholder="Enter Age" value={signupdata.age} onChange={(e) => setsignupdata({ ...signupdata, age: e.target.value })} />
<input type="tel" placeholder="Enter Phone Number" value={signupdata.phone} onChange={(e) => setsignupdata({ ...signupdata, phone: e.target.value })} />
<select value={signupdata.selectgender} onChange={(e) => setsignupdata({ ...signupdata, selectgender: e.target.value })}>
  <option value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>
<select value={signupdata.selecttype} onChange={(e) => setsignupdata({ ...signupdata, selecttype: e.target.value })}>
  <option value="">Select Type</option>
  <option value="owner">Owner</option>
  <option value="customer">Customer</option>
</select>
<textarea placeholder="Enter Address" value={signupdata.address} onChange={(e) => setsignupdata({ ...signupdata, address: e.target.value })}></textarea>

        <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form onSubmit={loginUser}>
                    <h1>Sign In</h1>
                    <div className="social-icons">
                        <FaGoogle/>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}/>
                    <input type="password" placeholder="Password" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}/>
                    <a href="#">Forget Your Password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="hidden" onClick={toggleForm}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="hidden" onClick={toggleForm}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login1;
