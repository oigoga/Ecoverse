import React from "react";
import { Storybar, Postcreation } from "../assets/assets";
import Homenavbar from "./Homenavbar";
import Createpost from "./Createpost";
import Postskeleton from "./Postskeleton";
import Home from "./Home";
const Mainhome = () => {
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
          <Home/>
        </div>
        <Homenavbar />
      </div>
    </>
  );
};

export default Mainhome;
