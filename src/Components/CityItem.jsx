import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.latitude}&lng=${position.longitude}`}
      >
        <span className={styles.cityEmoji}>{emoji}</span>
        <h3 className={styles.cityName}>{cityName}</h3>
        <time className={styles.cityDate}>{formatDate(date)}</time>
        <button className={styles.cityDelBtn}>&times;</button>
      </Link>
    </li>
  );
}
