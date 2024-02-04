import React from "react";

const Navbar = () => {
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
      navigationPath: "/problemset",
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
      id: 4,
      name: "Interview",
      navigationPath: "/interview",
      arrow: true,
    },
    {
      id: 4,
      name: "Store",
      navigationPath: "/store",
      arrow: true,
    },
    // Add more items as needed
  ];

  return (
    <nav className="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7 bg-neutral">
      <div className="flex w-11/12 md:w-10/12 items-center justify-between mx-auto">
        <a className="h-[22px] mr-14" href="/">
          <img
            src="https://leetclone.vercel.app/logo-full.png"
            alt="Logo"
            className="h-full"
          />
        </a>
        <ul className="relative m-0 flex h-full grow items-center gap-6 self-end p-0">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center hover:scale-105 ${
                item.name == "Problems" && "border-b-[1px] hover:scale-100"
              } ${item.name == "Store" && "text-yellow-600"}`}
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
        <div class="flex items-center space-x-4 flex-1 justify-end">
          <div class="cursor-pointer group relative">
            <img
              class="w-7 h-7 rounded-full"
              src="https://assets.leetcode.com/users/default_avatar.jpg"
              alt="Rounded avatar"
            />
            <div class="absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out">
              <p class="text-sm">bijulia@gmail.com</p>
            </div>
          </div>
          <button
            class="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange"
            fdprocessedid="yfch0p"
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
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
  class="ml-1 h-[14px] w-[14px]"
  aria-hidden="true"
>
  <path
    fill-rule="evenodd"
    d="M4.929 7.913l7.078 7.057 7.064-7.057a1 1 0 111.414 1.414l-7.77 7.764a1 1 0 01-1.415 0L3.515 9.328a1 1 0 011.414-1.414z"
    clip-rule="evenodd"
  ></path>
</svg>; */}
export default Navbar;
