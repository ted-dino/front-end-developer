import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const showOptions = () => {
    console.log("clicked");
  };
  return (
    <header className="header d-flex">
      <div className="header__logo">
        <img src={logo} alt="windbnb" />
      </div>
      <button className="header__search d-flex" onClick={showOptions}>
        <div className="country">Helsinki, Finland</div>
        <div className="guest">Add guests</div>
        <div className="icon">
          <FaSearch />
        </div>
      </button>
    </header>
  );
};

export default Header;
