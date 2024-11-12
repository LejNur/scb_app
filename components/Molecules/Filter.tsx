"use client";

import { useState } from "react";

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
          <button
            name="firstName"
            className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            onClick={() => handleSort("firstName")}
          >
            Sort by First Name (
            {sortField === "firstName"
              ? sortOrder === "asc"
                ? "Ascending"
                : "Descending"
              : "None"}
            ) First name
          </button>
          <button
            name="lastName"
            className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            onClick={() => handleSort("lastName")}
          >
            Sort by Last Name (
            {sortField === "lastName"
              ? sortOrder === "asc"
                ? "Ascending"
                : "Descending"
              : "None"}
            ) Last name
          </button>
          <button
            name="email"
            className=" bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            onClick={() => handleSort("email")}
          >
            Sort by email(
            {sortField === "email"
              ? sortOrder === "asc"
                ? "Ascending"
                : "Descending"
              : "None"}
            ) Email
          </button>
        </ul>
      </div>
    </div>
  );
}
