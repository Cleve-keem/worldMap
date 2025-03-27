import React from "react";

export default function Form() {
  return <form>
    <div className={style.row}>
        <label htmlFor="cityName">City Name</label>
        <input type="text" />
    </div>
  </form>;
}
