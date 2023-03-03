import React from 'react'
import Homenavbar from './Homenavbar'
import Marketplacelist from './Marketplacelist'
import { NavLink, Routes,Route } from 'react-router-dom'
import Marketplaceskeleton from './Marketplaceskeleton'
import { Storybar, Addpost } from "../assets/assets";
import MarketplaceData from './Marketplacedata'
import { useState } from 'react'
const Marketplace = () => {
    const [posts, setPosts] = useState(MarketplaceData)
  return (
    
   <>
   <div className="flex flex-col   justify-center  px-3">
         <div>
          <img src={Storybar} alt="stories" />
        </div> 
        <div className='flex justify-between  py-3'>
        <h5 className='font-poppins font-bold text-3xl text-left'>Marketplace</h5>
        <button><NavLink to="/newpost"><img src={Addpost} alt="Add a post" /></NavLink></button>
        </div>
        <Marketplacelist posts={posts}/>
        </div>

<Homenavbar />
   </>
  )
}

export default Marketplace
