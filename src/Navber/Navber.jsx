import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from "react-redux";
function Navber() {
  const CountCart = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg  bg-dark text-white main_nav">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white" href="#">
          React Learning 2023
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse text-white"
          id="navbarSupportedContent"
        >
      <ul className="navbar-nav  mb-2 mb-lg-0 text-white text-center ms-auto">
            <li className="nav-item div_count">
              <Link
                to="/cart"
                type="button"
                className="btn btn-primary position-relative"
              >
                <GiShoppingBag />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {CountCart.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navber;
