import React from 'react'
import { Back } from '../assets/assets'
import { Brandname } from '../assets/assets'
import { NavLink } from 'react-router-dom'
const signinbar = () => {
  return (
    <>
    <div>
        <div className="flex justify-items-start  my-5 py-10">
          <button className="h-5 ml-3 my-5" ><NavLink to><img src={Back} alt="" /></NavLink></button>
     
          <div className="ml-20">
            <img src={Brandname} alt="scroll image" />
          </div>

        </div>
      </div>
    </>
  )
}

export default signinbar