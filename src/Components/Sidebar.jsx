import React from "react";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
    </div>
  );
}
