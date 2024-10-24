import { CiShoppingCart } from "react-icons/ci";
import "./cartWidget.css";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <Link to="/cart" className="container-cartW">
      <CiShoppingCart />
      <span>0</span>
    </Link>
  );
};
