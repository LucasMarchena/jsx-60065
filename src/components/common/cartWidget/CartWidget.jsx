import { IoIosCart } from "react-icons/io";
import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <div className="container-cartW">
      <IoIosCart />
      <span>0</span>
    </div>
  );
};
