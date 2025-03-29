import React from "react";
import styles from "./Map.module.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.map}
      onClick={() => {
        navigate("form");
      }}
    >
      <p>Map</p>
      <p>
        Position: latitude={lat}, langitude={lng}
      </p>
    </div>
  );
}
