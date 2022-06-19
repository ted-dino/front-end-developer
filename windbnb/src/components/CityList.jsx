import { useContext } from "react";
import FilterContext from "../context/FilterContext";
import { FaMapMarkerAlt } from "react-icons/fa";

const CityList = () => {
  const { stays, setLocation, setShowCity, showCity } =
    useContext(FilterContext);

  const cities = stays.map((element) => {
    return element.city;
  });
  const uniqueCities = [...new Set(cities)];

  return (
    <div
      className={
        showCity ? "mt-7 ml-5 sm:w-1/3" : "hidden sm:block sm:w-1/3 invisible"
      }
    >
      <ul className="flex flex-col gap-3">
        {uniqueCities.map((city, index) => (
          <li
            key={index}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setLocation(city);
              setShowCity(false);
            }}
          >
            <FaMapMarkerAlt className="fill-accent" />
            <span className="text-accent">{`${city}, Finland`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
