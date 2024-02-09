import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
const EditorFooter = ({handleRun, handleSubmit,runLoading,submitLoading }) => {

  return (
    <div className="mt-auto flex bg-base-200  z-10 w-full">
      <div className="mx-5 my-[10px] flex justify-between w-full">
        <button className="flex items-center justify-center px-3 py-2 rounded-lg text-sm w-fit bg-[#39494f] hover:opacity-90">
          Console
          <div className="ml-1 transform transition">
            <IoIosArrowUp />
          </div>
        </button>

       
        <div className="ml-auto flex items-center space-x-4">
          <button
            className={`flex items-center gap-1 justify-center px-3 py-2 rounded-lg text-sm w-fit  ${
              runLoading ? "bg-[#74838a]" : "bg-[#39494f]"
            } hover:opacity-90`}
            onClick={handleRun}
            disabled={runLoading}
          >
            {runLoading ? (
              <>
                <img
                  src="https://leetcode.com/_next/static/images/dark-judging-723b3c3e728a574bc2a2d4b89a10d4d7.gif"
                  alt="Judging..."
                  className="mr-2 h-8 w-8 "
                />
              </>
            ) : (
              <>
                <FaPlay />
                Run
              </>
            )}
          </button>
          <button
            className="flex items-center justify-center px-3 py-2 rounded-lg text-sm w-fit text-white bg-[#27a332] hover:opacity-90"
            onClick={handleSubmit}
            disabled={submitLoading}
          >
            {submitLoading ? (
              <img
                src="https://leetcode.com/_next/static/images/dark-pending-f313d6fe32951fb6b4d48ad3ee4f3821.gif"
                alt="Pending..."
                className=" h-8 w-8"
              />
            ) : (
              <>Submit</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorFooter;
