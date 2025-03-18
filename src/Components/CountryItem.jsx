import React from "react";
import styles from "./CountryItem.module.css"

export default function CountryItem({ country }) {
  console.log(country)
  const { country: countryName, emoji } = country;
  return (
    <li className={styles.cityItem}>
      <span className={styles.cityEmoji}>{emoji}</span>
      <h3 className={styles.cityName}>{countryName}</h3>
    </li>
  );
}
