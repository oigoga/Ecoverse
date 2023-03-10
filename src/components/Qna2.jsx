import React from "react";
import Qnanav from "./Qnanav";
import { Radiobtn2 } from "../assets/assets";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { Back } from "../assets/assets";
const Qna2 = () => {
  const Image = Radiobtn2;
  const [isChecked, setIsChecked] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server or do something else with it
  };
  const handleRadioBtnChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <div className="px-4 flex flex-col items-center justify-center">
      <div>
            <div className="flex justify-items-start  my-5 py-10">
              <NavLink to="/qna1">
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
            <h4>What types of materials are you interested in recycling?</h4>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="qna-option-1"
              type="radio"
              value="Plastics (bottles, nylon, food, etc)"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="qna-option-1"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Plastics (bottles, nylon, food, etc)
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="qna-option-2"
              type="radio"
              value="Aluminium Can"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="qna-option-2"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Aluminium Can
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="country-option-3"
              type="radio"
              name="countries"
              value="Glasses"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="country-option-3"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Glasses
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="country-option-4"
              type="radio"
              name="countries"
              value="Leathers and paper"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 dark:focus-ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="country-option-4"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Leathers and paper
            </label>
          </div>

          <div className="flex items-center">
            <input
              id=""
              type="radio"
              value="Organic Wastes"
              className="w-4 h-4 border-gray-200 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor=""
              className="block ml-2 text-sm font-medium text-gray-300 dark:text-gray-700"
            >
              Organic Wastes
            </label>
          </div>
        </fieldset>
        <fieldset className="flex flex-col font-montserrat">
          <legend className="sr-only">Questions</legend>

          <div className="my-3 text-lg font-bold text-left font-poppins">
            <h4>Is your business or organization into recycling?</h4>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="qna-option-1"
              type="radio"
              value="Yes"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="qna-option-1"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Yes
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="qna-option-2"
              type="radio"
              value="No"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="qna-option-2"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
        </fieldset>

        <fieldset className="flex flex-col font-montserrat">
          <legend className="sr-only">Questions</legend>

          <div className="my-3 text-lg font-bold text-left font-poppins">
            <h4>
              Do you have an activity/passion/ skills or side hustle related to
              recycling?
            </h4>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="qna-option-1"
              type="radio"
              value="Yes"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="qna-option-1"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Yes
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="qna-option-2"
              type="radio"
              value="No"
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="qna-option-2"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              No
            </label>
          </div>
        </fieldset>

        <div className="w-1/4 mx-[35%] py-5 text-center">
          <NavLink to="/qna3">
            {" "}
            <Button text="Next" />{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Qna2;
