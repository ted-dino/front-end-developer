import { createContext, useState } from "react";
import stays from "../stays.json";

const FilterContext = createContext();
export function FilterProvider({ children }) {
  const [items, setItems] = useState(stays);

  const filterResult = (location, guest) => {
    const result = items.filter((item) => {
      return (
        location.toLowerCase() === item.city.toLowerCase() &&
        guest <= item.maxGuests
      );
    });
    setItems(result);
  };

  return (
    <FilterContext.Provider value={{ items, filterResult }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterContext;
