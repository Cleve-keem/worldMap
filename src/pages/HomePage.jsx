import React from "react";
import PageNavbar from "../Components/PageNavbar";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <PageNavbar />
      <div className={styles.homePage}>
        <h1>
          As you travel the world. WorldMap keeps track of your adventures.
        </h1>
        <p>
          The world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <Link to="/login" className={`${styles.homeBtn} green-btn`}>
          START TRACKING NOW
        </Link>
      </div>
    </div>
  );
}
