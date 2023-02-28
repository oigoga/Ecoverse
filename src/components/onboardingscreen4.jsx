import React from "react";
import Osskeleton from "./osskeleton";
import { Community } from "../assets/assets.js";

const onboardingscreen = () => {
  const Image = Community ;
  const Heading = "Community and Challenges";
  const Description =
    '  participate in challenges that promote recycling efforts. The "Plastic-Free February Challenge."';

  return (
    <>
      <Osskeleton image={Image} desc={Description} heading={Heading} />
      <div className="text-center">
        <button className="bg-green font-montserrat text-white rounded-md w-48 mx-3 py-0.5 text-base">
          Get Started
        </button>
      </div>
    </>
  );
};

export default onboardingscreen;
