import { Link } from "react-router-dom"; // Importa Link
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/ddtbb44ju/image/upload/c_crop,w_150,h_150/v1728950900/navbar-logo_ywakpc.png"
            alt="logo"
          />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/category/Urbanas">Urbanas</Link>
        </li>
        <li>
          <Link to="/category/Deportivas">Deportivas</Link>
        </li>
        <li>
          <Link to="/category/Elegantes">Elegantes</Link>
        </li>
        <li>
          <Link to="/">Todas</Link>
        </li>
      </ul>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};
