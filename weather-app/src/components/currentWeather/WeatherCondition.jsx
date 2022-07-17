import useStore from "../../hooks/weatherHook";
import formatString from "../../utils/formatString";

const WeatherCondition = () => {
  const locationWeather = useStore((state) => state.locationWeather);
  const condition = locationWeather?.currentConditions?.conditions;

  return (
    <div>
      <span className="text-4xl text-text-secondary font-semibold">
        {condition && formatString(condition)}
      </span>
    </div>
  );
};

export default WeatherCondition;
