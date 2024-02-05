import React from "react";
import Split from "react-split";
import Editor from "./Editor";
import EditorFooter from "./EditorFooter";
import TestCases from "./TestCases";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineFullscreen } from "react-icons/ai";

const PlayGround = () => {
  return (
    <div className="w-[inherit] h-full p-1 bg-neutral">
      <div className="relative w-full h-full border bottom-[.5px] border-[#dddddd6e] rounded-lg shadow-2xl  overflow-hidden">
        <div className="flex w-full flex-col h-full items-center pt-0.5  text-white">
          <div className="flex justify-between items-center bg-base-200 w-full py-2">
            <button className="ml-1 rounded-lg bg-neutral w-fit px-3 py-1.5 text-sm cursor-pointer select-none">
              Javascript
            </button>
            <div class="flex items-center mr-4 gap-4">
              <button class="relative *:hover:scale-100">
                <IoSettingsOutline />

                <div class="absolute -translate-y-[1%] -translate-x-[40%] text-sm text-[#dddddd9d] scale-0 duration-200 ">
                  Settings
                </div>
              </button>

              <button class="relative *:hover:scale-100">
                <AiOutlineFullscreen />

                <div class="absolute  right-0 w-fit text-sm text-[#dddddd9d] scale-0 duration-200 ">
                  Full screen
                </div>
              </button>
            </div>
          </div>
          <Split
            className="split w-full h-full"
            gutterSize={5}
            direction="vertical"
          >
            <Editor />
            <TestCases />
          </Split>
          <EditorFooter />
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
