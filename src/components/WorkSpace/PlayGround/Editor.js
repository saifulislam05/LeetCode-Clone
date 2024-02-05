import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { nordInit } from "@uiw/codemirror-theme-nord";
import React from "react";

const Editor = () => {
  return (
    <div className="">
      <div className="w-[inherit] h-full  p-2 overflow-y-auto">
        <div className="h-fit">
          <CodeMirror
            value={"function twoSum()"}
            theme={nordInit({
              settings: {
                caret: "#c6c6c6",
                fontFamily: "monospace",
                background: "#2a323c",
              },
            })}
            // onChange={onChange}
            extensions={[javascript()]}
            style={{ fontSize: "14px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
