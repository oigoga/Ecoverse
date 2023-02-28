import React from 'react'
import { Home, Location, Store, Notifications, Profile } from '../assets/assets'

const Homenavbar = () => {
  return (
   <>
    <div className='  bottom-0 px-2 mb-4 mx-10 z-50 relative'>
        <ul className='flex justify-around'>
            <li ><button></button></li>
            <li><button><a href=""><img src={Location} alt="home" /></a></button></li>
            <li><button><a href=""><img src={Store} alt="home" /></a></button></li>
            <li><button><a href=""><img src={Notifications} alt="home" /></a></button></li>
            <li><button><a href=""><img src={Profile} alt="home" /></a></button></li>
        </ul>
    </div>
   </>
  )
}

export default Homenavbar