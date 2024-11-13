"use client";

import { useState } from "react";
import ArrowUp from "../icons/ArrowUp";
import ArrowDown from "../icons/ArrowDown";

interface FilterProps {
  sortField: "firstName" | "lastName" | "email";
  sortOrder: "asc" | "desc";
  handleSort: (field: "firstName" | "lastName" | "email") => void;
}

export default function Filter({
  sortField,
  sortOrder,
  handleSort,
}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // bg-red-200 w-full md:w-2/4 mr-1 md:mr-5 flex-1
  return (
    <div className=" w-1/5">
      <div className="dropdown block relative ">
        <button
          className=" bg-gray-300 text-gray-700 font-semibold py-2 px-4 inline-flex items-center justify-center w-full"
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
          className={`dropdown-menu absolute text-gray-700 pt-1 w-full ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <button
              name="firstName"
              className=" bg-gray-200 hover:bg-gray-400 py-2 justify-center align-middle gap-4 whitespace-no-wrap text-sm w-full flex "
              onClick={() => handleSort("firstName")}
            >
              <span>First Name</span>
              {sortField === "firstName" &&
                (sortOrder === "desc" ? <ArrowDown /> : <ArrowUp />)}
            </button>
          </li>

          <li>
            <button
              name="lastName"
              className=" bg-gray-200 hover:bg-gray-400 py-2 justify-center align-middle gap-4 whitespace-no-wrap text-sm w-full flex "
              onClick={() => handleSort("lastName")}
            >
              <span>Last name</span>
              {sortField === "lastName" &&
                (sortOrder === "desc" ? <ArrowDown /> : <ArrowUp />)}
            </button>
          </li>

          <li className="w-full">
            <button
              name="email"
              className=" bg-gray-200 hover:bg-gray-400 py-2 justify-center align-middle items-center gap-4 whitespace-no-wrap text-sm w-full flex"
              onClick={() => handleSort("email")}
            >
              <span>Email</span>

              {sortField === "email" &&
                (sortOrder === "desc" ? <ArrowDown /> : <ArrowUp />)}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
