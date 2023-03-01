import React from "react";
import { Img, Thumbsup, Like, comment, Share } from "../assets/assets";
const Postskeleton = ({
  profileimg,
  image,
  username,
  heading,
  desc,
  likes,
  comments,
  shares,
}) => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <div className=" rounded-full">
            <img src={Img} alt="" />
          </div>
          <h4>{username}</h4>
        </div>
        <div>
          <p>{desc}</p>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <div>
            <img src={Thumbsup} alt="" />
            <p>{likes}</p>
          </div>
          <div>
            <p>
              <span>{comments}</span> comments
            </p>
            <p>
              <span>{shares}</span> shares
            </p>
          </div>
        </div>
        <div>
          <div>
            <button>
              <img src={Like} alt="" />
            </button>
            <button>
              <img src={comment} alt="" />
            </button>
          </div>
          <div>
            <button>
              <img src={Share} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postskeleton;
