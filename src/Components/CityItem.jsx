import React from "react";
import styles from "./CityItem.module.css";

export default function CityItem({ city }) {
  const { cityName, emoji, date } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.cityEmoji}>{emoji}</span>
      <h3 className={styles.cityName}>{cityName}</h3>
      <time className={styles.cityDate}>{date}</time>
      <button className={styles.cityDelBtn}>&times;</button>
    </li>
  );
}
