import React from "react";
import Homenavbar from "./Homenavbar";
import { Arrow } from "../assets/assets";
import { NavLink } from "react-router-dom";
import {
  Img,
  Payment,
  Notifi,
  Security,
  Darkmode,
  Report,
  Help,
  Proceed,
  Logout,
} from "../assets/assets";
const Profile = () => {
  const username = "Jane Lupata";
  const Image = Img;
  const email = "user@email.com";
  return (
    <>
      <div className="flex flex-col justify-between ">
        <div>
          <div className="flex bg-green text-white font-montserrat font-semibold text-base h-12 px-3">
            <button>
              <NavLink to="/main-home">
                <img src={Arrow} alt="" />
              </NavLink>
            </button>
            <p className="mx-20 my-3">Profile</p>
          </div>
          <div className="flex m-4">
            <img src={Image} alt="" />
            <div>
              <h4 className="font-poppins font-bold mx-3 mt-3 text-lg ">
                {username}
              </h4>
              <p className="mx-2 font-montserrat">{email}</p>
            </div>
          </div>
        </div>
        <div className="mt-10 ">
          <div className="flex justify-between rounded-lg bg-grey h-10 px-3">
            <div className="flex ">
              <img src={Payment} alt="" className="h-3/4 mt-2" />
              <p className="font-montserrat font-light mt-3 mx-2">
                Payment & Purchase
              </p>
            </div>
            <button className="">
              <NavLink to="/payment">
                <img src={Proceed} alt="" />
              </NavLink>
            </button>
          </div>
          <hr className="text-gray1" />
          <div className="mt-7">
            <p className="font-montserrat mx-2">Settings</p>
            <div className="flex justify-between rounded-lg bg-grey h-10 px-3 ">
              <div className="flex ">
                <img src={Notifi} alt="" className="h-3/4 mt-2" />
                <p className="font-montserrat font-light mt-3 mx-2">
                  Notifications
                </p>
              </div>
              <button className="">
                <NavLink to="/notification-settings">
                  <img src={Proceed} alt="" />
                </NavLink>
              </button>
            </div>
            <div className="flex justify-between rounded-lg bg-grey h-10 px-3 my-3">
              <div className="flex ">
                <img src={Security} alt="" className="h-3/4 mt-2" />
                <p className="font-montserrat font-light mt-3 mx-2">Security</p>
              </div>
              <button className="">
                <NavLink to="/security">
                  <img src={Proceed} alt="" />
                </NavLink>
              </button>
            </div>
            <div className="flex justify-between rounded-lg bg-grey h-10 px-3 my-3">
              <div className="flex ">
                <div className="h-3/4 mt-2 w-6"></div>
                <p className="font-montserrat font-light mt-3 mx-2">Language</p>
              </div>
              <button className="">
                <NavLink to="/language">
                  <img src={Proceed} alt="" />
                </NavLink>
              </button>
            </div>
            <div className="flex justify-between rounded-lg bg-grey h-10 px-3 mt-3">
              <div className="flex ">
                <img src={Darkmode} alt="" className="h-3/4 mt-2" />
                <p className="font-montserrat font-light mt-3 mx-2">
                  Dark Mode
                </p>
              </div>
              <button className="">
                <NavLink to="/darkmode">
                  <img src={Proceed} alt="" />
                </NavLink>
              </button>
            </div>
          </div>
          <hr className="text-gray1" />

          <div className="mt-5">
            <p className="font-montserrat mx-2">Support</p>
            <div className="flex justify-between rounded-lg bg-grey h-10 px-3 ">
              <div className="flex ">
                <img src={Report} alt="" className="h-3/4 mt-2" />
                <p className="font-montserrat font-light mt-3 mx-2">
                  Report a user
                </p>
              </div>
              <button className="">
                <NavLink to="/report-user">
                  <img src={Proceed} alt="" />
                </NavLink>
              </button>
            </div>
            <div className="flex justify-between rounded-lg bg-grey h-10 px-3 my-3">
              <div className="flex ">
                <img src={Help} alt="" className="h-3/4 mt-2" />
                <p className="font-montserrat font-light mt-3 mx-2">
                  Help Center
                </p>
              </div>
              <button className="">
                <NavLink to="/help">
                  <img src={Proceed} alt="" />
                </NavLink>
              </button>
            </div>
          </div>
          <div>
            <button><NavLink to="/sign-in"><img src={Logout} alt="" /></NavLink></button>
          </div>
        </div>
      </div>
      <Homenavbar />
    </>
  );
};

export default Profile;
