import React from "react";
import Osskeleton from "./osskeleton";
import { Personalisedfeed } from "../assets/assets.js";

const onboardingscreen = () => {
  const Image =  Personalisedfeed ;
  const Heading = "Personalised Feed";
  const Description =
    ' Feed of posts related to a particular interest, such as "sustainable fashion" or "upcycling."';

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
