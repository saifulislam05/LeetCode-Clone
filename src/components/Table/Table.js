import React from "react";

import { problems } from "../../utils/problems";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <div className="table-scroll max-h-[75vh] overflow-y-auto">
      <table className="text-sm text-left w-full mx-auto">
        <thead className=" min-w-full h-3.5 sticky top-0 bg-base-200 z-50">
          <tr className="border-b *:py-2 *:px-4 *:font-semibold">
            <th scope="col" className="">
              Status
            </th>
            <th scope="col" className="">
              Title
            </th>
            <th scope="col" className="">
              Difficulty
            </th>
            <th scope="col" className="">
              Category
            </th>
            <th scope="col" className="">
              Solution
            </th>
          </tr>
        </thead>
        <tbody className="text-white py-3 px-4 max-h-[70vh] overflow-y-auto">
          {problems.map((problem, idx) => {
            return <TableRow key={problem.id} idx={idx} problem={problem} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
