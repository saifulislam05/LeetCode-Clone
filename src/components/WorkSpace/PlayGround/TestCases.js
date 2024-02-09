import React, { useState } from "react";
import EditorFooter from "./EditorFooter";

const TestCases = ({
  problem,
  handleRun,
  handleSubmit,
  runLoading,
  submitLoading,
}) => {
  const { examples } = problem || {};

  const [activeTestCase, setActiveTestCase] = useState(0);

  // Check if examples exist and have at least one element
  const hasExamples = examples && examples.length > 0;

  return (
    <div className="p-0.5 pb-0">
      <div className="flex flex-col h-full bg-neutral border bottom-[.5px] border-[#dddddd6e] rounded-lg shadow-2xl overflow-hidden ">
        <div className="flex h-10 items-center bg-base-200 ">
          <div className="relative flex h-full flex-col justify-center cursor-pointer px-5">
            <div className="text-md leading-5 font-medium text-label-1 text-white w-fit border-b-2 border-white pb-1">
              Testcases
            </div>
          </div>
        </div>
        <div className="w-full z-10 px-5 overflow-y-auto">
          <div className="flex mt-2 gap-3">
            {hasExamples &&
              examples.map((example, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center px-3 py-1 rounded-lg text-sm w-fit duration-200 hover:bg-[#39494f] ${
                    activeTestCase === index ? "bg-[#39494f]" : ""
                  }`}
                  onClick={() => setActiveTestCase(index)}
                >
                  Case {index + 1}
                </button>
              ))}
          </div>
          {hasExamples ? (
            <>
              <div className="font-semibold">
                <p className="text-label-1 dark:text-dark-label-1 text-sm font-medium mt-4 text-white">
                  Input:
                </p>
                <div className="w-full cursor-text rounded-lg border px-3 py-[6px] font-menlo bg-[#39494f] border-transparent mt-1 text-white">
                  {examples[activeTestCase]?.inputText}
                </div>
                <p className="text-label-1 dark:text-dark-label-1 text-sm font-medium mt-4 text-white">
                  Output:
                </p>
                <div className="w-full cursor-text rounded-lg border px-3 py-[6px] font-menlo bg-[#39494f] border-transparent mt-1 text-white">
                  {examples[activeTestCase]?.outputText}
                </div>
              </div>
            </>
          ) : (
            <p className="text-center text-white">No examples available.</p>
          )}
        </div>
        <EditorFooter
          handleRun={handleRun}
          handleSubmit={handleSubmit}
          runLoading={runLoading}
          submitLoading={submitLoading}
        />
      </div>
    </div>
  );
};

export default TestCases;
