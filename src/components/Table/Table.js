import React from "react";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <table class="text-sm text-left w-full mx-auto">
      <thead class="font-semibold text-gray-700 capitalize dark:text-gray-400 border-b ">
        <tr className="*:py-2 *:px-4">
          <th scope="col" class="">
            Status
          </th>
          <th scope="col" class="">
            Title
          </th>
          <th scope="col" class="">
            Difficulty
          </th>
          <th scope="col" class="">
            Category
          </th>
          <th scope="col" class="">
            Solution
          </th>
        </tr>
      </thead>
      <tbody class="text-white py-3 px-4">
        <TableRow />
      </tbody>
    </table>
  );
};

export default Table;
