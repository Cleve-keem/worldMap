import React, { useEffect } from "react";
import styles from "./City.module.css";
import { useParams } from "react-router-dom";
import { useCities } from "../Contexts/CitiesContext";
import BackButton from "./BackButton";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("fr", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function City() {
  const { id } = useParams();
  const { currentCity, getCity, isLoading } = useCities();

  const { cityName, emoji, date, notes } = currentCity;

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City Name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <h3>{date ? formatDate(date) : "unknown"}</h3>
      </div>

      <div className={styles.row}>
        <h6>Your Notes</h6>
        <p>{notes}</p>
      </div>

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a href={`https://en.wikipedia.org/wiki/${cityName}`}>
          Check out {cityName} on Wikipedia &rarr;{" "}
        </a>
      </div>
      <BackButton />
    </div>
  );
}
