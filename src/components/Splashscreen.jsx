import React from 'react'
import { Logo, Brandname } from '../assets/assets'

const splashscreen = () => {
  return (
   <>
    <div className='flex flex-col items-center mt-64'>
        <img src={Logo} alt="ecoverse logo" />
        <img src={Brandname} alt="ecoverse" />
    </div>
   </>
  )
}

export default splashscreen