import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdLock } from "react-icons/md";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";

const TableRow = ({ idx, problem }) => {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });

  const { id, title, order, difficulty, videoId, category } = problem || {};
  const closeYoutubeModal = () => {
    setYoutubePlayer({ isOpen: false, videoId: "" });
  };

  const { userData } = useSelector((state) => state.user);

  const submissionsForCurrentProblem = userData?.solvedProblems?.[id];
  // console.log(submissionsForCurrentProblem[0] + id);

  let difficultyColor;

  if (difficulty === "Easy") {
    difficultyColor = "text-success";
  } else if (problem.difficulty === "Medium") {
    difficultyColor = "text-warning";
  } else {
    difficultyColor = "text-error";
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeYoutubeModal();
    };
    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
  return (
    <>
      <tr className={` ${idx % 2 == 0 && "bg-slate-800"} *:py-3 *:px-4`}>
        <td className="font-medium whitespace-nowrap  text-dark-green-s">
          {/* add this svg if solved */}

          {submissionsForCurrentProblem && (
            <span data-state="closed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
                className="h-5 w-5 text-[#3dbf77] inline-block shrink-0 fill-none stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21.6 12a9.6 9.6 0 01-9.6 9.6 9.6 9.6 0 110-19.2c1.507 0 2.932.347 4.2.965M19.8 6l-8.4 8.4L9 12"
                ></path>
              </svg>
            </span>
          )}
        </td>
        <td className=" ">
          {problem.problemStatement ? (
            <Link
              to={`/problems/${id}`}
              className="hover:text-blue-600 cursor-pointer"
            >
              {order + ". " + title}
            </Link>
          ) : (
            <div className=" flex items-center gap-2  *:hover:scale-100">
              {order + ". " + title} <MdLock className="text-warning" />
              <span className="scale-0 duration-200 text-warning left-10">
                Premium
              </span>
            </div>
          )}
        </td>
        <td className={difficultyColor}>{difficulty}</td>
        <td className="">{category}</td>
        {videoId ? (
          <td className="">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              fontSize="28"
              color=""
              className="cursor-pointer hover:text-red-600"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() =>
                setYoutubePlayer({ isOpen: true, videoId: videoId })
              }
            >
              <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
            </svg>
            {youtubePlayer.isOpen && (
              <div
                className="absolute left-0 top-0 w-[99vw] h-[99vh] m-auto bg-[#3f3f3f62]  flex justify-center items-center z-50 cursor-pointer"
                onClick={() => closeYoutubeModal()}
              >
                <YouTube
                  videoId={youtubePlayer.videoId}
                  opts={{
                    height: "390",
                    width: "640",
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                  className="shadow-2xl rounded-2xl overflow-hidden border"
                />
              </div>
            )}
          </td>
        ) : (
          <td className="">
            <p className="text-gray-400">Coming soon</p>
          </td>
        )}
      </tr>
    </>
  );
};

export default TableRow;
