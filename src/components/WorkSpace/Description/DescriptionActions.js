import React from "react";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineLoading3Quarters,
  AiFillStar,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

const DescriptionActions = () => {
  return (
    <div className="mb-0.5 gap-3 flex items-center text-[#fff9] *:cursor-pointer">
      <div className="flex gap-0.5">
        <button class="flex items-center gap-2 px-3 py-1 rounded-l-lg text-sm w-fit bg-[#39494f]">
          <AiOutlineLike size={18} />

          <div class="font-semibold">54.8K</div>
        </button>
        <button class="flex items-center gap-2 px-3 py-1 rounded-r-lg text-sm w-fit bg-[#39494f]">
          <AiOutlineDislike size={18} />

          <div class="font-semibold">54.8K</div>
        </button>
      </div>
      <div className="flex gap-0.5">
        <button class="flex text-[#fff9] items-center gap-2 px-3 py-1 rounded-lg text-sm w-fit  hover:bg-[#39494f]">
          <FaRegComment size={18} />

          <div class="font-semibold">54.8K</div>
        </button>
      </div>
      <span className="">|</span>
      <TiStarOutline size={18} />
    </div>
  );
};

export default DescriptionActions;
