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

  return (
    <div className="w-2/6 md:w-1/5 ">
      <div className="dropdown block relative">
        <button
          className=" bg-softSage text-chartreuse font-semibold py-2 px-4 inline-flex items-center justify-center w-full"
          onClick={toggleDropdown}
        >
          <span className="mr-1">Sort</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul
          className={`dropdown-menu absolute text-smokyBlack tracking-wider pt-0.5 w-full  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <button
              name="firstName"
              className=" bg-softSage hover:bg-chartreuse active:bg-chartreuse transition-all duration-800 ease-in-out py-4 px-2  justify-center items-center gap-1 whitespace-nowrap text-sm w-full flex"
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
              className=" bg-softSage hover:bg-chartreuse active:bg-chartreuse transition-all duration-800 ease-in-out py-4 px-2  justify-center items-center gap-1 whitespace-nowrap text-sm w-full flex"
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
              className=" bg-softSage hover:bg-chartreuse active:bg-chartreuse transition-all duration-800 ease-in-out py-4 px-2  justify-center items-center gap-1 whitespace-nowrap text-sm w-full flex"
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
