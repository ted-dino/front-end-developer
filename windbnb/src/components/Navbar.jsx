import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { useState, useContext, useRef } from "react";
import FilterOptions from "./FilterOptions";
import FilterContext from "../context/FilterContext";

const Navbar = () => {
  const { stays, setItems, location, setLocation, setGuest, guest } =
    useContext(FilterContext);
  const [showDrawer, setShowDrawer] = useState(false);
  const filterButton = useRef();

  const showOptions = () => {
    setShowDrawer((prevState) => !prevState);
  };

  const reloadPage = () => {
    setItems(stays);
    setLocation("");
    setGuest("");
  };

  const formatString = (city) => {
    return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  };

  return (
    <header className="flex py-6 items-center justify-between">
      <div className="logo cursor-pointer" onClick={reloadPage}>
        <img src={logo} alt="windbnb" />
      </div>
      <button
        ref={filterButton}
        onClick={showOptions}
        className="filter-button flex items-center rounded-2xl shadow divide-x divide-[#F2F2F2]"
      >
        <div className="py-4 px-4 text-primary">
          {location
            ? `${formatString(location)}, Finland`
            : "Where do you want to go?"}
        </div>
        <div className="py-4 px-4 text-secondary">
          {guest ? `${guest} guest(s)` : "Add guests"}
        </div>
        <div className="py-4 px-4">
          <FaSearch className="fill-btn-primary" />
        </div>
      </button>
      <FilterOptions
        show={showDrawer}
        onClickOutside={() => {
          setShowDrawer(false);
        }}
      />
    </header>
  );
};

export default Navbar;
