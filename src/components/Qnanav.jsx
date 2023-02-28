import React from "react";
import { Back } from "../assets/assets";

const Qnanav = ({image}) => {
  return (
    <>
      <div>
        <div className="flex justify-items-start  my-5 py-10">
          
          <img src={Back} alt="" className="h-5 ml-3" />
          <div className="ml-28">
            <img src={image} alt="scroll image" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Qnanav;
