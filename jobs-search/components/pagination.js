import { useContext, useState } from "react";
import JobContext from "../src/JobsContext";

const Pagination = () => {
  const {
    data,
    currentPage,
    setCurrentPage,
    maxPageNumber,
    setMaxPageNumber,
    setMinPageNumber,
    minPageNumber,
    pageNumberLimit,
    ITEMS_PER_PAGE,
  } = useContext(JobContext);

  const { jobs } = data;
  const pages = [];
  for (let i = 1; i <= Math.ceil(jobs.length / ITEMS_PER_PAGE); i++) {
    pages.push(i);
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumber) {
      setMaxPageNumber(maxPageNumber + pageNumberLimit);
      setMinPageNumber(minPageNumber + pageNumberLimit);
    }
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumber(maxPageNumber - pageNumberLimit);
      setMinPageNumber(minPageNumber - pageNumberLimit);
    }
  };

  const pageClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  return (
    <div className="pages self-end flex items-center gap-3">
      {currentPage !== pages[0] && (
        <button className="previousPage cursor-pointer" onClick={prevPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-accent"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      {pages.map((number) => {
        if (number < maxPageNumber + 1 && number > minPageNumber) {
          return (
            <span
              key={number}
              onClick={pageClick}
              id={number}
              className={`${
                currentPage == number
                  ? "bg-primary text-white hover:text-white"
                  : "text-accent hover:text-primary"
              } text-xs border py-2.5 px-4 rounded hover:border-primary  cursor-pointer`}
            >
              {number}
            </span>
          );
        } else {
          return null;
        }
      })}
      {currentPage !== pages[pages.length - 1] && (
        <button className="nextPage cursor-pointer" onClick={nextPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;
