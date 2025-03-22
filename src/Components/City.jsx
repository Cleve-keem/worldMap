import React from "react";
import styles from "./City.module.css";
import { useParams } from "react-router-dom";

export default function City() {
  const { id } = useParams();
  
  return <p>City</p>;
}
