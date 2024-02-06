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
      <div className="hover:opacity-80 flex gap-0.5 items-center ">
        <div className="">
          <FaRegLightbulb />
        </div>
        <span>Hint</span>
        
      </div>
    </div>
  );
};

export default ExtraInfoNav;
