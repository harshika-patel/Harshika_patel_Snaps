import "./Header.scss";
import { useLocation, Link } from "react-router-dom";
import arrowIcon from "../../assets/Icons/Arrow.svg";
const Header = ({ handleTogglePanel, isTagsPanelOpen }) => {
  const location = useLocation();
  return (
    <div className="header">
      <Link to="/" className="header__wordmark-link">
        <p className="header__wordmark">Snaps</p>
      </Link>
      {location.pathname === "/" ? (
        <button
          onClick={handleTogglePanel}
          className={`header__filter-btn ${
            isTagsPanelOpen ? "header__filter-btn--clicked" : ""
          }`}
        >
          Filters
          <div className="header__filter-btn--icon"></div>
        </button>
      ) : (
        <Link to="/" className="header__arrowIcon-link">
          <div className="header__arrowIcon">
            <img src={arrowIcon} alt="arrow icon" />
            <h2>Home</h2>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;
