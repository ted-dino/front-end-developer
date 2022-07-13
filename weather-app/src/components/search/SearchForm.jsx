import SearchList from "./SearchList";
import useStore from "../../hooks/WeatherHook";
import { useState } from "react";

const SearchForm = () => {
  const { addToSearchList, searchList } = useStore();
  const [query, setQuery] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const queryExists = searchList.some(
      (el) => el.query.toLowerCase() === query.toLowerCase()
    );
    if (!queryExists && query.trim().length !== 0) {
      addToSearchList(query);
    }
    setQuery("");
  };

  return (
    <div className="flex flex-col items-center gap-10 bg-color-secondary w-full md:max-w-md min-h-screen absolute top-0 pt-5 px-3 lg:px-12">
      <div className="self-end cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <form className="relative flex gap-3">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="search location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-[268px] pl-8 lg:pl-12 bg-transparent border border-text-primary focus-visible:outline-none"
        />
        <button
          type="submit"
          className="bg-btn-accent py-3.5 px-5"
          onClick={handleClick}
        >
          Search
        </button>
        <div className="absolute inset-y-0 left-0 pl-2 lg:pl-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-btn-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </form>
      <SearchList />
    </div>
  );
};

export default SearchForm;
