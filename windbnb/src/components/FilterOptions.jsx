import { useEffect, useRef, useState, useContext } from "react";
import FilterContext from "../context/FilterContext";
import { FaSearch } from "react-icons/fa";
import CityList from "./CityList";

const FilterOptions = (props) => {
  const { location, setLocation, guest, setGuest, filterStays } =
    useContext(FilterContext);

  const ref = useRef(null);
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onClickOutside(false);
    filterStays(location, guest);
  };

  return (
    <div
      ref={ref}
      className={
        props.show
          ? "absolute z-50 bg-white w-full md:h-[460px] inset-0 flex items-center shadow-md duration-700 transition-transform open"
          : "absolute z-50 bg-white w-full md:h-[460px] inset-0 flex items-center shadow-md duration-700 transition-transform close"
      }
    >
      <form
        onSubmit={handleSubmit}
        className="md:container mx-auto flex items-center text-center border divide-x shadow-sm"
      >
        <div className="form-floating w-full pr-0.5">
          <input
            placeholder="Never Gonna Give You Up"
            type="text"
            name="location"
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="form-control placeholder:text-transparent focus:rounded-2xl focus-visible:outline_none"
          />
          <label htmlFor="location">Location</label>
        </div>
        <div className="form-floating w-full">
          <input
            placeholder="Add guest"
            type="text"
            name="guest"
            id="guest"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            className="form-control placeholder:text-transparent  focus:rounded-2xl focus-visible:outline_none"
          />
          <label htmlFor="guest">Guest</label>
        </div>
        <div className="w-full py-0.5">
          <button className="flex items-center mx-auto py-3.5 px-7 bg-btn-primary text-white rounded-2xl ">
            <FaSearch />
            Search
          </button>
        </div>
      </form>
      adasdasd
    </div>
  );
};

export default FilterOptions;
