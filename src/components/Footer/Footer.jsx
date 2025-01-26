import "./Footer.scss";
import { Link } from "react-router-dom";
import facebook from "../../assets/Icons/Facebook.svg";
import twitter from "../../assets/Icons/X_twitter.svg";
import instagram from "../../assets/Icons/Instagram.svg";
import pinterest from "../../assets/Icons/Pinterest.svg";
export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__mainSection">
        <div className="footer__section1">
          <Link to="/" className="footer__wordmark-link">
            <p className="footer__wordmark">Snaps</p>
            </Link>
            <div className="footer__para">
              <p>For photographers</p>
              <p>Hire talent</p>
              <p>Inspiration</p>
            </div>
            <div className="footer__link">
              <a href="/">About</a>
              <a href="/">Careers</a>
              <a href="/">Support</a>
            </div>
        </div>

        <div className="footer__icon">
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="Facebook-icon" />
          </a>
          <a href="https://x.com/">
            <img src={twitter} alt="Twitter-icon" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="instgram-icon" />
          </a>
          <a href="https://ca.pinterest.com/">
            <img src={pinterest} alt="pinterest-icon" />
          </a>
        </div>
      </div>
      <div className="footer__lists-details">
        <ul className="footer__lists">
          <li className="footer__list">&copy; 2025 Snaps</li>
          <li className="footer__list">. Terms</li>
          <li className="footer__list">Privancy</li>
          <li className="footer__list">Cookies</li>
        </ul>
      </div>
    </section>
  );
}
