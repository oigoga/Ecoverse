import React from "react";
import Homenavbar from "./Homenavbar";
import { Locationmap, Greenback } from "../assets/assets";

const Location = () => {
  return (
    <>
      <div className="p-3 h-screen flex items-center flex-col ">
        <div className="">
          <img
            src={Greenback}
            alt="back"
            className="relative top-14 mx-2 z-20"
          />
          <img src={Locationmap} alt="map" className="" />
        </div>
        <div className="rounded-md  shadow relative -mt-10 w-90 max-w-full   bg-green left-3  h-40">
          
        </div>
      </div>

      <Homenavbar />
    </>
  );
};

export default Location;
