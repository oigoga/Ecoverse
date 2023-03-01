import React from "react";
import { Arrow } from "../assets/assets";
import { NavLink } from "react-router-dom";
import {
  Img,
  Forsale,
  Dump,
  Challenge,
  Opinions,
  Educate,
  Proceed,
} from "../assets/assets";
const Newpost = () => {
  const username = "Jane Lupata";
  const Image = Img;
  return (
    <>
      <div className="h-screen flex flex-col justify-between ">
        <div>
          <div className="flex bg-green text-white font-montserrat font-semibold text-base h-12 px-3">
            <button>
              <NavLink to="/main-home">
                <img src={Arrow} alt="" />
              </NavLink>
            </button>
            <p className="mx-20 my-3">New Post</p>
          </div>
          <div className="flex m-4">
            <img src={Image} alt="" />
            <h4 className="font-poppins font-bold m-3 text-lg ">{username}</h4>
          </div>
        </div>
        <div>
          <h5 className="font-poppins font-semibold m-3 text-lg ">
            Choose Post Type
          </h5>
          <hr className="text-gray1" />
          <div className="flex justify-between">
            <div className="flex w-1/2">
              <img src={Forsale} alt="" />
              <p className="font-montserrat font-semibold my-4 mx-2">
                For Sale
              </p>
            </div>
            <button>
                <NavLink to="/sale-post">
                  <img src={Proceed} alt="" />
                </NavLink>
              </button>
          </div>
          <hr className="text-gray1" />
          <div className="flex justify-between">
            <div className="flex w-1/2">
              <img src={Educate} alt="" />
              <p className="font-montserrat font-semibold my-4 mx-4">
                Educate
              </p>
            </div>
            <button>
                <NavLink to="/educate">
                  <img src={Proceed} alt="" />
                </NavLink>
              </button>
          </div>
          <hr className="text-gray1" />
          <div className="flex justify-between">
            <div className="flex w-1/2">
              <img src={Opinions} alt="" />
              <p className="font-montserrat font-semibold my-4 mx-5">
                For Sale
              </p>
            </div>
            <button>
                <NavLink to="/opinions">
                  <img src={Proceed} alt="" />
                </NavLink>
              </button>
          </div>
          <hr className="text-gray1" />
          <div className="flex justify-between">
            <div className="flex w-1/2">
              <img src={Challenge} alt="" />
              <p className="font-montserrat font-semibold my-4 mx-5">
                Challenge
              </p>
            </div>
            <button>
                <NavLink to="challenge-post">
                  <img src={Proceed} alt="" />
                </NavLink>
              </button>
          </div>
          <hr className="text-gray1" />
          <div className="flex justify-between ">
            <div className="flex w-2/3 ">
              <img src={Dump} alt="" className="h-16" />
              <p className="font-montserrat font-semibold my-4 mx-2">
                Dump Report
              </p>
            </div>
            <button>
                <NavLink to="dump-report">
                  <img src={Proceed} alt="" />
                </NavLink>
              </button>
          </div>
          <hr className="text-gray1 mb-10" />
        </div>
      </div>
    </>
  );
};

export default Newpost;
