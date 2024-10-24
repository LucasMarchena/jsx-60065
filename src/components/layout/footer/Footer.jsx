import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/ddtbb44ju/image/upload/c_crop,w_150,h_150/v1728950900/navbar-logo_ywakpc.png"
              alt="Logo"
            />
          </Link>
        </div>
        <ul className="footer-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
