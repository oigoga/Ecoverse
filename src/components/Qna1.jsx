import React from 'react'
import { Emailver, Radiobtn1 } from '../assets/assets'
import Button from './Button'
import { NavLink } from 'react-router-dom'
const EmailVer = () => {
  return (
    <>
        <div className='flex flex-col items-center  justify-around h-screen my-3  py-5'>
            <img src={Radiobtn1} alt="" className='mb-'/>
            <img src={Emailver} alt="hello" />
            <div>
            <p className="font-montserrat text-base text-center mx-4">
            Your response to the next few questions will enable us serve you better.
          </p>
          <div className="w-full py-5 text-center">
          <NavLink to="/qna2"> <Button text='Next' /> </NavLink>
        </div>
            </div>
        </div>
        
    </>
  )
}

export default EmailVer