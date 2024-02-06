import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { nordInit } from "@uiw/codemirror-theme-nord";
import { tags as t } from "@lezer/highlight";
import React from "react";
// Ensure these icons are imported
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineFullscreen } from "react-icons/ai";

const Editor = ({problem}) => {
     const { data } = problem;
     const { starterCode } = data;

  return (
    <div className="p-0.5 pt-0">
      <div className="flex flex-col h-full bg-neutral border-[.5px] border-[#dddddd6e] rounded-lg shadow-2xl overflow-hidden ">
        <div className="bg-base-200 w-full p-2 flex justify-between">
          <button className="ml-1 rounded-lg bg-neutral w-fit px-3 py-1.5 text-sm cursor-pointer select-none">
            Javascript
          </button>
          <div className="flex items-center mr-4 gap-4">
            <button className="relative *:hover:scale-100">
              <IoSettingsOutline />
              <div className="absolute -translate-y-[1%] -translate-x-[40%] text-sm text-[#dddddd9d] scale-0 duration-200">
                Settings
              </div>
            </button>

            <button className="relative *:hover:scale-100">
              <AiOutlineFullscreen />
              <div className="absolute -right-5 w-20 text-sm text-[#dddddd9d] scale-0 duration-200">
                Full screen
              </div>
            </button>
          </div>
        </div>
        <div className="w-[inherit] h-full p-2 overflow-y-auto">
          <div className="h-fit">
            <CodeMirror
              value={starterCode}
              theme={nordInit({
                settings: {
                  caret: "#c6c6c6",
                  fontFamily: "monospace",
                  background: "#2a323c",
                  foreground: "",
                },
                styles: [
                  { tag: t.comment, color: "#ccc" },
                  { tag: t.definition(t.typeName), color: "#194a7b" },
                  { tag: t.typeName, color: "#194a7b" },
                  { tag: t.tagName, color: "#008a02" },
                  // { tag: t.variableName, color: "#1a00db" },
                ],
              })}
              // Uncomment and define onChange function to use
              // onChange={(value, viewUpdate) => {
              //   console.log("value:", value);
              // }}
              extensions={[javascript()]}
              style={{ fontSize: "14px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
