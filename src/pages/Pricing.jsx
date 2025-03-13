import React from "react";
import PageNavbar from "../Components/PageNavbar";
import styles from "./Pricing.module.css";

export default function Pricing() {
  return (
    <div>
      <PageNavbar />
      <div className={styles.center}>
        <div className={styles.pricing}>
          <div className={styles.imageContainer}>
            <img src="./ian-panelo2.jpg" alt="iain wells map" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            labore provident quasi nihil incidunt eveniet omnis dolore. Rem
            dolorem ipsa ad facilis saepe. Sint praesentium, nam modi alias
            voluptatem amet. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Accusantium consequuntur, deserunt libero earum, ex nisi
            tempore consequatur fugit iure adipisci ratione possimus quis porro?
            Modi recusandae sapiente laudantium id ipsam? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Ratione, ad minima eligendi
            itaque excepturi voluptatum fuga fugit sint! Laudantium, rerum? Quis
            exercitationem excepturi in, veritatis enim corrupti quos. Debitis,
            earum.
          </p>
        </div>
      </div>
    </div>
  );
}
