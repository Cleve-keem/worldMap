import React from "react";
import styles from "./Map.module.css";

export default function Map() {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=-86.9569%2C37.3755%2C-86.7569%2C37.5755&layer=mapnik"
        allowFullScreen=""
      ></iframe>
    </div>
  );
}
