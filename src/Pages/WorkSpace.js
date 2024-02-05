import React from "react";
import Split from "react-split";
import Description from "../components/WorkSpace/Description/Description";

const WorkSpace = () => {
  return (
    <div className="mx-1 ">
      <Split sizes={[50, 50]} direction="horizontal" className="flex h-[90vh] ">
      <Description/>
      <div>saiful</div>
    </Split>
    </div>
    
  );
};

export default WorkSpace;
