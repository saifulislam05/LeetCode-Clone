import React from "react";
import DescriptionActions from "./DescriptionActions";
import ExtraInfoNav from "./ExtraInfoNav";

const Description = () => {
  return (
    <div className="w-[inherit] h-full p-0.5">
      <div className="h-full  border-[.5px] m-0 border-[#dddddd6e] rounded-lg shadow-2xl overflow-hidden ">
        <div className="flex flex-col h-full items-center pt-0.5  text-white ">
          <div className="bg-base-200 w-full pt-2">
            <div className=" rounded-t-xl bg-neutral w-fit px-5 py-2 text-sm cursor-pointer select-none">
              Description
            </div>
          </div>

          <div className="flex py-2 overflow-y-scroll bg-neutral ">
            <div className="h-fit">
              <div className="px-5">
                <div className="w-full overflow-y-auto ">
                  <div className="flex space-x-4">
                    <div className="flex-1 mr-2 text-xl text-white font-medium">
                      1. Two Sum
                    </div>
                  </div>
                  <ExtraInfoNav />

                  <div className="text-white text-sm my-4">
                    <div className="*:leading-5">
                      <p className="mt-3">
                        Given an array of integers <code>nums</code> and an
                        integer <code>target</code>, return{" "}
                        <em>
                          indices of the two numbers such that they add up to
                        </em>{" "}
                        <code>target</code>.
                      </p>
                      <p className="mt-3">
                        You may assume that each input would have{" "}
                        <strong>exactly one solution</strong>, and you may not
                        use the same element twice.
                      </p>
                      <p className="mt-3">
                        You can return the answer in any order.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div>
                      <p className="font-medium text-white ">Example 1: </p>
                      <div className="io-card">
                        <pre>
                          <strong className="dark:text-white">Input:</strong>{" "}
                          nums = [2,7,11,15], target = 9 <br />
                          <strong>Output:</strong> [0,1] <br />
                          <strong>Explanation:</strong> Because nums[0] +
                          nums[1] == 9, we return [0, 1].
                        </pre>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-white ">Example 2: </p>
                      <div className="io-card">
                        <pre>
                          <strong className="dark:text-white">Input:</strong>{" "}
                          nums = [3,2,4], target = 6 <br />
                          <strong>Output:</strong> [1,2] <br />
                          <strong>Explanation:</strong> Because nums[1] +
                          nums[2] == 6, we return [1, 2].
                        </pre>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-white ">Example 3: </p>
                      <div className="io-card">
                        <pre>
                          <strong className="dark:text-white">Input:</strong>{" "}
                          nums = [3,3], target = 6 <br />
                          <strong>Output:</strong> [0,1] <br />
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className="my-5">
                    <div className="text-white text-sm font-medium">
                      Constraints:
                    </div>
                    <ul className="text-white ml-5 list-disc">
                      <li className="mt-2">
                        <code>
                          2 &lt;= nums.length &lt;= 10<sup>4</sup>
                        </code>
                      </li>
                      <li className="mt-2">
                        <code>
                          -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
                        </code>
                      </li>
                      <li className="mt-2">
                        <code>
                          -10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup>
                        </code>
                      </li>
                      <li className="mt-2 text-sm">
                        <strong>Only one valid answer exists.</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="">
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
