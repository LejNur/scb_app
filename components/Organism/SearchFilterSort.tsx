import Filter from "../Molecules/Filter";
interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchFilterSort({ search, setSearch }: SearchProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      Search/Filter/Sort
      <Filter />
      <input type="text" value={search} onChange={(e) => handleSearch(e)} />
    </div>
  );
}
