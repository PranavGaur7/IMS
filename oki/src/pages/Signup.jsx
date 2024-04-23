import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from 'sonner';
export default function Signup() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    username: "",
    code: "",
    password: ""
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (handleValidation()) {
        const { password, username, code } = data;
        const user = await axios.post("http://localhost:5000/user/register", {
          username, code, password
        })
        if (user.data.code === 11000 && user.data.keyValue.hasOwnProperty('username')) {
          toast.error("username should be unique")
        }
        else if (user.data.code === 11000 && user.data.keyValue.hasOwnProperty('email')) {
          toast.error("email should be unique")
        }
        else {
          toast.success("Signed in")
          navigate('/dashboard');
        }
      }
    }
    catch (err) {
      console.log(err);
    }
  }
  const handleValidation = () => {
    const { password, username, code } = data;
    if (code === "") {
      toast.error("code is required")
      return false;
    }
    else if (password === "") {
      toast.error("Password is required", toastContent)
      return false;
    }
    else if (username.length < 4) {
      toast.error("Username should be atleast 4 characters", toastContent)
      return false;
    }
    else if (password.length < 6) {

      toast.error("Password should be atleast 6 characters", toastContent)
      return false;
    }
    return true;
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return <>
    <div className='pt-[1px] h-screen bg-gradient-to-br from-orange-200 to-black-800'>
      <div className=' w-2/5  shadow-sm shadow-black p-10 my-36 rounded-lg mx-[450px] bg-gray-100'>

        <p className=' text-stone-700'>Welcome back!!!!</p>
        <p className='text-4xl font-extrabold my-3'>Sign In</p>

        <label htmlFor="">Name</label>
        <br />
        <input type="text" className=' bg-orange-100 w-full' name='username' onChange={handleChange}/>
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" className=' bg-orange-100 w-full' name='password' onChange={handleChange}/>
        <label htmlFor="">Industry Code</label>
        <br />
        <input type="number" className=' bg-orange-100 w-full' name='code' onChange={handleChange}/>
        <div className='flex justify-center align-middle'>
          <button className=' bg-orange-600 m-4 px-10 py-3 rounded-3xl text-white' onClick={handleSubmit}>Sign Up</button>
        </div>
        <div className='flex justify-center align-middle'>
          <div>I don't have an account, <button className=' text-orange-600'><Link to={'/login'}>Login</Link> </button></div>
        </div>

      </div>
    </div>
  </>
}