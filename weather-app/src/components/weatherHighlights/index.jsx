import useStore from "../../hooks/weatherHook";
import roundValue from "../../utils/roundValue";
import convertDirection from "../../utils/covertDirection";
import HighlightCard from "./HighlightCard";

const Index = () => {
  const { locationWeather, unitGroup } = useStore();
  const currentCondition = locationWeather?.currentConditions;

  return (
    <div>
      <h2 className="text-2xl font-bold">Today's Highlight</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <HighlightCard className="text-center bg-color-secondary h-52 flex flex-col justify-around">
          <span className="font-medium">Wind Status</span>
          <div className="flex justify-center items-baseline">
            <span className="text-6xl">
              {roundValue(currentCondition?.windspeed)}
            </span>
            <span className="text-3xl">
              {unitGroup === "metric" ? "kph" : "mph"}
            </span>
          </div>
          <div>
            <span className="text-sm">
              {convertDirection(currentCondition?.winddir)}
            </span>
          </div>
        </HighlightCard>
        <HighlightCard className="text-center bg-color-secondary h-52 flex flex-col justify-around">
          <span className="font-medium">Humidity</span>
          <div>
            <span className="text-6xl">
              {roundValue(currentCondition?.humidity)}
            </span>
            <span className="text-3xl">%</span>
          </div>
          <div className="w-full px-12">
            <div className="flex justify-between text-xs font-bold text-text-secondary">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="bg-text-primary rounded-full overflow-hidden">
              <span
                className={`block h-2 w-[${roundValue(
                  currentCondition?.humidity
                )}%] bg-[#FFEC65]`}
              ></span>
            </div>
            <span className="w-full block text-right text-xs font-bold text-text-secondary">
              %
            </span>
          </div>
        </HighlightCard>
        <HighlightCard className="text-center bg-color-secondary h-40 flex flex-col justify-evenly">
          <span className="font-medium">Visibility</span>
          <div>
            <span className="text-6xl">
              {roundValue(currentCondition?.visibility)}
            </span>
            <span className="text-3xl">
              {unitGroup === "metric" ? "kilometers" : "miles"}
            </span>
          </div>
        </HighlightCard>
        <HighlightCard className="text-center bg-color-secondary h-40 flex flex-col justify-evenly">
          <span className="font-medium">Air Pressure</span>
          <div>
            <span className="text-6xl">
              {roundValue(currentCondition?.pressure)}
            </span>
            <span className="text-3xl">
              {unitGroup === "metric" ? "kPa" : "mb"}
            </span>
          </div>
        </HighlightCard>
      </div>
    </div>
  );
};

export default Index;
