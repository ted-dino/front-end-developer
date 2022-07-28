import { useContext } from "react";
import Head from "next/head";
import SearchForm from "../components/searchForm";
import Filter from "../components/filter";
import JobCard from "../components/jobCard";
import Pagination from "../components/pagination";
import Spinner from "../components/spinner";
import JobContext from "../src/JobContext";

export default function Home() {
  const { data, jobs, error, indexOfLastItem, indexOfFirstItem } =
    useContext(JobContext);

  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;

  const currentItems = jobs
    ? jobs.slice(indexOfFirstItem, indexOfLastItem)
    : data.jobs.slice(indexOfFirstItem, indexOfLastItem);

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

      <div className="flex-1 w-full flex flex-col xl:flex-row gap-8 justify-center">
        <Filter />

        <div className="flex-1 flex flex-col gap-8">
          <div className="jobs flex flex-col gap-8 w-full">
            {currentItems && currentItems.length > 0
              ? currentItems.map((job, index) => (
                  <a key={index} href={`/job/${job.id}`}>
                    <JobCard job={job} />
                  </a>
                ))
              : "No data found!"}
          </div>
          {currentItems && currentItems.length > 0 && <Pagination />}
        </div>
      </div>
    </>
  );
}
