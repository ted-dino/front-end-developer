import Image from "next/image";
import { formatDistanceToNow, parseISO } from "date-fns";

const JobCard = ({ job }) => {
  const {
    company_logo,
    company_name,
    title,
    job_type,
    candidate_required_location,
    publication_date,
  } = job;

  return (
    <div className="job flex items-center gap-4 min-w-full shadow-md bg-white rounded p-3 cursor-pointer">
      <div className="job__logo">
        <Image
          src={company_logo ? company_logo : "https://fakeimg.pl/90/"}
          alt="company logo"
          width={90}
          height={90}
        />
      </div>
      <div className="job__info grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="flex flex-col justify-between flex-1">
          <span className="text-xs font-bold text-primary">{company_name}</span>
          <span className="md:my-3 text-lg text-primary">{title}</span>
          {job_type !== "" && (
            <span className="py-1.5 px-2 w-max border rounded border-primary text-primary text-xs font-bold">
              Full time
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 sm:gap-4 items-start sm:flex-row sm:items-end justify-start md:justify-end mt-5 md:mt-0">
          {candidate_required_location && (
            <div className="flex items-center center gap-2">
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

              <span className="text-xs text-accent font-medium">
                {candidate_required_location}
              </span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 stroke-accent"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-xs text-accent font-medium">
              {formatDistanceToNow(parseISO(publication_date))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
