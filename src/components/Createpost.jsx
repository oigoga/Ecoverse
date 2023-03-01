import React, { useState } from "react";
import { Imageicon, Addpost } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Createpost = () => {
    const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  function handleTextChange(event) {
    setText(event.target.value);  
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Send text and image data to server
    // using fetch or axios
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
    <div className="my-4 appearance-none border rounded-2xl w-full py-2 px-1 flex justify-between border-gray0 h-12 leading-tight focus:outline-none focus:shadow-outline">
     
      <input
        className=""
        id="text"
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Add a new post"
      />
      <button><NavLink to="/newpost"><img src={Addpost} alt="Add a post" /></NavLink></button>
    </div>
    
    
  </form>
  )
}

export default Createpost