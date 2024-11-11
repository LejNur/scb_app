"use client";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-700 w-full">
      <Link className="text-white pr-3" href={"/"}>
        All Contacts
      </Link>
      <Link className="text-white pr-3" href={"/favorites"}>
        Favorites
      </Link>
      <Link className="text-white pr-3" href={"/addContact"}>
        Add new contact
      </Link>
    </nav>
  );
}

export default Navbar;
