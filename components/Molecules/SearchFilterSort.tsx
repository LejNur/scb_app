"use client";

import Filter from "./Filter";
import Input from "../Atoms/Input";

interface SearchFilterSortProps {
  search: string;
  setSearch: (value: string) => void;
  sortField: "firstName" | "lastName" | "email";
  sortOrder: "asc" | "desc";
  handleSort: (field: "firstName" | "lastName" | "email") => void;
}

export default function SearchFilterSort({
  search,
  setSearch,
  sortField,
  sortOrder,
  handleSort,
}: SearchFilterSortProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Input value={search} onChange={handleSearch} />
      <Filter
        sortField={sortField}
        sortOrder={sortOrder}
        handleSort={handleSort}
      />
    </div>
  );
}
