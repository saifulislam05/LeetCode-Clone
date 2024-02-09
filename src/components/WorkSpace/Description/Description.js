import React, { useState } from "react";
import { useSelector } from "react-redux";
import DescriptionActions from "./DescriptionActions";
import ExtraInfoNav from "./ExtraInfoNav";
import { TbFileDescription } from "react-icons/tb";
import { GrHistory } from "react-icons/gr";

import Submissions from "../Submissions/Submissions"

const Description = ({ problem }) => {
  const [currentTab, setCurrentTab] = useState("description");
  const {id,  difficulty ,title, problemStatement, examples, constraints} = problem || {};

  const { userData } = useSelector((state) => state.user);

  const submissionsForCurrentProblem = userData?.solvedProblems[id];

  return (
    <div className=" h-full p-0.5">
      <div className=" relative h-full min-w-full border-[.5px] m-0 border-[#dddddd6e] rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col min-w-full h-[95%] items-center pt-0.5 text-white ">
          <div className="bg-base-200 flex gap-2 w-full pt-2">
            <div
              className={` ${
                currentTab === "description" && "bg-neutral"
              } rounded-t-xl  flex gap-1 items-center w-fit px-5 py-2 text-sm cursor-pointer select-none`}
              onClick={() => setCurrentTab("description")}
            >
              <TbFileDescription size={18} className="text-blue-600 " />
              Description
            </div>
            {submissionsForCurrentProblem && (
              <div
                className={` ${
                  currentTab === "submissions" && "bg-neutral"
                } rounded-t-xl  flex gap-1 items-center w-fit px-5 py-2 text-sm cursor-pointer select-none`}
                onClick={() => setCurrentTab("submissions")}
              >
                <GrHistory size={16} className="text-blue-600 " />
                Submissions
              </div>
            )}
          </div>

          {currentTab === "description" ? (
            <>
              <div className="flex py-2 min-w-full overflow-y-scroll bg-neutral">
                <div className="min-w-full h-fit">
                  <div className="px-5">
                    <div className="overflow-y-auto">
                      <div className="flex space-x-4">
                        <div className="flex-1 mr-2 text-xl text-white font-medium">
                          {title}
                        </div>
                        {submissionsForCurrentProblem && (
                          <div className="text-sm flex items-center gap-1">
                            <span className="text-[#ddddddcb] ">Solved</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              className="h-3.5 w-3.5 text-[#3dbf77] inline-block shrink-0 fill-none stroke-current"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21.6 12a9.6 9.6 0 01-9.6 9.6 9.6 9.6 0 110-19.2c1.507 0 2.932.347 4.2.965M19.8 6l-8.4 8.4L9 12"
                              ></path>
                            </svg>
                          </div>
                        )}
                      </div>
                      <ExtraInfoNav difficulty={difficulty} />
                      <div className="text-white text-sm my-4">
                        <div className="*:leading-5">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: problemStatement,
                            }}
                          />
                        </div>
                      </div>
                      <div className="mt-4 w-full">
                        {examples?.map((example, index) => {
                          const { explanation, inputText, outputText } =
                            example;
                          return (
                            <div className="w-full" key={index}>
                              {" "}
                              <p className="font-medium text-white">
                                Example {index + 1}:
                              </p>
                              <div className="io-card">
                                <pre className="w-full">
                                  <strong className="dark:text-white">
                                    Input:
                                  </strong>{" "}
                                  {inputText}
                                  <br />
                                  <strong>Output:</strong> {outputText}
                                  <br />
                                  {explanation && (
                                    <>
                                      <strong>Explanation:</strong>{" "}
                                      {explanation}
                                      <br />
                                    </>
                                  )}
                                </pre>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="my-5">
                        <div className="text-white text-sm font-medium">
                          Constraints:
                        </div>
                        <ul className="text-white ml-5 list-disc">
                          <div
                            dangerouslySetInnerHTML={{ __html: constraints }}
                          />
                        </ul>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <DescriptionActions problem={problem} />
            </>
          ) : (
            <>
              

              <div className="flex py-2 min-w-full overflow-y-scroll bg-neutral h-full">
                <div className="min-w-full h-fit">
                  <div className="px-5">
                    <Submissions />
                  </div>
                </div>
              </div>
              
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Description;
