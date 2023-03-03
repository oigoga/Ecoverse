import React from "react";
import { Storybar, Postcreation } from "../assets/assets";
import { Routes, Route } from "react-router-dom";
import Homenavbar from "./Homenavbar";
import Createpost from "./Createpost";
import Postskeleton from "./Postskeleton";
import Postdata from "./Postdata";
import { useState } from "react";
import Home from "./Home";
const Mainhome = () => {
  const [posts, setPosts] = useState(Postdata)
  return (
    <>
      <div className="flex flex-col  items-center justify-center text-center px-3">
        <div>
          <img src={Storybar} alt="stories" />
        </div>
        <div className="w-full">
          <Createpost />
        </div>
        <div>
          <Home  posts={posts}/>

        </div>
        <Homenavbar />
      </div>
    </>
  );
};

export default Mainhome;
