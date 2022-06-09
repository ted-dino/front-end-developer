import { useContext } from "react";
import DrawerContext from "../context/DrawerContext";
import { useEffect, useRef } from "react";

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
      className="drawer absolute bg-white w-full h-[460px] inset-0 flex justify-center items-center shadow-md"
    >
      <form className="flex justify-center items-center">
        <div className="country">
          <input
            type="text"
            name="location"
            id="location"
            className="block w-full border "
          />
        </div>
        <div className="guest">- [0] +</div>
        <div>
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default FilterOptions;
