import useStore from "../hooks/weatherHook";
import roundValue from "../utils/roundValue";

const WeatherTemp = ({ tempClassname, unitClassName, temp }) => {
  const unitGroup = useStore((store) => store.unitGroup);
  return (
    <>
      <span className={tempClassname}>
        {roundValue(temp)}
        <span className={unitClassName}>
          {unitGroup === "metric" ? "°C" : "°F"}
        </span>
      </span>
    </>
  );
};

export default WeatherTemp;
