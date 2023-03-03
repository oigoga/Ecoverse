import React from 'react'
import Homenavbar from './Homenavbar'

import { NavLink, Routes,Route } from 'react-router-dom'
import Marketplaceskeleton from './Marketplaceskeleton'
import { Storybar, Addpost } from "../assets/assets";
import propTypes from 'prop-types';
const Marketplacelist = ({posts}) => {
  
  return (
    <>
     {posts.map(post => (
      
        <div>
         <Marketplaceskeleton key={post.id} post={post}/>

        </div>
        
      
      ))}
    </>
    
  )
}


export default Marketplacelist