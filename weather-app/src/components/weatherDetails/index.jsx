import { isTomorrow, parseISO } from "date-fns";
import { useState, useEffect } from "react";
import TempButton from "../Button";
import useStore from "../../hooks/weatherHook";
import formatDate from "../../utils/formatDate";
import WeatherIcon from "../WeatherIcon";
import WeatherTemp from "../WeatherTemp";
import Highlights from "../weatherHighlights/index";
import roundValue from "../../utils/roundValue";
import Footer from "../Footer";
import Spinner from "../Spinner";

const Index = () => {
  const { locationWeather, changeUnit, isLoading, isError } = useStore();
  const slicedData = locationWeather?.days?.slice(1, 6);
  const [isActive, setIsActive] = useState(false);

  const activeClass = "bg-text-primary text-btn-secondary font-bold";
  const inactiveClass = "bg-btn-secondary text-text-primary";

  return (
    <div className="px-6 xl:px-[150px] pt-14 flex flex-col">
      <section
        id="weather-details"
        className="flex-1 flex flex-col items-center"
      >
        <div className="mb-5 flex gap-3 justify-end w-[218px] sm:w-[436px] lg:w-[436px] md:w-[683px] xl:w-[683px]">
          <TempButton
            className={`w-10 h-10 rounded-full p-2.5 font-bold ${
              isActive ? activeClass : inactiveClass
            }`}
            onClick={() => {
              changeUnit("metric");
              setIsActive(false);
            }}
          >
            °C
          </TempButton>
          <TempButton
            className={`w-10 h-10 rounded-full p-2.5 font-bold ${
              isActive ? inactiveClass : activeClass
            }`}
            onClick={() => {
              changeUnit("us");
              setIsActive(true);
            }}
          >
            °F
          </TempButton>
        </div>

        {slicedData?.length > 0 && !isLoading && !isError ? (
          <div className="flex flex-col h-full justify-evenly">
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3">
              {slicedData.map((data, index) => (
                <div
                  key={index}
                  className="py-5 px-2 lg:p-5 bg-color-secondary w-full h-44 flex flex-col items-center justify-between"
                >
                  <span className="font-medium">
                    {isTomorrow(parseISO(data.datetime))
                      ? "Tomorrow"
                      : formatDate(data.datetimeEpoch)}
                  </span>
                  <WeatherIcon className="w-14 h-16" weatherIcon={data.icon} />
                  <div className="flex justify-between w-full">
                    <WeatherTemp temp={roundValue(data.temp)} />
                    <WeatherTemp temp={roundValue(data.tempmax)} />
                  </div>
                </div>
              ))}
            </div>
            <Highlights />
          </div>
        ) : (
          !isError && <Spinner />
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Index;
