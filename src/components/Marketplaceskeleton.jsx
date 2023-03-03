import React from "react";
import Button from "./Button";
import {
  Img,
  Thumbsup,
  Like,
  comment,
  Share,
  Museum,
  Dot,
} from "../assets/assets";
const Marketplaceskeleton = ({post}) => {
  return (
    <>
    
      <div className="flex flex-col mb-10">
        <div className="flex my-1 md:justify-center">
          <div className=" rounded-full">
            <img src={post.user} alt="" />
          </div>
          <h4 className="font-poppins font-bold m-3 text-lg">{post.username}</h4>
        </div>
        <div>
          <p className="font-montserrat text-left md:text-center">{post.desc}</p>
        </div>
        <div className="my-1 flex justify-center">
          <img src={post.image} alt="" />
        </div>
        <Button text={post.price}/>
        <hr className="text-gray1 font-bold" />
        <div className="flex justify-between my-2">
          <button className="mx-1">
            <img src={Like} alt="" />
          </button>
          <button className="mx-1">
            <img src={comment} alt="" />
          </button>
          <button className="mx-1">
            <img src={Share} alt="" />
          </button>
        </div>
        <hr className="text-gray1" />
      </div>
    </>
  );
};

export default Marketplaceskeleton;
