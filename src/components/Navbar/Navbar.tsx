import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <>
      {/* <nav className={styles.navbar}>
        <ul>
          <NavLink to="#" className={styles.logo}>
            Lendsqr
          </NavLink>
          <NavLink to="/" end className={styles.navLinks}>
            Home
          </NavLink>
          <NavLink to="/about" className={styles.navLinks}>
            Dashboard
          </NavLink>
          <NavLink to="/shop" className={styles.navLinks}>
            Shop
          </NavLink>
        </ul>
      </nav> */}
      <div className={styles.nav}>
        <nav className=" navbar navbar-expand-lg navbar-light bg-info ">
          <NavLink to="/">
            <h4 className="text-light navbar-brand">Lendsqr</h4>
          </NavLink>

          <button
            className="navbar-toggler bg-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link text-light">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dashboard" className="nav-link text-light">
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
