import React from "react";
import { FixedSizeList as List } from "react-window";
import styles from "@/styles/VirtualTable.module.css";

const CountryDetailsTable = ({ details }) => {
  const countryDetails = [
    { key: "Capital", value: details.capital },
    { key: "Largest City", value: details.largestCity },
    { key: "Population", value: details.population },
    { key: "Area (sq km)", value: details.area },
    { key: "Languages", value: details.languages.join(", ") },
    { key: "Currency", value: details.currency },
  ];
  const renderRow = ({ index, style }) => {
    const detail = countryDetails[index];
    return (
      <div style={style} className={styles.detailRow}>
        <div className={styles.detailKey}>{detail.key}</div>
        <div className={styles.detailValue}>{detail.value}</div>
      </div>
    );
  };

  return (
    <div className={styles.countryDetailsTable}>
      <List
        height={150}
        itemCount={countryDetails.length}
        itemSize={50}
        width="500px"
      >
        {renderRow}
      </List>
    </div>
  );
};

export default CountryDetailsTable;
