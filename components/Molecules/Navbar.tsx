"use client";
import Link from "next/link";
import PlusIcon from "../icons/PlusIcon";
import HeartIcon from "../icons/HeartIcon";

function Navbar() {
  return (
    <nav className="bg-slate-700 w-full py-6">
      <div className="text-white flex justify-between align-baseline items-center mx-4 md:mx-8 lg:mx-10">
        <h1 className="text-3xl">ContactsBook</h1>
        <Link
          className="text-blue-500 bg-slate-200 rounded-md px-2 flex gap-1 justify-center align-middle items-center"
          href={"/addContact"}
        >
          <PlusIcon />
          ADD
        </Link>
      </div>
      <div className="flex justify-center mt-8 mb-2 justify-items-center align-baseline gap-6">
        <Link className="text-white pr-3" href={"/"}>
          All Contacts
        </Link>
        <Link className="text-white pr-3 flex gap-1" href={"/favorites"}>
          Favorites
          <HeartIcon className="size-6" fill="none" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
