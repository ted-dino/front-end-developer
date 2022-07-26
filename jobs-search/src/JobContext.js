import { createContext, useState } from "react";
import useSWR from "swr";

export const JobContext = createContext();
export function JobProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(5);
  const [minPageNumber, setMinPageNumber] = useState(0);

  let pageNumberLimit = 5;
  const ITEMS_PER_PAGE = 5;
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const fetcher = async (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://remotive.com/api/remote-jobs?limit=100",
    fetcher
  );

  const values = {
    data,
    error,
    currentPage,
    setCurrentPage,
    maxPageNumber,
    setMaxPageNumber,
    minPageNumber,
    setMinPageNumber,
    pageNumberLimit,
    ITEMS_PER_PAGE,
    indexOfLastItem,
    indexOfFirstItem,
  };
  return <JobContext.Provider value={values}>{children}</JobContext.Provider>;
}

export default JobContext;
