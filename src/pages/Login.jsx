import React, { useEffect } from "react";
import PageNavbar from "../Components/PageNavbar";
import styles from "./Login.module.css";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  login();

  useEffect(function () {
    if (isAuthenticated) {
      navigate("/app")
    }
  }, []);
  return (
    <div className={styles.container}>
      <PageNavbar />
      <div className={styles.center}>Login</div>
    </div>
  );
}
