import { useEffect, useRef, useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import FilterContext from "../context/FilterContext";

const FilterOptions = (props) => {
  const { filterResult } = useContext(FilterContext);
  const [formData, setFormData] = useState({
    city: "",
    maxBeds: 0,
  });
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

  const handleClick = (e) => {
    e.preventDefault();
    props.onClickOutside(false);
    filterResult("Turku", 2);
  };

  if (!props.show) return null;
  return (
    <div
      ref={ref}
      className="absolute bg-white w-full md:h-[460px] inset-0 flex justify-center items-center shadow-md"
    >
      <form className="md:container mx-auto flex items-center text-center border divide-x">
        <div className="form-floating w-full pr-0.5">
          <input
            placeholder="Never Gonna Give You Up"
            type="text"
            name="location"
            id="location"
            className="form-control placeholder:text-transparent  focus:rounded-2xl focus-visible:outline_none"
          />
          <label htmlFor="location">Location</label>
        </div>
        <div className="form-floating w-full">
          <input
            placeholder="Add guest"
            type="text"
            name="guest"
            id="guest"
            className="form-control placeholder:text-transparent  focus:rounded-2xl focus-visible:outline_none"
          />
          <label htmlFor="guest">Guest</label>
        </div>
        <div className="w-full py-0.5">
          <button
            onClick={handleClick}
            className="flex items-center mx-auto py-3.5 px-7 bg-btn-primary text-white rounded-2xl "
          >
            <FaSearch />
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterOptions;
