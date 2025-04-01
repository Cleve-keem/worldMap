import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../Hooks/useUrlPosition";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export default function Form() {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");
  const [date, setDate] = useState(new Date());
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [emoji, setEmoji] = useState(null);
  const { lat, lng } = useUrlPosition();

  useEffect(
    function () {
      async function fetchCityData() {
        try {
          setIsLoadingGeoCoding(true);
          setFetchError(""); // reset error
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();

          if (!data.countryCode) {
            throw new Error("This isn't a country 😊");
          }
          setCityName(data.city || data.locality);
          setCountryName(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (error) {
          console.log(error.message);
          setFetchError(error.message);
        } finally {
          setIsLoadingGeoCoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  if (isLoadingGeoCoding) {
    <p>Loading...</p>;
  }

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City Name</label>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />

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
