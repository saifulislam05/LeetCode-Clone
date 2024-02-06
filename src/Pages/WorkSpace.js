import React from "react";
import Split from "react-split";
import PlayGround from "../components/WorkSpace/PlayGround/PlayGround";
import Description from "../components/WorkSpace/Description/Description";

const WorkSpace = () => {
  return (
    <div className="mx-1 my-2 overflow-hidden">
      <Split
        sizes={[50, 50]}
        direction="horizontal"
        gutterSize={5}
        className="split flex h-[90vh] "
      >
        <Description />
        <PlayGround />
      </Split>
    </div>
  );
};

export default WorkSpace;
