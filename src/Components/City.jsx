import React from "react";
import styles from "./City.module.css";
import { useParams } from "react-router-dom";
import { useCities } from "../Contexts/CitiesContext";

export default function City() {
  const { id } = useParams();
  const { currentCity, getCity } = useCities();

  return <p>City</p>;
}
