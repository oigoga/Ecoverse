import React from "react";
import Signinbar from "./Signinbar";
import { Locked } from "../assets/assets";
import Button from "./Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Forgotpassword1 = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
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
            <img src={Locked} alt="locked padlock" />
            <p className="text-center font-montserrat font-light mt-16">
              Please enter the email associated with your account
            </p>
            <form onSubmit={handleSubmit} className="font-montserrat w-full">
              <div className="mb-4">
                <label
                  className="block -mb-1.5 text-black  font-semibold "
                  htmlFor="name"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email-fp"
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="my-4 w-full text-center">
              <NavLink to="/forgot-password2"> <Button text='Send' /> </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword1;
