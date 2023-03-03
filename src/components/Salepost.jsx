import React from "react";
import { Arrow, Img, Addmedia } from "../assets/assets";
import { NavLink } from "react-router-dom";
const Salepost = ({text}) => {
  const username = "Jane Lupata";
  const Image = Img;
  return (
    <>
      <div className="h-screen flex flex-col w-screen     ">
        <div>
          <div className="flex justify-evenly bg-green text-white font-montserrat font-semibold text-base h-16 px-3">
            <div className="flex w-3/4 ">
              <button>
                <NavLink to="/newpost">
                  <img src={Arrow} alt="" />
                </NavLink>
              </button>
              <p className="mx-10 my-5">For Sale</p>
            </div>
            <button className="bg-white rounded-lg px-2 h-3/4 mt-2 text-green font-normal">
              Share
            </button>
          </div>
          <div className="flex m-4">
            <img src={Image} alt="" />
            <h4 className="font-poppins font-bold m-3 text-lg ">{username}</h4>
          </div>
        </div>
        <div className="px-5 my-4">
          <textarea
            type="text"
            value={text}
            name=""
            id="desc"
            rows={5}
            className=" w-full   bg-grey"
          />
        </div>
        <div className="flex justify-end mx-5">
          <button ><img src={Addmedia} alt="" /></button>
        </div>
      </div>
    </>
  );
};

export default Salepost;
