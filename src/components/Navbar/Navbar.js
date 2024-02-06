import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { navItems } from "./navItemsData";
import {useSelector,useDispatch} from "react-redux"
import { logOut } from "../../redux/features/userSlice";


const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user) ;
  

const handleLogOut = () => {
  dispatch(logOut())
}
  return (
    <nav className="relative flex h-12 w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7 bg-neutral">
      <div className="flex w-11/12 md:w-10/12 items-center justify-between mx-auto">
        <Link to="/" className="h-[22px] mr-14" >
          <img
            src="https://leetclone.vercel.app/logo-full.png"
            alt="Logo"
            className="h-full"
          />
        </Link>
        {pathname.includes("/problems/") ? (
          <Link to="/">
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
          </Link>
        ) : (
          <ul className="relative m-0 flex h-full grow items-center gap-6 self-end p-0">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`flex items-center hover:scale-105 ${
                  item.name === "Problems" && "border-b-[1px] hover:scale-100"
                } ${item.name === "Store" && "text-yellow-600"}`}
              >
                <Link to={item.navigationPath} className="w-fit" >
                  {item.name}
                </Link>
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
{user?.email ? (<div className="flex items-center space-x-4  justify-end">
          <div className="cursor-pointer group relative">
            <img
              className="w-7 h-7 rounded-full"
              src="https://assets.leetcode.com/users/default_avatar.jpg"
              alt="Rounded avatar"
            />
            <div className="absolute top-5 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out">
              <p className="text-sm">{user?.email}</p>
            </div>
          </div>

          <button onClick={handleLogOut} className="flex items-center justify-center hover:scale-110 duration-200">
            <FiLogOut />
          </button>
        </div>):(<div className="flex items-center space-x-4  justify-end">
          <div className="text-sm flex gap-2 items-center font-semibold ">
            <Link to="/signup" className="hover:text-white">
              Register
            </Link>{" "}
            <span className="font-normal">or</span>{" "}
            <Link to="/signin" className="hover:text-white">
              Sign in
            </Link>
          </div>
        </div>
        )}
        
      </div>
    </nav>
  );
};

{
  /* <svg
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
</svg>; */
}
export default Navbar;
