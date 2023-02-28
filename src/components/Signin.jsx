import React from 'react'
import Signinbar from './Signinbar'
import { useState } from 'react';
import Button from './Button';
import {Brandname, Googlebtn } from '../assets/assets';
const Signin = () => {
   
    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");
    
  
   
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
   
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
   
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Submit the form data to the server or do something else with it
    };
  
    const handleRegisterWithGoogle = () => {
      // Handle registering with Google
    };
  return (
    <>
       <div className='h-screen'>
       <Signinbar/>
        <form onSubmit={handleSubmit} className='font-montserrat p-3'>
    
        <div className="mb-4">
          <label className="block -mb-1.5 text-black    font-semibold" htmlFor="name">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email-s"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        
        <div className="mb-4">
          <label
            className="block text-black font-medium -mb-1.5"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password-s"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
       <div className='mb-4'>
       <a href="" className='text-gold font-semibold'>Forgot Password </a>
       </div>
        <div className="mb-4 text-center">
          <Button text='Continue'/>
          <p className='font-montserrat'>or</p>
          <button className='w-5/6  h-8'><img src={Googlebtn} alt="google" className='h-full w-full' /></button>
        </div>
        <div className="mb-4 text-center">
         <p className='font-light text-black '>Don't have an account? <a href="" className='text-gold font-semibold'>Sign Up </a></p>
        </div>
        </form>
       </div>
    </>
  )
}

export default Signin