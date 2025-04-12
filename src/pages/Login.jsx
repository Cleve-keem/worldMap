import React, { useEffect, useState } from "react";
import PageNavbar from "../Components/PageNavbar";
import styles from "./Login.module.css";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) Login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/app");
      }
    },
    [isAuthenticated, navigate]
  );

  return (
    <div className={styles.container}>
      <PageNavbar />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </div>
  );
}
