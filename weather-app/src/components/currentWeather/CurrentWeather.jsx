const CurrentWeather = () => {
  return (
    <section className="flex flex-col items-center gap-10 bg-color-secondary w-full md:max-w-md min-h-screen pt-5 px-3 lg:px-12">
      <div className="flex items-center justify-between w-full">
        <button className="py-2.5 px-5 bg-btn-primary">
          Search for places
        </button>
        <button className="p-2.5 rounded-full bg-btn-primary">
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CurrentWeather;
