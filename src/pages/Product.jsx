import React from "react";
import PageNavbar from "../Components/PageNavbar";
import styles from "./Product.module.css"

export default function Product() {
  return (
    <div className={styles.container}>
      <PageNavbar />
      <div className={styles.center}>
        <div className={styles.productPage}>
          <div className={styles.imageContainer}>
            <img src="./Ian-panelo.jpg" alt="Ian panelo image" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            rem voluptatem ipsam est delectus nemo, harum ut explicabo! Sit
            obcaecati perferendis corporis natus eum dolore commodi quasi omnis
            porro voluptas! Ipsa, eos quidem quasi quisquam impedit molestiae in
            nemo possimus, ut eveniet quo alias repudiandae error earum. Nobis
            pariatur quibusdam excepturi, officia quidem, tenetur, eveniet rerum
            nisi ipsum accusamus qui! Maxime asperiores repellat doloribus!
            Rerum veniam dolore tempora illum officia voluptatum dignissimos
            dolores quo facilis quis.
          </p>
        </div>
      </div>
    </div>
  );
}
