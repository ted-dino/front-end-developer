import { useContext } from "react";
import FilterContext from "../context/FilterContext";
import { FaMapMarkerAlt } from "react-icons/fa";

const CityList = () => {
  const { stays } = useContext(FilterContext);

  const cities = stays.map((element) => {
    return element.city;
  });

  const uniqueCities = [...new Set(cities)];

  return (
    <ul>
      {uniqueCities.map((city) => (
        <li className="flex items-center gap-2">
          <FaMapMarkerAlt /> {`${city}, Finland`}
        </li>
      ))}
    </ul>
  );
};

export default CityList;
