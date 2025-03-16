import React from "react";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";


export default function CityList({ cities, isLoading }) {
  if (isLoading) {
    return <p>LOADING...</p>;
  }
  return (
    <div className={styles.cityList}>
      <ul>
        {cities.map((city) => (
          <CityItem city={city} key={city.id}/>
        ))}
      </ul>
    </div>
  );
}
