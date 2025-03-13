import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import styles from "./PageNavbar.module.css";

export default function PageNavbar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={`${styles.loginBtn} green-btn`}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
