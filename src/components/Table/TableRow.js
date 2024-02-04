import React from 'react'

const TableRow = () => {
  return (
    <tr class="bg-slate-800 *:py-3 *:px-4">
      <td class="font-medium whitespace-nowrap text-dark-green-s">
        <span data-state="closed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill="currentColor"
            class="h-5 w-5 text-[#3dbf77] inline-block shrink-0 fill-none stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21.6 12a9.6 9.6 0 01-9.6 9.6 9.6 9.6 0 110-19.2c1.507 0 2.932.347 4.2.965M19.8 6l-8.4 8.4L9 12"
            ></path>
          </svg>
        </span>
      </td>
      <td class=" ">
        <a
          class="hover:text-blue-600 cursor-pointer"
          href="/problems/reverse-linked-list"
        >
          2. Reverse Linked List
        </a>
      </td>
      <td class={`text-error`}>Hard</td>
      <td class="">Linked List</td>
      <td class="">
        <p class="text-gray-400">Coming soon</p>
      </td>
    </tr>
    //   <tr class="">
    //       <th class="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s"></th>
    //       <td class="px-6 py-4 ">
    //         <a
    //           class="hover:text-blue-600 cursor-pointer"
    //           href="/problems/two-sum"
    //         >
    //           1. Two Sum
    //         </a>
    //       </td>
    //       <td class="px-6 py-4 text-dark-green-s ">Easy</td>
    //       <td class="px-6 py-4">Array</td>
    //       <td class="px-6 py-4">
    //         <svg
    //           stroke="currentColor"
    //           fill="currentColor"
    //           stroke-width="0"
    //           viewBox="0 0 1024 1024"
    //           font-size="28"
    //           color=""
    //           class="cursor-pointer hover:text-red-600"
    //           height="1em"
    //           width="1em"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
    //         </svg>
    //       </td>
    //     </tr>
  );
}

export default TableRow