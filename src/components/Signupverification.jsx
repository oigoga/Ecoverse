import React from "react";
import { SuVerification } from "../assets/assets";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const signupverification = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-5 py-10">
        <img src={SuVerification} alt="" className="" />
        <div className="text-center py-4">
          <h3 className="my-3 pt-10 font-poppins font-extrabold text-lg">
          Check Your Inbox Please!
          </h3>
          <p className="font-montserrat text-base mx-4">
            Hey Jane, to start using Ecoverse, we need to verify your email.
            Please click on the verification link sent to your email to confirm
            it’s really you.
          </p>
        </div>
        <div className="w-2/3 text-center">
        <NavLink to="/qna1"> <Button text='Sure!' /> </NavLink>
        </div>
        <div className="my-4 text-center">
         <p className='font-light text-black '>Didn't get an email? <a href="" className='text-gold font-semibold'>Send it again </a></p>
        </div>
      </div>
    </>
  );
};

export default signupverification;
