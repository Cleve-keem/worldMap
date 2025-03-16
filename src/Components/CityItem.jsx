import React from "react";
import styles from "./CityItem.module.css";

export default function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.cityName}>{emoji}</span>
      <h3 className={styles.cityName}>{cityName}</h3>
      <time className={styles.cityName}>{date}</time>
    </li>
  );
}
