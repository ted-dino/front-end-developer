import { createContext, useState, useEffect } from "react";
import stays from "../stays.json";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [items, setItems] = useState(stays);
  const [location, setLocation] = useState("");
  const [guest, setGuest] = useState("");

  const filterStays = (city, people) => {
    if (city === "" && people === "") {
      return;
    } else {
      const filteredResult = stays.filter((property) => {
        return (
          property.maxGuests >= people &&
          property.city.toLowerCase() === city.toLowerCase()
        );
      });
      setItems(filteredResult);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        stays,
        items,
        setItems,
        filterStays,
        location,
        setLocation,
        guest,
        setGuest,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
