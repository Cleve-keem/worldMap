import React from "react";
import styles from "./CountryList.module.css";
import Message from "./Message";
import CountryItem from "./CountryItem";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <p>LOADING...</p>;
  }

  if (!cities.length) {
    return (
      <Message message="Add your first country by clicking on a city on the map" />
    );
  }

  console.log(cities);

  let countries = cities.reduce((arr, city) => {
    if (!arr?.some((item) => item.country === city.country)) {
      arr.push({ country: city.country, emoji: city.emoji });
    }
    return arr;
  }, []);

  return (
    <div className={styles.countries}>
      <ul className={styles.CountryList}>
        {countries.map((country) => (
          <CountryItem country={country} key={country.country} />
        ))}
      </ul>
    </div>
  );
}
