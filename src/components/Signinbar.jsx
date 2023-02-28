import React from 'react'
import { Back } from '../assets/assets'
import { Brandname } from '../assets/assets'
const signinbar = () => {
  return (
    <>
    <div>
        <div className="flex justify-items-start  my-5 py-10">
          
          <img src={Back} alt="" className="h-5 ml-3 my-5" />
          <div className="ml-20">
            <img src={Brandname} alt="scroll image" />
          </div>

        </div>
      </div>
    </>
  )
}

export default signinbar