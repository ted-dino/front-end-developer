import { createContext, useState } from "react";
import stays from "../stays.json";

const FilterContext = createContext();
export function FilterProvider({ children }) {
  const [item, setItem] = useState(stays);

  const filterResult = (location, guest) => {};

  return (
    <FilterContext.Provider value={{ item }}>{children}</FilterContext.Provider>
  );
}

export default FilterContext;
