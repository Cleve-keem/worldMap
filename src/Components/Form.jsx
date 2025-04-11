import React, { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import { useUrlPosition } from "../Hooks/useUrlPosition";
import Message from "./Message";
import DatePicker from "react-datepicker";
import { useCities } from "../Contexts/CitiesContext";
import { useNavigate } from "react-router-dom";
import { convertToEmoji } from "../utils/convertEmoji";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export default function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeoCoding, setIsLoadingGeoCoding] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [emoji, setEmoji] = useState(null);
  const { lat, lng } = useUrlPosition();
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!(lat && lng)) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeoCoding(true);
          setFetchError(""); // reset error
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          console.log(data);
          if (!data.countryCode) {
            throw new Error("This isn't a country, 😊 Click somewhere else");
          }
          setCityName(data.city || data.locality);
          setCountry(data.country);
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

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) return;

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { latitude: lat, longitude: lng },
    };

    await createCity(newCity);
    navigate("/app/cities");
  }

  if (isLoadingGeoCoding) return <p>Loading...</p>;

  if (fetchError) {
    return <Message message={fetchError} />;
  }

  return (
    <form
      className={`${styles.form} ${isLoading ? styles.isLoading : ""}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City Name</label>
        <input
          id="cityName"
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />

        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">
          When did you go to {cityName} {country}?
        </label>

        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary" disable={isLoading}>
          {isLoading ? "Adding..." : "Add"}
        </Button>
        <BackButton />
      </div>
    </form>
  );
}
