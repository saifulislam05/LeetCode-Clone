import React from "react";
import { useSelector } from "react-redux";
import { IoMdArrowDropup, IoMdArrowDropdown  } from "react-icons/io";

import SubmissionTableRow from "./SubmissionTableRow";

const Submissions = () => {
  const { userData } = useSelector((state) => state.user);

  const { solvedProblems } = userData;

  const currentProblem = solvedProblems["valid-parentheses"];

  console.log(currentProblem);

  return (
    <div className="table-scroll max-h-[75vh] overflow-y-auto">
      <table className="text-sm text-left w-full mx-auto">
        <thead className=" min-w-full h-3.5 sticky top-0  z-50">
          <tr className="border-b *:py-2 *:px-4 *:font-semibold">
            <th scope="col" className="">
              Status
            </th>
            <th scope="col" className="">
              Language
            </th>
            <th scope="col" className="">
              Runtime
            </th>
            <th scope="col" className="">
              Memory
            </th>
            <th scope="col" className="">
              Notes
            </th>
          </tr>
        </thead>
        <tbody className="text-white py-3 px-4 max-h-[70vh] overflow-y-auto">
          {currentProblem.map((problem, idx) => {
            return (
              <SubmissionTableRow
                key={problem.id}
                idx={idx}
                problem={problem}
              />
            );
          })}
         
        </tbody>
      </table>
    </div>
  );
};

export default Submissions;
