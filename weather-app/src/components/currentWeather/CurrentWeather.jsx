import sliderHook from "../../hooks/sliderHook";
import useStore from "../../hooks/weatherHook";
import WeatherIcon from "../WeatherIcon";
import { useEffect } from "react";
import WeatherTemp from "../WeatherTemp";
import WeatherCondition from "./WeatherCondition";
import WeatherDay from "./WeatherDay";
import Button from "../Button";
import Spinner from "../Spinner";

const CurrentWeather = () => {
  const { locationWeather, fetchData, isLoading, unitGroup } = useStore();
  const { openSlider } = sliderHook();

  useEffect(() => {
    fetchData("Sorsogon");
  }, [fetchData, unitGroup]);

  return (
    <section className="current-weather flex flex-col justify-around items-center gap-5 bg-color-secondary min-h-screen pt-5 px-3 lg:px-12">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex items-center justify-between w-full">
            <Button
              className={"py-2.5 px-5 bg-btn-primary"}
              onClick={openSlider}
            >
              Search for places
            </Button>

            <Button className="p-2.5 rounded-full bg-btn-primary">
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
            </Button>
          </div>
          <WeatherIcon
            weatherIcon={locationWeather?.currentConditions?.icon}
            className={"w-[150px] h-[174px] object-contain"}
          />
          <WeatherTemp
            temp={locationWeather?.currentConditions?.temp}
            tempClassname={"text-[144px] font-medium"}
            unitClassName={"text-5xl text-text-secondary"}
          />
          <WeatherCondition />
          <WeatherDay
            time={locationWeather?.currentConditions?.datetimeEpoch}
            address={locationWeather?.address}
          />
        </>
      )}
    </section>
  );
};

export default CurrentWeather;
