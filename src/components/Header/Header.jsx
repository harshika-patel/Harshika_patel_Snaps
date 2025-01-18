import './Header.scss';
export default function Header(){
    return(<div className="header">
    <p className="header__wordmark">Snaps</p>
    <button className="header__filter-btn">Filters
        <div className="header__filter-btn--icon"></div>
    </button>
    </div>
);
};