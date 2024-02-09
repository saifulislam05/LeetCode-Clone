import React, { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { MdMemory } from "react-icons/md";

const TableRow = ({ problem }) => {
  const [formattedDate, setFormattedDate] = useState("");
  const { success, submissionTime, code, language } = problem || {};

  useEffect(() => {
    if (submissionTime) {
      const date = new Date(submissionTime.toDate()) || new Date();
    const dateStr = date?.toISOString().split("T")[0];
    const dateObj = new Date(dateStr);
    const options = { year: "numeric", month: "short", day: "numeric" };
    setFormattedDate(dateObj?.toLocaleDateString("en-US", options));
    }
    
  }, [submissionTime]);

  const runtime = Math.floor(Math.random() * (100 - 10 + 1) + 10);
  const memory = (Math.random() * (70 - 10) + 10).toFixed(1);
  return (
    <>
      <tr
        className={` odd:bg-slate-800
        text-neutral-content cursor-pointer *:*:flex *:*:items-center *:*:gap-1 first:*:items-start *:py-2 *:px-4 *:text-sm`}
      >
        <td className="*:items-start">
          {success && (
            <div className="flex-col !items-start">
              <p className="text-[#27a332] text-base font-semibold">Accepted</p>
              <p className="text-xs">{formattedDate}</p>
            </div>
          )}
        </td>
        <td className=" ">
          <div className="">
            <p className="bg-[#454444] w-fit flex justify-center items-center px-2 py-0.5  rounded-xl">
              {language}
            </p>
          </div>
        </td>
        <td className="">
          <div className="">
            <IoMdTime className="w-5 h-5" />
            <span>{runtime}ms</span>
          </div>
        </td>
        <td className="">
          <div className="">
            <MdMemory className="w-5 h-5" />
            <span>{memory}MB</span>
          </div>
        </td>

        <td className=""></td>
      </tr>
    </>
  );
};

export default TableRow;
