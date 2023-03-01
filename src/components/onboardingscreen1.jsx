import React from "react";
import Osskeleton from "./osskeleton";
import { Welcome } from "../assets/assets.js";
import { NavLink} from "react-router-dom";

const onboardingscreen = () => {
  const Image =  Welcome ;
  const Heading = "Welcome to ECOVERSE";
  const Description = "The social media dedicated to our planet.";

  return (
    <>
      <Osskeleton image={Image} desc={Description} heading={Heading} />
      <div className="text-center">
        <button className="bg-white font-montserrat text-green border-2 border-green rounded-md w-28 mx-3 text-base">
        <NavLink to="/sign-up">Skip</NavLink>
        </button>
        <button className="bg-green font-montserrat text-white rounded-md w-28 mx-3 py-0.5 text-base">
        <NavLink to="/message2">Next</NavLink>
        </button>
      </div>
    </>
  );
};

export default onboardingscreen;
