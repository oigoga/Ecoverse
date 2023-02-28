import React from 'react'
import { Radiobtn3 } from '../assets/assets';
import Qnanav from './Qnanav'
import Button from './Button';
import { NavLink } from 'react-router-dom';
const Qna3 = () => {
    const Image =  Radiobtn3;
  return (
    <>
         <div><Qnanav image={Image} /></div>
         <div className="w-full py-5 text-center">
          <NavLink to="/home"> <Button text='Next' /> </NavLink>
        </div>
    </>
  )
}

export default Qna3