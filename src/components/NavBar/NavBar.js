import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { ShoppingCart } from "phosphor-react";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links">
        <Link to="/" className="navbar__link">
          Shop
        </Link>
        <Link to="/cart" className="navbar__link">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
