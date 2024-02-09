import React, {  useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { SlMenu } from "react-icons/sl";
import { navItems } from "./navItemsData";
import { useSelector } from "react-redux";
import ProfileCard from "../UserProfile/ProfileCard";


const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const { pathname } = useLocation();
  const { userData } = useSelector((state) => state.user);

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  }

  return (
    <nav className="relative flex h-12 w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7 bg-neutral">
      <div className="flex w-11/12 md:w-10/12 items-center justify-between mx-auto">
        <Link to="/" className="h-[22px] mr-14">
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
                <FaChevronLeft />
              </div>
              <span
                className="flex items-center gap-2 font-medium max-w-[170px] truncate text-dark-gray-8 cursor-pointer"
                href="/"
              >
                <div className="">
                  <SlMenu />
                </div>
                <p>Problem List</p>
              </span>
              <div className="flex items-center justify-center rounded   h-8 w-8 cursor-pointer">
                <FaChevronRight />
              </div>
            </div>
          </Link>
        ) : (
          <ul className="relative m-0 flex h-full grow items-center gap-6 self-end p-0">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`flex items-center gap-1 hover:scale-105 ${
                  item.name === "Problems" && "border-b-[1px] hover:scale-100"
                } ${item.name === "Store" && "text-yellow-600"}`}
              >
                <Link to={item.navigationPath} className="w-fit">
                  {item.name}
                </Link>
                {/* Optionally render an arrow icon if item.arrow is true */}
                {item.arrow && (
                  <FaAngleDown className="self-center  mt-[4px]" />
                )}
              </li>
            ))}
          </ul>
        )}
        {userData?.email ? (
          <div className="relative flex items-center space-x-4  justify-end">
            <div
              className="cursor-pointer group relative"
              onClick={handleShowProfile}
            >
              <img
                className="userIcon w-7 h-7 rounded-full"
                src="https://assets.leetcode.com/users/default_avatar.jpg"
                alt="Rounded avatar"
              />
              <div className="absolute top-5 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out">
                <p className="text-sm">Profile</p>
              </div>
            </div>
            {showProfile  && (
              
                <ProfileCard userData={userData}
               
                />
              
            )}

            {/* <button
              onClick={handleLogOut}
              className="flex items-center justify-center hover:scale-110 duration-200"
            >
              <FiLogOut />
            </button> */}
          </div>
        ) : (
          <div className="flex items-center space-x-4  justify-end">
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
