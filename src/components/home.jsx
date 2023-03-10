import React from 'react'
import { useState } from 'react'
import Postskeleton from './Postskeleton'

const Home = ({posts}) => {
  
  
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

export default Home