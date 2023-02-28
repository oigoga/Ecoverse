import React from "react";
import { Brandname } from "../assets/assets";

const osskeleton = ({ image, heading, desc }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-5 py-10">
        <img src={Brandname} alt="" className="" />
        <div className="w-72 h-80">
          <img src={image} alt="vector image" />
        </div>
        <div className="text-center py-4">
          <h3 className="my-3 pt-10 font-poppins font-extrabold text-lg">
            {heading}
          </h3>
          <p className="font-montserrat text-base mx-4">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default osskeleton;
