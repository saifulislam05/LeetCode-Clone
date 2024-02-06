import React from "react";
import Split from "react-split";
import Editor from "./Editor";
import TestCases from "./TestCases";

const PlayGround = ({problem}) => {

  return (
    <div className="w-[inherit] h-full p-0.5 pl-0">
      <div className="relative w-full h-full overflow-hidden">

          <Split
            className="split w-full h-full"
            gutterSize={5}
            direction="vertical"
          >
            <Editor problem={problem} />
            <TestCases problem={problem} />
          </Split>

      </div>
    </div>
  );
};

export default PlayGround;
