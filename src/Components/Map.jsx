import React from "react";
import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.map}>
      <p>Map</p>
      <p>
        Position: latitude={lat}, langitude={lng}
      </p>
    </div>
  );
}
