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
      {/* <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=-86.9569%2C37.3755%2C-86.7569%2C37.5755&layer=mapnik"
        allowFullScreen=""
      ></iframe> */}
    </div>
  );
}
