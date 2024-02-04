import React from "react";

const Navbar = () => {
  return (
    <nav class="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7 bg-neutral">
      <div class="flex w-full items-center justify-between max-w-[1200px] mx-auto ">
        <a class="h-[22px] mr-14" href="/">
          <img
            src="https://leetclone.vercel.app/logo-full.png"
            alt="Logo"
            class="h-full"
          />
        </a>
        <ul class="relative m-0 flex h-full grow items-center gap-6 self-end p-0">
          <li class="relative flex h-full items-center text-sm ">
            <a
              class="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"
              href="/explore/"
            >
              Explore
            </a>
          </li>
          <li class="relative flex h-full items-center text-sm  nav-li-after border-text-primary dark:border-text-primary">
            <a
              class="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary font-medium text-text-primary dark:text-text-primary"
              href="/problemset"
            >
              Problems
            </a>
          </li>
          <li class="relative flex h-full items-center text-sm ">
            <a
              class="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"
              href="/contest"
            >
              Contest
            </a>
          </li>
          <li class="relative flex h-full items-center text-sm ">
            <a
              class="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary"
              href="/discuss/"
            >
              Discuss
            </a>
          </li>
          <li class="relative flex h-full items-center text-sm ">
            <div class="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary">
              <span class="flex items-center focus:outline-none">
                <button
                  class="contents"
                  id="headlessui-menu-button-:r0:"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  Interview{" "}
                  <svg
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
                  </svg>
                </button>
              </span>
            </div>
          </li>
          <li class="relative flex h-full items-center text-sm ">
            <div class="relative whitespace-nowrap hover:text-text-primary dark:hover:text-text-primary flex items-center text-base leading-[22px] cursor-pointer hover:text-text-primary dark:hover:text-text-primary text-text-secondary dark:text-text-secondary">
              <span class="flex items-center focus:outline-none !text-brand-orange border-brand-orange">
                <button
                  class="contents"
                  id="headlessui-menu-button-:r1:"
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  Store{" "}
                  <svg
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
                  </svg>
                </button>
              </span>
            </div>
          </li>
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

export default Navbar;
