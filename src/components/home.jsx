import React from 'react'
import { useState } from 'react'
import Postskeleton from './Postskeleton'
import Marketplaceskeleton from './Marketplaceskeleton'
import Homenavbar from './Homenavbar'
import Postdata from './Postdata'
const home = ({posts}) => {
  
  
  return (
    <>
      {posts.map(post => (
      
      <div>
       <Postskeleton key={post.id} post={post}/>

      </div>
      
    
    ))}

    </>
  )
}

export default home