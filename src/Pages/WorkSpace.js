import React from "react";
import Split from "react-split";
import PlayGround from "../components/WorkSpace/PlayGround/PlayGround";
import Description from "../components/WorkSpace/Description/Description";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { allProblems } from "../utils/problems/allProblems";

const WorkSpace = () => {
  const { problemId } = useParams();
  const { problems } = useSelector((state) => state.problems);

  const currentProblem = problems.find((problem) => problem.id === problemId);

  return (
    <div className="mx-1 my-2 overflow-hidden">
      <Split
        sizes={[50, 50]}
        direction="horizontal"
        gutterSize={5}
        className="split flex h-[90vh] "
      >
        <Description problem={currentProblem} />
        <PlayGround problem={currentProblem} />
      </Split>
    </div>
  );
};

export default WorkSpace;
