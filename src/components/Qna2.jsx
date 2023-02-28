import React from 'react'
import Qnanav from './Qnanav';
import { Radiobtn2 } from '../assets/assets';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
const Qna2 = () => {
    const Image =  Radiobtn2;
    const [isChecked, setIsChecked] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        // Submit the form data to the server or do something else with it
      };
      const handleRadioBtnChange = (event) => {
        setIsChecked(event.target.checked);
      };
  return (
    <>
    <div><Qnanav image={Image} /></div>
        <form  onSubmit={handleSubmit} className='font-montserrat'>
        <h4 className='font-bold text-lg mx-3 text-left'>What types of materials are you interested in recycling?</h4>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              className="form-checkbox h-5 w-5 text-black font-bold"
              checked={isChecked}
              onChange={handleRadioBtnChange}
            />
            <span className="ml-2 text-black text-sm font-light">
              I agree to the terms and conditions
            </span>
          </label>
        </div>
        </form>
        <div className="w-full py-5 text-center">
          <NavLink to="/qna3"> <Button text='Next' /> </NavLink>
        </div>
    </>
  )
}

export default Qna2