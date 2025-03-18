import React from "react";
import styles from "./CountryItem.module.css";

export default function CountryItem({ country }) {
  const { country: countryName, emoji } = country;
  return (
    <li className={styles.countryItem}>
      <span role="img" aria-label={countryName} className={styles.countryEmoji}>
        {emoji}
      </span>
      <h3 className={styles.countryName}>{countryName}</h3>
    </li>
  );
}
