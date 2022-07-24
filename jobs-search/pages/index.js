import Head from "next/head";
import SearchForm from "../components/searchForm";
import Filter from "../components/filter";
import JobCard from "../components/jobCard";

export default function Home() {
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
      <div className="flex flex-col xl:flex-row gap-8">
        <Filter />
        <div className="jobs flex flex-col gap-8 w-full">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </>
  );
}
