import React from "react";
import { GoTag } from "react-icons/go";
import { MdLock } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";

const ExtraInfoNav = ({ difficulty = "Hard" }) => {
  let textColor = "text-[#27a332]";
  if (difficulty === "Medium") {
    textColor = "text-warning";
  } else if (difficulty === "Hard") {
    textColor = "text-error";
  }
  return (
    <div className="flex gap-1 mt-3 items-center text-xs font-semibold mb-6 *:flex *:items-center *:h-fit *:px-2 *:py-0.5 *:rounded-2xl  *:bg-[#56777356] *:cursor-pointer ">
      <div className="">
        <span className={`${textColor}`}>{difficulty}</span>
      </div>

      <div className="hover:opacity-80 flex gap-0.5 items-center">
        <div className="">
          <GoTag />
        </div>
        <span>Topics</span>
      </div>
      <div className="hover:opacity-80 flex gap-0.5 items-center ">
        <MdLock />
        <span>Companies</span>
      </div>

      <div
        className=" relative w-20 "
        style={{ background: "none" }}
      >
        <div className="hintsParrent relative flex gap-0.5 items-center bg-[#56777356]  h-fit px-2 py-0.5 rounded-2xl">
          <div className="">
            <FaRegLightbulb />
          </div>
          <span>Hint</span>
        </div>
        
        <div className="hintsOutput left-[95%] absolute hidden duration-300">
          <div className=" w-48  bg-[#b3b0b0] text-black p-2 rounded-lg  relative">
            <p className="w-fit">No Hints provided !</p>

            {/* <!-- arrow --> */}
            <div className="absolute left-0 top-1/2 transform -translate-x-[45%] rotate-45 w-3 h-2 bg-[#b3b0b0]"></div>
            {/* <!-- end arrow --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraInfoNav;
