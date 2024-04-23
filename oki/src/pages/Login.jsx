import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'sonner';
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {

          toast.success("Logged in")
          navigate('/dashboard');

      }
      catch (err) {
        if (err.response && err.response.status === 404) {
          toast.error("Username not found");
        } else if (err.response && err.response.status === 401) {
          toast.error("Invalid password");
        } else {
          console.log(err);
        }
      }
    }
  }

  const handleValidation = () => {
    const { password, username } = data;
    console.log(username.length);
    if (username.length < 4) {
      toast.error("Username should be atleast 4 characters")
      return false;
    }
    else if (password.length < 4) {

      toast.error("Password should be atleast 6 characters")
      return false;
    }
    return true;
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return <>
    <div className='pt-[20px] h-screen bg-gradient-to-br from-orange-200 to-black-800'>
      <div className=' w-2/5  shadow-sm shadow-black p-10 my-36 rounded-lg mx-[450px]  bg-gray-100'>

        <p className=' text-stone-700'>Welcome back!!!!</p>
        <p className='text-4xl font-extrabold my-3'>Sign In</p>

        <label htmlFor="">Username</label>
        <br />
        <input type="text" className=' bg-orange-100 w-full' name='username' onChange={handleChange}/>
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" className=' bg-orange-100 w-full' name='password' onChange={handleChange}/>
        <div className='flex justify-center align-middle'>
          <button className=' bg-orange-600 m-4 px-10 py-3 rounded-3xl text-white' onClick={handleSubmit}>Sign In</button>
        </div>
        <div className='flex justify-center align-middle'>
          <div>I don't have an account, <button className=' text-orange-600'><Link to={'/signup'}>Signup</Link> </button></div>
        </div>

      </div>
    </div>
  </>
};

export default Login;