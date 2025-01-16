import './Header.scss';
export default function Header(){
    return(<div className="header">
    <p className="header__wordmark">Snaps</p>
    <button className="header__filter-btn">Filters<i className="filter-btn__icon"></i></button>
    </div>
);
};