import React from "react";
import DescriptionActions from "./DescriptionActions";
import ExtraInfoNav from "./ExtraInfoNav";

const Description = ({ problem }) => {
  const { data, difficulty } = problem;
  const { title, problemStatement, examples, constraints } = data;

  return (
    <div className=" h-full p-0.5">
      <div className="h-full min-w-full border-[.5px] m-0 border-[#dddddd6e] rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col min-w-full h-full items-center pt-0.5 text-white">
          <div className="bg-base-200 w-full pt-2">
            <div className="rounded-t-xl bg-neutral w-fit px-5 py-2 text-sm cursor-pointer select-none">
              Description
            </div>
          </div>
          <div className="flex py-2 min-w-full overflow-y-scroll bg-neutral">
            <div className="min-w-full h-fit">
              <div className="px-5">
                <div className="overflow-y-auto">
                  <div className="flex space-x-4">
                    <div className="flex-1 mr-2 text-xl text-white font-medium">
                      {title}
                    </div>
                  </div>
                  <ExtraInfoNav difficulty={difficulty} />
                  <div className="text-white text-sm my-4">
                    <div className="*:leading-5">
                      <div
                        dangerouslySetInnerHTML={{ __html: problemStatement }}
                      />
                     
                    </div>
                  </div>
                  <div className="mt-4 w-full">
                    {examples?.map((example, index) => {
                      const { explanation, inputText, outputText } = example;
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
                                  <strong>Explanation:</strong> {explanation}
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
                      <div dangerouslySetInnerHTML={{ __html: constraints }} />
                    </ul>
                  </div>
                  <div>
                    <DescriptionActions />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
