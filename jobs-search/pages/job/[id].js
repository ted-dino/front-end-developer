import { useRouter } from "next/router";
import { useContext } from "react";
import { formatDistanceToNow, parseISO } from "date-fns";
import Spinner from "../../components/spinner";
import JobContext from "../../src/JobContext";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const { data, error } = useContext(JobContext);
  const router = useRouter();

  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;

  const { jobs } = data;
  const selectedJob = jobs.filter(
    (job) => Number(job.id) == Number(router.query.id)
  );
  const tabTitle = selectedJob[0]?.title
    ? `${selectedJob[0].title} - Job Search`
    : "Job Search";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{tabTitle}</title>
        <meta
          name="description"
          content="data is from https://github.com/remotive-com/remote-jobs-api"
        />
        <meta name="author" content="Ted Dino" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>
      {data && selectedJob.length > 0 && (
        <div className="flex self-start flex-col xl:flex-row flex-1 gap-16 pt-7 ">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <a className="flex items-center gap-3 text-secondary cursor-pointer ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                <span className="font-medium text-sm">Back to search</span>
              </a>
            </Link>
            <div>
              <span className="uppercase font-poppins font-bold text-accent">
                How to Apply
              </span>
              <p className="text-primary">
                To view the original post, click the{" "}
                <Link href={`${selectedJob[0].url}`}>
                  <a className="underline">this</a>
                </Link>
              </p>
            </div>
          </div>
          <div className="job_info max-w-[890px]">
            <div>
              <div className="flex gap-5">
                <h1 className="font-bold text-primary text-2xl">
                  {selectedJob[0].title}
                </h1>
                {selectedJob[0].full_time !== "" && (
                  <span className="py-1.5 px-2 w-max border rounded border-primary text-primary text-xs font-bold">
                    Full time
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 stroke-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {selectedJob[0].publication_date && (
                  <span className="text-xs text-accent font-medium">
                    {formatDistanceToNow(
                      parseISO(selectedJob[0].publication_date)
                    )}{" "}
                    ago
                  </span>
                )}
              </div>
            </div>
            <div className="company_info flex my-5 gap-2">
              <Image
                src={selectedJob[0].company_logo_url}
                alt="company logo"
                width={42}
                height={42}
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-primary">
                  {selectedJob[0].company_name}
                </span>
                <span className="flex items-center text-accent text-xs gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 stroke-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {selectedJob[0].candidate_required_location}
                </span>
              </div>
            </div>
            <div
              className="job_description text-primary"
              dangerouslySetInnerHTML={{ __html: selectedJob[0].description }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
