import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "../Utils/Icons";
import '../NavBar/NavBar.css';

function Question({ title, Parha }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] sm:w-[1200px] mx-auto py-4">
        <div
        id="MobileBG"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between rounded-[16px] text-white px-4 py-3 cursor-pointer font-bold transition-all"
        >
          <span className="text-[20px] sm:text-[22px] md:text-[24px] font-bold">
            {title}
          </span>

          <div className="flex transition-transform duration-300">
            {isOpen ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>

        {isOpen && (
          <div id="Arrow" className="bg-gray-800 text-white px-4 py-3 mt-1 text-[16px] sm:text-[20px] md:text-[24px] font-bold rounded-[16px]">
            {Parha}
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;
