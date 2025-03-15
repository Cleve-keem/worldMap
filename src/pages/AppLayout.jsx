import React from "react";
import Sidebar from "../Components/Sidebar";
import Map from "../Components/Map";
import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Sidebar />
      <Map />
    </div>
  );
}
