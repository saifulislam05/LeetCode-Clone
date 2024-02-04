import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <table className="text-sm text-left w-full mx-auto">
      <thead className="border-b ">
        <tr className="*:py-2 *:px-4 *:font-semibold">
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
      <tbody className="text-white py-3 px-4">
        <TableRow />
      </tbody>
    </table>
  );
};

export default Table;
