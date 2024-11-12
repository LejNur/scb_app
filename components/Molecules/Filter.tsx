"use client";
import { useState } from "react";

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="dropdown inline-block relative">
        <button
          className="bg-gray-300 text-gray-700 font-semibold py-2 px-4  inline-flex items-center"
          onClick={toggleDropdown}
        >
          <span className="mr-1">Filter</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul
          className={`dropdown-menu absolute text-gray-700 pt-1 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            First name
          </li>
          <li className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            Last name
          </li>
          <li className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
            Email
          </li>
        </ul>
      </div>
    </div>
  );
}
