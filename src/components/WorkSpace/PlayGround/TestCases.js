import React from "react";
import EditorFooter from "./EditorFooter";

const TestCases = () => {
  return (
    <div className="p-0.5 pb-0">
      <div className="flex flex-col h-full bg-neutral border bottom-[.5px] border-[#dddddd6e] rounded-lg shadow-2xl overflow-hidden ">
        <div className="flex h-10 items-center bg-base-200 ">
          <div className="relative flex h-full flex-col justify-center cursor-pointer px-5">
            <div className="text-md leading-5 font-medium text-label-1 text-white w-fit border-b-2 border-white pb-1">
              Testcases
            </div>
          </div>
        </div>
        <div className="w-full z-10 px-5  overflow-y-auto">
          <div className="flex mt-2 gap-3">
            <button className="flex items-center justify-center px-3 py-1 rounded-lg text-sm w-fit bg-[#39494f] hover:opacity-90">
              Case 1
            </button>
            <button className="flex items-center justify-center px-3 py-1 rounded-lg text-sm w-fit bg-[#39494f] hover:opacity-90">
              Case 2
            </button>
            <button className="flex items-center justify-center px-3 py-1 rounded-lg text-sm w-fit bg-[#39494f] hover:opacity-90">
              Case 3
            </button>
          </div>
          <div className="font-semibold">
            <p className="text-label-1 dark:text-dark-label-1 text-sm font-medium mt-4 text-white">
              Input:
            </p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] font-menlo bg-[#39494f] border-transparent mt-1 text-white">
              nums = [2,7,11,15], target = 9
            </div>
            <p className="text-label-1 dark:text-dark-label-1 text-sm font-medium mt-4 text-white">
              Output:
            </p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] font-menlo bg-[#39494f] border-transparent mt-1 text-white">
              [0,1]
            </div>
          </div>
        </div>
        <EditorFooter />
      </div>
    </div>
  );
};

export default TestCases;
