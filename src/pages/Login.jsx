import React from "react";
import PageNavbar from "../Components/PageNavbar";
import styles from "./Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <PageNavbar />
      <div className={styles.center}>Login</div>
    </div>
  );
}
