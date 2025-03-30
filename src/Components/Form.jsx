import React from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City Name</label>
        <input type="text" />
      </div>

      <div className={styles.row}>
        <label htmlFor="cityName">When did you go to?</label>
        <input type="text" />
      </div>

      <div className={styles.row}>
        <label htmlFor="cityName">Notes about your trip to</label>
        <textarea />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}
