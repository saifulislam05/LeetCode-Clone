import React from "react";
import { useLocation,  } from "react-router-dom";
 const navItems = [
    {
      id: 1,
      name: "Explore",
      navigationPath: "/explore",
      arrow: false,
    },
    {
      id: 2,
      name: "Problems",
      navigationPath: "/",
      arrow: false,
    },
    {
      id: 3,
      name: "Contest",
      navigationPath: "/contest",
      arrow: false,
    },
    {
      id: 4,
      name: "Discuss",
      navigationPath: "/discuss",
      arrow: false,
    },
    {
      id: 5,
      name: "Interview",
      navigationPath: "/interview",
      arrow: true,
    },
    {
      id: 6,
      name: "Store",
      navigationPath: "/store",
      arrow: true,
    },
    // Add more items as needed
  ];
const Navbar = () => {
  const {pathname} = useLocation();
  console.log(pathname);

  return (
    <nav className="relative flex h-12 w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7 bg-neutral">
      <div className="flex w-11/12 md:w-10/12 items-center justify-between mx-auto">
        <a className="h-[22px] mr-14" href="/">
          <img
            src="https://leetclone.vercel.app/logo-full.png"
            alt="Logo"
            className="h-full"
          />
        </a>
        {pathname.includes("/problems/") ? (
          <div className="flex items-center gap-4  justify-center w-fit mx-auto">
            <div className="flex items-center justify-center rounded   h-8 w-8 cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
              </svg>
            </div>
            <a
              className="flex items-center gap-2 font-medium max-w-[170px] truncate text-dark-gray-8 cursor-pointer"
              href="/"
            >
              <div className="">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1.3em"
                  width="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  ></path>
                </svg>
              </div>
              <p>Problem List</p>
            </a>
            <div className="flex items-center justify-center rounded   h-8 w-8 cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </div>
          </div>
        ) : (
          <ul className="relative m-0 flex h-full grow items-center gap-6 self-end p-0">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`flex items-center hover:scale-105 ${
                  item.name === "Problems" && "border-b-[1px] hover:scale-100"
                } ${item.name === "Store" && "text-yellow-600"}`}
              >
                <a className="w-fit" href={item.navigationPath}>
                  {item.name}
                </a>
                {/* Optionally render an arrow icon if item.arrow is true */}
                {item.arrow && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    className="ml-1 h-[14px] w-[14px]"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center space-x-4  justify-end">
          <div className="cursor-pointer group relative">
            <img
              className="w-7 h-7 rounded-full"
              src="https://assets.leetcode.com/users/default_avatar.jpg"
              alt="Rounded avatar"
            />
            <div className="absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out">
              <p className="text-sm">bijulia@gmail.com</p>
            </div>
          </div>
          <button
            className=" py-1.5 px-3 cursor-pointer rounded text-brand-orange"
            fdprocessedid="yfch0p"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

{/* <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="1em"
  height="1em"
  fill="currentColor"
  className="ml-1 h-[14px] w-[14px]"
  aria-hidden="true"
>
  <path
    fillRule="evenodd"
    d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
    clipRule="evenodd"
  ></path>
</svg>; */}
export default Navbar;
