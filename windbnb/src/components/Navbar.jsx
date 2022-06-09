import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import FilterOptions from "./FilterOptions";
// import { useContext } from "react";
// import DrawerContext from "../context/DrawerContext";

const Navbar = () => {
  // const { showDrawer } = useContext(DrawerContext);
  const [showDrawer, setShowDrawer] = useState(false);
  const filterButton = useRef();

  const showOptions = () => {
    setShowDrawer((prevState) => !prevState);
  };

  useEffect(() => {
    const closeDrawer = (e) => {
      if (filterButton.current && !filterButton.current.contains(e.target)) {
        alert("You clicked outside of me!");
      }
    };

    document.body.addEventListener("click", closeDrawer);
    return () => document.removeEventListener("click", closeDrawer);
  }, []);

  return (
    <header className="flex py-6 items-center justify-between ">
      <div className="logo">
        <img src={logo} alt="windbnb" />
      </div>
      <button
        ref={filterButton}
        onClick={showOptions}
        className="filter-button flex items-center rounded-2xl shadow divide-x"
      >
        <div className="py-4 px-4">Helsinki, Finland</div>
        <div className="py-4 px-4">Add guests</div>
        <div className="py-4 px-4">
          <FaSearch />
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
