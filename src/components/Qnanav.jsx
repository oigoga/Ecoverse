import React from "react";
import { Back } from "../assets/assets";

const Qnanav = ({image, back}) => {
  return (
    <>
      <div>
        <div className="flex justify-items-start  my-5 py-10">
          
          <button>
          <img src={back} alt="" className="h-5 ml-3" />
          </button>
          <div className="ml-28">
            <img src={image} alt="scroll image" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Qnanav;
