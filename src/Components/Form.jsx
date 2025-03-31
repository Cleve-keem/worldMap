import React from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";

export default function Form() {
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
        <BackButton />
      </div>
    </form>
  );
}
