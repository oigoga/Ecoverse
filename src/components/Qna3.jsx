import React from "react";
import { Radiobtn3 } from "../assets/assets";
import Qnanav from "./Qnanav";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { Back } from "../assets/assets";
const Qna3 = () => {
  const Image = Radiobtn3;
  return (
    <>
      <div className="px-4 flex flex-col items-center justify-center">
        
          <div>
            <div className="flex justify-items-start  my-5 py-10">
              <NavLink to="/qna2">
                <button>
                  <img src={Back} alt="" className="h-5 ml-3" />
                </button>
              </NavLink>
              <div className="ml-28">
                <img src={Image} alt="scroll image" />
              </div>
            </div>
          </div>
        

        <fieldset className="flex flex-col font-montserrat">
          <legend className="sr-only">Questions</legend>

          <div className="my-3 text-lg font-bold text-left font-poppins">
            <h4>How did you hear about Ecoverse?</h4>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="qna-option-1"
              type="radio"
              value="Newsletter"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="qna-option-1"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Newsletter
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="qna-option-2"
              type="radio"
              value="Search Engine"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="qna-option-2"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Search Engine
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="qna-option-3"
              type="radio"
              value="Newspaper"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="qna-option-3"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Newspaper
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="qna-option-4"
              type="radio"
              value="Social Media"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="qna-option-4"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Social Media
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="qna-option-5"
              type="radio"
              value="Others"
              className="w-4 h-4 border-gray-200 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="qna-option-5"
              className="block ml-2 text-sm font-medium text-gray-300 dark:text-gray-700"
            >
              Others
            </label>
          </div>
        </fieldset>

        <div className="w-1/4 mx-[35%] py-5 text-center">
          <NavLink to="/main-home">
            {" "}
            <Button text="Next" />{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Qna3;
