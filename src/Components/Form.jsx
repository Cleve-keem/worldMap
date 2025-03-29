import React from "react";
import styles from "./Form.module.css";

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
        <button>Add</button>
        <button>&larr; Back</button>
      </div>
    </form>
  );
}
