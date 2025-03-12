import React from "react";
import PageNavbar from "../Components/PageNavbar";

export default function HomePage() {
  return (
    <>
      <PageNavbar />
      <div className={styles.homePage}>
        <h2>
          As you travel the world. WorldMap keeps track of your adventures.
        </h2>
        <p>
          The world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.
        </p>
      </div>
    </>
  );
}
