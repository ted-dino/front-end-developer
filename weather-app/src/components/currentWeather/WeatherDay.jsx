import formatString from "../../utils/formatString";
import formatDate from "../../utils/formatDate";

const WeatherDay = ({ time, address }) => {
  return (
    <div className="text-lg font-medium text-text-accent flex gap-4">
      {time && address && (
        <div className="flex flex-col items-center gap-7">
          <div className="flex gap-2">
            <span>Today</span>
            <span>-</span>
            <span>{formatDate(time)}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{formatString(address)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDay;
