import React from "react";
import styles from "./CountryContent.module.css";

const TraditionsList = ({ traditions }) => {
  return (
    <div className={styles.sections}>
      <h3>Traditions</h3>
      <ul>
        {traditions.map((tradition, index) => (
          <li key={index}>{tradition}</li>
        ))}
      </ul>
    </div>
  );
};

export default TraditionsList;
