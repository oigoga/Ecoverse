import React from 'react'
import { Home, Location, Store, Notifications, Profile } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Homenavbar = () => {
  return (
   <>
    <div className=' fixed flex bottom-0 px-2   z-70 w-screen  justify-around  '>
        <ul className='flex justify-around w-full -translate-x-(2.5) -translate-y-4 hover:shadow-green'>
            <li className=''><NavLink to="/home"><img src={Home} alt="main-home" /></NavLink></li>
            <li className=''><NavLink to="/location"><img src={Location} alt="home" /></NavLink></li>
            <li className=''><NavLink to="/store"><img src={Store} alt="home" /></NavLink></li>
            <li className=''><NavLink to="/notification"><img src={Notifications} alt="home" /></NavLink></li>
            <li className=''><NavLink to="/profile"><img src={Profile} alt="home" /></NavLink></li>
        </ul>
    </div>
   </>
  )
}

export default Homenavbar