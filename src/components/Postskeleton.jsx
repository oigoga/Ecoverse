import React from "react";
import {
  Img,
  Thumbsup,
  Like,
  comment,
  Share,
  Museum,
  Dot,
} from "../assets/assets";
const Postskeleton = ({post}) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex my-1 md:justify-center">
          <div className=" rounded-full">
            <img src={post.user} alt="" />
          </div>
          <h4 className="font-poppins font-bold m-3 text-lg">{post.username}</h4>
        </div>
        <div>
          <p className="font-montserrat text-left md:text-center">{post.desc}</p>
        </div>
        <div className="my-2 flex justify-center">
          <img src={post.image} alt="" />
        </div>
        <div className="flex justify-between font-montserrat text-green text-sm">
          <div className=" flex">
            <img src={Thumbsup} alt="" className="h-3 w-3 mr-2 mt-1 " />
            <p>{post.likes}</p>
          </div>
          <div className="flex">
            <p className="mx-2">
              <span>{post.comments}</span> comments
            </p>
            <img src={Dot} alt="" className="h-1 w-1 mt-3" />
            <p className="mx-2">
              <span>{post.shares}</span> shares
            </p>
          </div>
        </div>
        <hr className="text-gray1" />
        <div className="flex justify-between my-2">
          <div className="flex ">
            <button className="mx-1">
              <img src={Like} alt="" />
            </button>
            <button className="mx-1">
              <img src={comment} alt="" />
            </button>
          </div>
          <div className="">
            <button className="mx-1">
              <img src={Share} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postskeleton;
