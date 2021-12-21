import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import "../pages/Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";

function Navbar() {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const count = useSelector((state) => state.basket.count);

  return (
    <>
      <div className="navbar">
        <div className="navbar-item">
          <div className="nav-left">
            <Link to="/">
              <img
                src="https://www.investcorp.com/wp-content/uploads/2019/11/42_Bewakoof_Logo_Black.png"
                alt="logo"
                className="nav-logo"
              />
            </Link>
          </div>
          <div className="nav-right">
            <ul>
              <Link to="checkout">
                <li className="checkout-li">
                  <FaShoppingCart className="shopping-cart" />
                  <span className="cart-num">
                    <p>{count}</p>
                  </span>
                </li>
              </Link>
              <li>
                <FaUserCircle />
              </li>
              <li>
                {!isAuthenticated && (
                  <button
                    className="login-btn"
                    onClick={() => loginWithRedirect()}
                  >
                    Login
                  </button>
                )}
                {isAuthenticated && (
                  <button className="login-btn" onClick={() => logout()}>
                    Hey, {user.given_name}
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
