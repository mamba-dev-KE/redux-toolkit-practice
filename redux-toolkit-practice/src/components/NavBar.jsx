import React from "react";
import { CartIcon } from "../assets/icons";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <nav>
      <div className="nav-center">
        <h3>RTK Store</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
