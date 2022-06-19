import { useEffect, useRef, useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import FilterContext from "../context/FilterContext";
import CityList from "./CityList";
import GuestOption from "./GuestOption";

const FilterOptions = (props) => {
  const {
    location,
    setLocation,
    guest,
    setGuest,
    filterStays,
    setShowCity,
    setShowGuest,
  } = useContext(FilterContext);

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
    setShowCity(false);
    setShowGuest(false);
  };

  return (
    <div
      ref={ref}
      className={
        props.show
          ? "absolute z-50 bg-white w-full h-2/4 p-5 sm:p-0sm:h-[460px] inset-0 shadow-md duration-700 transition-transform open"
          : "absolute z-50 bg-white w-full h-2/4 p-5 sm:p-0sm:h-[460px] inset-0 shadow-md duration-700 transition-transform close"
      }
    >
      <div className="h-full sm:h-auto relative">
        <span className="block sm:hidden font-bold my-5">Edit your search</span>
        <form
          onSubmit={handleSubmit}
          className="sm:container sm:mt-40 mx-auto grid grid-cols-1 sm:grid-cols-3 text-center border-0 sm:divide-x sm:border shadow-sm"
        >
          <div className="form-floating  pr-0.5 border sm:border-0">
            <input
              placeholder="Never Gonna Give You Up"
              type="text"
              name="location"
              id="location"
              onChange={(e) => setLocation(e.target.value)}
              value={location && `${location}, Finland`}
              onFocus={() => {
                setShowCity((prevState) => !prevState);
                setShowGuest(false);
              }}
              className="form-control placeholder:text-transparent focus:rounded-2xl focus-visible:outline_none"
            />
            <label htmlFor="location">Location</label>
          </div>
          <div className="form-floating border sm:border-0">
            <input
              placeholder="Add guest"
              type="text"
              name="guest"
              id="guest"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              onFocus={() => {
                setShowGuest((prevState) => !prevState);
                setShowCity(false);
              }}
              className="form-control placeholder:text-transparent  focus:rounded-2xl focus-visible:outline_none"
            />
            <label htmlFor="guest">Guest</label>
          </div>
          <div className="py-0.5 border-0 absolute inset-x-0 bottom-0 mb-5 sm:mb-0 sm:static">
            <button className="flex items-center mx-auto py-3.5 px-7 bg-btn-primary text-white rounded-2xl ">
              <FaSearch />
              Search
            </button>
          </div>
        </form>
        <div className="absolute sm:container inset-x-0 mx-auto flex">
          <CityList />
          <GuestOption />
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
