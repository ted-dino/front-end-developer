import React from "react";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div className="px-5 h-[138px] bg-searchBG flex items-center justify-center rounded-lg mt-7 mb-5 sm:mb-10">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center max-w-[790px] w-full rounded-lg overflow-hidden"
      >
        <div className="bg-white py-5 pl-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 stroke-accent"
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
        <input
          className="w-full text-xs text-[#282538] py-5 pl-2 focus-visible:outline-none placeholder:text-accent"
          type="text"
          name="query"
          id="query"
          placeholder="Title, company or expertise"
        />
        <div className="bg-white py-1 pr-1">
          <button
            type="submit"
            className="bg-secondary py-3 px-12 rounded-lg text-white font-roboto font-medium"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
