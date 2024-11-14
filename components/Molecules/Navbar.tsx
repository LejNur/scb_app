"use client";
import Link from "next/link";
import PlusIcon from "../icons/PlusIcon";
import HeartIcon from "../icons/HeartIcon";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-smokyBlack w-full py-6 font-Lato ">
      <div className=" flex justify-between align-baseline items-center mx-4 md:mx-8 lg:mx-10">
        <h1 className="text-3xl text-chartreuseDarker font-thin tracking-wider">
          ContactsBook
        </h1>
        <Link
          className="text-smokyBlack font-Lato font-semibold bg-chartreuse px-4 py-1 flex gap-1 justify-baseline align-baseline"
          href={"/addContact"}
        >
          <PlusIcon />
          <span>ADD</span>
        </Link>
      </div>
      <div className="text-softWhite text-lg md:text-xl font-thin tracking-widest flex justify-center mt-16 mb-2 justify-items-center align-baseline gap-8">
        <Link
          className={`font-extralight active:scale-95 transition transform ${
            pathname === "/" ? "font-medium text-chartreuse" : ""
          }`}
          href={"/"}
        >
          All Contacts
        </Link>
        <Link
          className={` flex gap-1 active:scale-95 transition transform ${
            pathname === "/favorites" ? " font-medium text-chartreuse" : ""
          }`}
          href={"/favorites"}
        >
          Favorites
          <HeartIcon
            className="size-6"
            fill={` ${pathname === "/favorites" ? "chartreuse" : "none"}`}
            stroke="chartreuse"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
