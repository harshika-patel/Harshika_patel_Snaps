import './Header.scss';
 const Header=({ handleTogglePanel, isTagsPanelOpen })=>{
    return(
    <div className="header">
        <p className="header__wordmark">Snaps</p>
        <button onClick={handleTogglePanel} 
        className={`header__filter-btn ${isTagsPanelOpen ? "header__filter-btn--clicked" : ""}`}>
            Filters
            <div className="header__filter-btn--icon"></div>
        </button>
    </div>
)};

export default Header;