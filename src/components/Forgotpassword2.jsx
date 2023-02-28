import React from "react";
import Signinbar from "./Signinbar";
import { Unlocked } from "../assets/assets";
import Button from "./Button";

const Forgotpassword2 = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server or do something else with it
  };

  return (
    <>
      <div className="px-5 h-screen">
        <Signinbar />
        <div>
          <h3 className="font-extrabold text-2xl font-montserrat">
            Forgot Password
          </h3>
          <div className="flex flex-col justify-between items-center my-10">
            <img src={Unlocked} alt="locked padlock" />
            <p className="text-center font-montserrat font-light mt-16">
              We just sent you an SMS with a 4-digit code. With this you will be
              logged in
            </p>
            <p className="text-center font-montserrat font-light mt-10">
              Enter the code in the field below
            </p>
            <form onSubmit={handleSubmit} className="font-montserrat w-full">
              <div className="flex flex-row justify-around my-7">
                <input type="number" className="border-gray0 border-2 rounded-md w-10 h-10" />
                <input type="number" className="border-gray0 border-2 rounded-md w-10 h-10" />
                <input type="number" className="border-gray0 border-2 rounded-md w-10 h-10" />
                <input type="number" className="border-gray0 border-2 rounded-md w-10 h-10" />
              </div>
              <div className="mb-10 w-full text-center">
                <Button text="Verify" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword2;
