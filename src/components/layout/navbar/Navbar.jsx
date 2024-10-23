import "./navbar.css";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="">
          <img
            src="https://res.cloudinary.com/ddtbb44ju/image/upload/c_crop,w_150,h_150/v1728950900/navbar-logo_ywakpc.png"
            alt="logo"
          />
        </a>
      </div>
      <ul className="navbar-links">
        <a href="#">
          <li>Urbanas</li>
        </a>
        <a href="#">
          <li>Deportivas</li>
        </a>
        <a href="#">
          <li>Elegantes</li>
        </a>
        <a href="#">
          <li>Todas</li>
        </a>
      </ul>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};
