import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../Hooks/useUrlPosition";
import { use } from "react";

export default function Form() {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountry] = useState("");
  const [date, setDate] = useState(new Date());

  // const { lat, lng } = useUrlPosition();

  useEffect(function () {}, []);

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City Name</label>
        <input type="text" value={cityName} />

        {/* <span>emoji</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="cityName">When did you go to?</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
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
