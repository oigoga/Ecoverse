import React from "react";
import Osskeleton from "./osskeleton";
import { Tips } from "../assets/assets.js";

const onboardingscreen = () => {
  const Image = Tips ;
  const Heading = "Recycling Tips and Tricks";
  const Description =
    "  Simple, easy-to-follow guides that help users recycle more effectively.";

  return (
    <>
      <Osskeleton image={Image} desc={Description} heading={Heading} />
      <div className="text-center">
        <button className="bg-white font-montserrat text-green border-2 border-green rounded-md w-28 mx-3 text-base">
          Skip
        </button>
        <button className="bg-green font-montserrat text-white rounded-md w-28 mx-3 py-0.5 text-base">
          Next
        </button>
      </div>
    </>
  );
};

export default onboardingscreen;
