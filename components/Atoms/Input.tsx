"use client";

import SearchIcon from "../icons/SearchIcon";

interface InputProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ type = "text", value, onChange }: InputProps) {
  return (
    <div className="relative flex-1">
      <SearchIcon />
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder="Search"
        className="pl-10 py-2 border w-full  focus:outline-none"
      />
    </div>
  );
}
