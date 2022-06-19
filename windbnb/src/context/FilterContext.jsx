import { createContext, useState, useEffect } from "react";
import stays from "../stays.json";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [items, setItems] = useState(stays);
  const [location, setLocation] = useState("");
  const [guest, setGuest] = useState("");
  const [showCity, setShowCity] = useState(false);
  const [showGuest, setShowGuest] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  const filterStays = (city, people) => {
    if (!city && !people) {
      return;
    } else if (!city && people) {
      const filteredResult = stays.filter((property) => {
        return property.maxGuests >= people;
      });
      setItems(filteredResult);
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
        showCity,
        setShowCity,
        showGuest,
        setShowGuest,
        adultCount,
        setAdultCount,
        childCount,
        setChildCount,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
