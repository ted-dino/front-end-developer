import { useContext, useState, useEffect } from "react";
import JobContext from "../src/JobContext";

const Filter = () => {
  const { data, setJobs } = useContext(JobContext);
  const [checked, setChecked] = useState(true);
  const [location, setLocation] = useState("Worldwide");

  const onCheck = () => {
    setChecked((prevState) => !prevState);
  };

  useEffect(() => {
    let result = [];
    if (checked) {
      if (location === "other") {
        result = data.jobs.filter(
          (job) =>
            job.job_type === "full_time" &&
            job.candidate_required_location !== "Worldwide" &&
            job.candidate_required_location !== "USA Only"
        );
        setJobs(result);
      } else {
        result = data.jobs.filter(
          (job) =>
            job.job_type === "full_time" &&
            job.candidate_required_location.toLowerCase() ===
              location.toLowerCase()
        );
        setJobs(result);
      }
      setChecked(true);
    } else {
      const result = data.jobs.filter(
        (job) =>
          job.job_type === "" &&
          job.candidate_required_location.toLowerCase() ===
            location.toLowerCase()
      );
      if (location === "other") {
        result = data.jobs.filter(
          (job) =>
            job.job_type === "" &&
            job.candidate_required_location !== "Worldwide" &&
            job.candidate_required_location !== "USA Only"
        );
        setJobs(result);
      } else {
        result = data.jobs.filter(
          (job) =>
            job.job_type === "" &&
            job.candidate_required_location.toLowerCase() ===
              location.toLowerCase()
        );
        setJobs(result);
      }
      setChecked(false);
    }
  }, [checked, location]);

  return (
    <div className="min-w-[380px]">
      <div className="flex items-center gap-3 mb-5">
        <input
          type="checkbox"
          id="fulltime"
          name="fulltime"
          value="full_time"
          className="cursor-pointer w-5 h-5"
          onChange={onCheck}
          checked={checked}
        />
        <label
          htmlFor="fulltime"
          className="cursor-pointer text-primary font-poppins font-medium"
        >
          Full time
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase font-poppins font-bold text-accent">
          Location
        </span>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-3 text-primary font-poppins font-medium">
            <input
              type="radio"
              name="location"
              id="worldwide"
              className="w-5 h-5"
              onClick={(e) => setLocation("Worldwide")}
              defaultChecked
            />
            <label htmlFor="worldwide">Worldwide</label>
          </li>
          <li className="flex items-center gap-3 text-primary font-poppins font-medium">
            <input
              type="radio"
              name="location"
              id="usa-only"
              className="w-5 h-5"
              onClick={(e) => setLocation("USA Only")}
            />
            <label htmlFor="usa-only">USA Only</label>
          </li>
          <li className="flex items-center gap-3 text-primary font-poppins font-medium">
            <input
              type="radio"
              name="location"
              id="other"
              className="w-5 h-5"
              onClick={(e) => setLocation("other")}
            />
            <label htmlFor="other">Other Location</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
