import { useState } from "react";
import useSWR from "swr";
import Head from "next/head";
import SearchForm from "../components/searchForm";
import Filter from "../components/filter";
import JobCard from "../components/jobCard";
import Pagination from "../components/pagination";
import Spinner from "../components/spinner";

export default function Home() {
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
  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;

  const { jobs } = data;
  const currentItems = jobs.slice(indexOfFirstItem, indexOfLastItem);

  const pages = [];
  for (let i = 1; i <= Math.ceil(jobs.length / ITEMS_PER_PAGE); i++) {
    pages.push(i);
  }

  const pageClick = (e) => {
    setCurrentPage(e.target.id);
  };

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

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jobs Search</title>
        <meta name="description" content="create a job search using an API" />
        <meta name="author" content="Ted Dino" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>

      <SearchForm />

      <div className="w-full flex flex-col xl:flex-row gap-8 justify-center">
        <Filter />

        <div className="flex-1 flex flex-col gap-8">
          <div className="jobs flex flex-col gap-8 w-full">
            {currentItems.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
          <Pagination
            pages={pages}
            currentPage={currentPage}
            prevPage={prevPage}
            nextPage={nextPage}
            maxPageNumber={maxPageNumber}
            minPageNumber={minPageNumber}
            pageClick={pageClick}
          />
        </div>
      </div>
    </>
  );
}
