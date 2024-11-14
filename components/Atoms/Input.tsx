"use client";

import SearchIcon from "../icons/SearchIcon";

interface InputProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ type = "text", value, onChange }: InputProps) {
  return (
    <div className="relative flex-1 bg-smokyBlack">
      <SearchIcon />
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder="Search"
        className="pl-10 py-2 border border-chartreuse w-full focus:outline-none bg-smokyBlack text-slate-100"
      />
    </div>
  );
}
