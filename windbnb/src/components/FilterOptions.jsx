import { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const FilterOptions = (props) => {
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

  if (!props.show) return null;
  return (
    <div
      ref={ref}
      className="absolute bg-white w-full h-[460px] inset-0 flex justify-center items-center shadow-md"
    >
      <form className="md:container mx-auto flex justify-items-center items-center text-center ">
        <div className="form-floating  w-full">
          <input
            placeholder="Never Gonna Give You Up"
            type="text"
            name="location"
            id="location"
            className="form-control placeholder:text-transparent focus:border-[#333333]"
          />
          <label htmlFor="location">Location</label>
        </div>
        <div className="form-floating w-full ">
          <input
            placeholder="Add guest"
            type="number"
            name="guest"
            id="guest"
            className="form-control placeholder:text-transparent focus:border-[#333333]"
          />
          <label htmlFor="guest">Guest</label>
        </div>
        <div className="w-full p-4 border">
          <button className="flex items-center mx-auto">
            <FaSearch className="fill-btn-primary" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterOptions;
